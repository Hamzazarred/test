import { collectExternalReferences } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TransitionCheckState } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Category, color, discription, Product, Taille} from 'src/app/modal/Modal';
import { CategoryService } from 'src/app/service/category.service';
import { ColorService } from 'src/app/service/color.service';
import { DiscriptionService } from 'src/app/service/discription.service';
import { ProductService } from 'src/app/service/product.service';
import { TailleService } from 'src/app/service/taille.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // category: Category = {} as Category;
  progressBar = false;
  userFile ;
  public imagePath;
  form: any = {};
name:string;
product: Product = {} as Product;
public addmore: FormGroup;
public addmore1: FormGroup;
colorList=[];
imgURL: any;
colorUpdate=[];
new=false;
sale=false;

color1 = 'red';


m:Category[]=[];
idCategory:number;
 constructor(private DiscService : DiscriptionService,private tailleservice : TailleService,private colorservice:ColorService
   , private _fb: FormBuilder ,private _fb1: FormBuilder ,private categoryService:CategoryService,private route: ActivatedRoute,
   public productService :ProductService ,public dialogRef: MatDialogRef<AddProductComponent>
  , @Inject(MAT_DIALOG_DATA) public data: any) { }
 ngOnInit() {
	this.addmore = this._fb.group({
    title:[''],
    message:[''],
   
   
    itemRows: this._fb.array([this.initItemRows()])

  });
  this.uploaddata();
  this.addmore1 = this._fb1.group({
    size:['']

   ,
   
    itemRows1: this._fb1.array([this.initItemRows1()])
  });
if (this.data.idBoutique!=null)
{
  this.categoryService.findCategoriesForBoutique(this.data.idBoutique).subscribe(category=>{
    this.m=category;

  }

  )
}
if (this.data.idProduct != null)//update
{
  this.productService.findProductById(this.data.idProduct).subscribe(product=>{
   
    this.product = product;
  }

  )
}
}

uploaddata() {
 
  if (this.data.idProduct != null) {//update product (id product update)
                this.productService.findProductById(this.data.idProduct).subscribe(product=>{
              this.form=product
                this.colorservice.findcolorsForProduct(product.id).subscribe(color=>
                {
                 this.colorList=color;
               
                });
                this.tailleservice.findTailleForProduct(product.id).subscribe((taille)=>
                  {     console.log(taille)
                    
                    this.deleteRow1(0);
                      taille.map(x=> {
                        this.upaddNewRow1(x.size);
                                     
                      });

                         
                     
                  });
                  this.DiscService.findDiscsForProduct(product.id).subscribe(disc=>
                    {     console.log(disc)
                      if(disc.length!=0){
                        this.deleteRow(0);
                      }
                      
                     disc.map(x=> {
                        this.upaddNewRow(x.title,x.message);
                                          
                      });
                    }); });
     
                 
  } 
}
check1()
{
 this.new=!this.new
 console.log(this.new)
 console.log(this.sale)
}
check2()
{
  this.sale=!this.sale
}
  addProduct() {
    this.progressBar = true;
    this.form.s=this.sale;
    this.form.n=this.new;
    this.product=this.form;
    console.log(this.product)
    if (this.data.idProduct != null) 
    {//update product (id product update)
                  this.productService.editProduct(this.product, this.data.idProduct).subscribe(product => {
                  this.product = product; });
                  this.colorservice.editcolorToProduct(this.colorList,this.product.id).subscribe(colors=>{
                    
                  })

                
               
                  this.tailleservice.editTailleToProduct(this.formArr1.value,this.product.id).subscribe(tailles =>{
                    console.log(tailles)
                  })
                  this.DiscService.editDiscToProduct(this.formArr.value,this.product.id).subscribe(disc=>{
                  console.log(disc)
                  })              
        
     
   this.dialogRef.close();
    } 
    else { 
           if(this.data.idBoutique!=null)   // Boutton add sous category(id boutique scategorys ya9raha mel path ou update)
            {          for(var i=0; i<this.m.length;i++)
                         {
                       for(var j=0; j<this.m[i].scategorys.length;j++)
                               {
        
                                    if(this.m[i].scategorys[j].id==this.data.idSCategory)
                                       this.idCategory=this.m[i].id; // exist or not searsh position in the table 
                                }
                          }
                      
                      this.form.s=this.sale;
                      this.form.n=this.new;
                      this.product=this.form
                      console.log(this.product)
                      console.log(this.form)
                     this.productService.addProductToCategory(this.product, this.idCategory).subscribe(product => {
      
                       //service fi west service ou product nab3ath fih 
                    this.productService.addProductToSCategory(product, this.data.idSCategory).subscribe(product => {// ba3d ma tesna3 lel 2eme service bach ma n3awedech 
                    // product deux fois 
                     this.product = product;
                     this.colorservice.addcolorToProduct(this.colorList, product.id).subscribe(color => {
                       console.log(color);
                      });
                      this.DiscService.addsDiscToProduct(this.formArr.value,this.product.id).subscribe(disc=>{
                        console.log(disc);
            }
              );      
this.tailleservice.addTailleToProduct(this.formArr1.value,this.product.id).subscribe(taille=>{
 
})
           
     
         
          });
  
        });   
        window.location.reload();
     }
     else{// else ma3naha bach izid product lel category haka 
      this.form.s=this.sale;
      this.form.n=this.new;
console.log(this.form)
console.log(this.product)
         this.product=this.form
      this.productService.addProductToCategory(this.product, this.data.idCategory).subscribe(product => {
        this.product = product;
      
       
      });}
    //  window.location.reload();
    
  }}
 
  
   
     
    
    //  if( this.m[i].SCategorys[j].id ==this.data.idscategory){
    //     this.idCategory=this.m[i].id
    //     console.log(this.m[i])}
    //   }

    
  onNoClick(): void {
 this.dialogRef.close();
  }

  onclick(color1){

this.colorList.push({ code : color1});




  }

  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }
  get formArr1() {
    return this.addmore1.get('itemRows1') as FormArray;
  }
  initItemRows() {
    return this._fb.group({
    title:[''],
   message:[''],

    });
  }
  initItemRows1() {
    return this._fb1.group({
    size:['']


    });
  }
  upaddNewRow1(value:String) {
    this.formArr1.push(this.upinitItemRows1(value));
    console.log(this.formArr1.value)
   
  }
  upinitItemRows1(value:String) {
    return this._fb1.group({
    size:[value]


    });
  }
  upaddNewRow(title :string,disc) {
    this.formArr.push(this.upinitItemRows(title,disc));
    console.log(this.formArr.value)
   
  }  

  upinitItemRows(titre : string,disc:string) {
    return this._fb.group({
    title:[titre],
   message:[disc],

    });
  }
  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {


      return;
    }

    var reader = new FileReader();

    this.imagePath = file;
    reader.readAsDataURL(file);
    this.form.pictureUrl="/assets/"+ this.imagePath.name;
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imagePath.name)
      console.log(this.imgURL)
    }
  }


    }
  //*********** */
  addNewRow1() {
    this.formArr1.push(this.initItemRows1());
    console.log(this.formArr1.value)
   
  }

  deleteRow1(index: number) {
    this.formArr1.removeAt(index);
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
    console.log(this.formArr.value)
   
  }  

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  deletecolor( index:number)
  {  
    this.colorList.splice(index,1)//******etoile**** */
     
  }



}

