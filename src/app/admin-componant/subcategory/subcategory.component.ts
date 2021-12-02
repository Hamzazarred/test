import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, SCategory, User, Tag, Comment } from './../../modal/Modal';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { CommentService } from 'src/app/service/comment.service';
import { ProductService } from 'src/app/service/product.service';
import { ScategoryService } from 'src/app/service/scategory.service';
import { TagService } from 'src/app/service/tag.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { AddProductComponent } from 'src/app/admin-pop/add-product/add-product.component';
import { AddSabcategoryComponent } from 'src/app/admin-pop/add-sabcategory/add-sabcategory.component';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  idsCategory: number;
  products: Product[];
  Subcategory: SCategory = {} as SCategory;

  panelOpenState: boolean;
  tags: Tag[];
  comments: Comment[];
  currentUser: any;
idBoutique:number;
  constructor(private productService: ProductService, private scategoryService:ScategoryService ,
    private route: ActivatedRoute, private dialog: MatDialog, private token: TokenStorageService,
    private tagService: TagService, private commentService: CommentService, private boutiqueService : BoutiqueService,private router: Router) {
   this.loadData();
  }
  loadData(){
    this.route.params.subscribe(
      params => {
        this.idsCategory = this.route.snapshot.params.id;
        this.scategoryService.findscategorysById(this.idsCategory).subscribe(category => {
          this. Subcategory = category;
          this.productService.findProductsForSCategory(this.idsCategory).subscribe(products => {
            this.products = products;
          });
        })
      
      //  this.commentService.findAllComments().subscribe(comments => {
    //      this.comments =comments;
  //      })
      }
    )
  }

    ngOnInit(): void {
    
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
      
       
      },
      err=>{
        console.log(err);
      }
    )
  }
  deleteCategory(idsCategory) {
    if (confirm("Are you sure")) {
      this.scategoryService.deletescategorys(idsCategory).subscribe(() => {
       this.reset();
      })
    }
  }
  editCategory(idsCategory){
    
    const dialogConfig = new MatDialogConfig();
    this.dialog
      .open(AddSabcategoryComponent, {
        width: '800px',
        data: {idsCategory},
       
       
      })
      .afterClosed()
      .subscribe((res) => {
        this.loadData();
      });

  }
  deleteProduct(idProduct) {
    if (confirm("Are you sure")) {
      this.productService.deleteProduct(idProduct).subscribe(() => {
        this.loadData();
      })
    }
  }
  editProduct(idProduct) {
    
    const dialogConfig = new MatDialogConfig();
    this.dialog
      .open(AddProductComponent, {
        data: { idProduct},
       
      })
      .afterClosed()
      .subscribe((res) => {
        this.loadData();
      });

  }
  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(() => {
      this.loadData();
    })
  }
}
