import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';
import { Cart, Product, ProductOrder, ProductOrders, Tag, UpdateProduct, User } from 'src/app/modal/Modal';
import { CartService } from 'src/app/service/cart.service';
import { ColorService } from 'src/app/service/color.service';
import { CommentService } from 'src/app/service/comment.service';
import { DiscriptionService } from 'src/app/service/discription.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { TagService } from 'src/app/service/tag.service';
import { TailleService } from 'src/app/service/taille.service';
import { UserService } from 'src/app/service/user.service';
import { ShoppingCartComponent } from '../all-category/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  name: string;
  user: User = {} as User;
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  tags: Tag[] = [];
  comment: Comment = {} as Comment;
  comments: Comment[];
  cartExist: Cart = {} as Cart;
  cart: Cart = {} as Cart;
  selectedProductOrder: ProductOrder;
  shoppingCartOrders: ProductOrders;
  colorList=[];
 disc: any = {};
 taille: any = {};


  sub: Subscription;
  productSelected: boolean = false;
  collapsed = true;
  orderFinished = false;
  showBtn = -1;
  submitted = false;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;


  description: string = '';
  showMyContainerInfo: boolean = false;

  idProduct: number;
  product: UpdateProduct;

  counter: number = 1;
  @Input() url = location.href;

  constructor(private productService: ProductService, private tagService: TagService,
    private orderService: OrderService, private route: ActivatedRoute, private userService: UserService,
    private commentService: CommentService, private dialog: MatDialog,
    private cartService: CartService,private DiscService : DiscriptionService, private tailleservice : TailleService,private colorservice:ColorService )
     {

  }

  ngOnInit() {
    this.loadOrders();
    this.sangleProduct();
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
    })
  }

  addToCart(order: ProductOrder, idUser :number) {
    ///hadi 2ali tzid fi carte rouge
    this.orderService.SelectedProductOrder = order;//tparcouri tableau mta3 productsorders fi html ali ijib order 
    this.selectedProductOrder = this.orderService.SelectedProductOrder;//wa7da fi service ou wa7da declare this //0
    this.productSelected = true;
    this.cart.name = order.product.name;
    this.cart.price = order.product.price;
    this.cart.quantity = 1;
    this.cart.pictureUrl = order.product.pictureUrl;
    console.log(idUser);
    
    this.cartService.addCartToUser(this.cart, idUser).subscribe(cart => {
      this.cart = cart;
      this.cartService.saveCartName(this.cart.name);
    })
  }

  removeFromCart(productOrder: ProductOrder, idUser : number) {
    let index = this.getProductIndex(productOrder.product);//tjib el index mta3 produit mais 2a7na 3ana produit wa7ed fi tableau 
   // nums:number[] = [1, 2, 3, 3];
   // let ind=this.nums.findIndex(x=> x===2);
    //console.log(ind);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
        //name ijiblek esmm el produit
      const name = this.cartService.getCartName();
      console.log(name);
      this.cartService.findCartsForUser(idUser).subscribe(carts => {
        this.cartExist = carts.filter(item => item.name === name)[0];
        this.cartService.removeFromCart(this.cartExist.id, idUser).subscribe(() => {
        })
      })
    }
    this.orderService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.orderService.ProductOrders;
    this.productSelected = false;
  }
/*********************faux */
  getProductIndex(product: Product): number {//iraja3 index mta3 produit fi productOrders mais productOrders houwa class fi westou tableau proctOrders
    return this.orderService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }
/*****************faux */
  loadOrders() {
    this.sub = this.orderService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.orderService.ProductOrders;
    });
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.productOrders = [];
    this.orderService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
    this.orderFinished = false;
    this.shoppingCartC.reset();

  }

  private sangleProduct() {
    this.product = new UpdateProduct();
    this.idProduct = this.route.snapshot.params.idProduct;
    this.tagService.findTagsForProduct(this.idProduct).subscribe(tags => {
      this.tags = tags;
    });
    this.commentService.findCommentsForProduct(this.idProduct).subscribe(comments => {
  //    this.comments = comments;
    });
    this.productService.findProductById(this.idProduct).subscribe(data => {
    
          this.productOrders.push(new ProductOrder(data, 0));//fi productOrders nchargi el produit haka 
        });
        this.colorservice.findcolorsForProduct(this.idProduct).subscribe(color=>
          {
           this.colorList=color;
           console.log(this.colorList)
         
          });
          this.tailleservice.findTailleForProduct(this.idProduct).subscribe((taille)=>
            {     console.log(taille)
              
             this.taille=taille
                               
                });

                   
               
            

            this.DiscService.findDiscsForProduct(this.idProduct).subscribe(disc=>
              {     console.log(disc)
             this.disc=disc
                                    
                });
        console.log(this.productOrders)
     
      this.submitted = true;
    }
  
  // addComment(idProduct, username) {
  //   this.comment.addedBy = username;
  //   this.commentService.addCommentToProduct(this.comment, idProduct).subscribe(comment => {
  //     this.comment = comment;
  //     window.location.reload();
  //   })
  // }
  login() {
    this.dialog.open(LoginComponent);
  }
}
