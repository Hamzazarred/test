

import { UserService } from './../../service/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryService } from './../../service/category.service';
import { ProductService } from './../../service/product.service';
import { Product, Category, User, Tag, Comment } from './../../modal/Modal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from 'src/app/service/tag.service';
import { CommentService } from 'src/app/service/comment.service';
import { AddCategoryComponent } from 'src/app/admin-pop/add-category/add-category.component';
import { AddProductComponent } from 'src/app/admin-pop/add-product/add-product.component';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { AddTagToProductComponent } from 'src/app/admin-pop/add-tag-to-product/add-tag-to-product.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  idCategory: number;
  products: Product[];
  category: Category = {} as Category;
  user: User = {} as User;
  panelOpenState: boolean;
  tags: Tag[];
  comments: Comment[];
  currentUser: any;
  toppings: FormGroup;

idBoutique:number;
  constructor( fb: FormBuilder,
    private productService: ProductService, private categoryService: CategoryService,
    private route: ActivatedRoute, private dialog: MatDialog, private token: TokenStorageService,
    private tagService: TagService, private commentService: CommentService, private boutiqueService : BoutiqueService,private router: Router) {
  this.loadData();
  this.toppings = fb.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false
  });
  }

    ngOnInit(): void {
    
    }
    loadData()
    {
      this.route.params.subscribe(
        params => {
          this.idCategory = this.route.snapshot.params.id;
          this.categoryService.findCategoryById(this.idCategory).subscribe(category => {
            this.category = category;
            this.productService.findProductsForCategory(this.idCategory).subscribe(products => {
              this.products = products;
            });
          })
        
          this.commentService.findAllComments().subscribe(comments => {
            this.comments = comments;
          })
        }
      )
    }
  

  // addTag(idProduct) {
  //   this.dialog.open(AddTagToProductComponent, {
  //     data: { idProduct }
  //   })
  // }
  showTags(idProduct) {
    this.tagService.findTagsForProduct(idProduct).subscribe(tags => {
      this.tags = tags;
    })
  }
  reset(){
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.id);
    this.boutiqueService.findBoutiqueToUser(this.currentUser.id).subscribe(
      data=>{
   
        this.router.navigate(['/cn',data.id]) 
      
        .then(() => {
          window.location.reload();
        });
      
      },
      err=>{
        console.log(err);
      }
    )
  }
  deleteCategory(idCategory) {
    if (confirm("Are you sure")) {
      this.categoryService.deleteCategory(idCategory).subscribe(() => {
       this.reset();
     
      })
    }
   
  }
  editCategory(idCategory) {
    
    const dialogConfig = new MatDialogConfig();
    this.dialog
      .open(AddCategoryComponent, {
        data: { idCategory},
       
       
      })
      .afterClosed()
      .subscribe((res) => {
        this.loadData();
      });

  }
  deleteProduct(idProduct) {
    if (confirm("Are you sure")) {
      this.tagService.findTagsForProduct(idProduct).subscribe(tags => {
        this.tags = tags;
        console.log(this.tags)
       
        for(var i=0; i<this.tags.length;i++)
        {
          this.deletetag(this.tags[i].id,idProduct)
        }
        this.productService.deleteProduct(idProduct).subscribe(() => {
          this.loadData();
         // this.loadData();
        })
      })
     
    }
  }
  editProduct(idProduct) {
    
    const dialogConfig = new MatDialogConfig();
    this.dialog
      .open(AddProductComponent, {
        data: { idProduct},
       
        width: '50%'
       
      })
      .afterClosed()
      .subscribe((res) => {
        this.loadData();
      });

  }
  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(() => {
      window.location.reload();
    })
  }
  deletetag(idtag,idpro){
  this.tagService.deleteTagFormProduct(idtag,idpro).subscribe(mes=>{},
    err=>{console.log(err);
    });
  this.loadData()
  }
  addTag(idProduct) {
    this.dialog.open(AddTagToProductComponent, {
      data: { idProduct }
    })
  }
}
