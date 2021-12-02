import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SCategory } from 'src/app/modal/Modal';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { ScategoryService } from 'src/app/service/scategory.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-sabcategory',
  templateUrl: './add-sabcategory.component.html',
  styleUrls: ['./add-sabcategory.component.scss']
})
export class AddSabcategoryComponent implements OnInit {
  sCategory: SCategory = {} as SCategory;
  progressBar = false;
  form: any = {};
name:string;
currentUser: any;
  constructor( private token: TokenStorageService, public dialogRef: MatDialogRef<AddSabcategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private scategoryService: ScategoryService, private boutiqueService: BoutiqueService) { }

  ngOnInit(): void {
    if (this.data.idsCategory != null) {
      this.scategoryService.findscategorysById(this.data.idsCategory).subscribe(sCategory => {
        this.sCategory = sCategory;
        
      })
    }
  }
  addCategory() {
   
    this.progressBar = true;
    if (this.data.idsCategory != null) {
      this.sCategory=this.form;
      this.scategoryService.editscategorys(this.sCategory, this.data.idsCategory).subscribe(category => {
        this.sCategory= category;
        
      })
      this.dialogRef.close();
    }
     else {

      this.sCategory=this.form;
      console.log(this.sCategory)
  
      this.scategoryService.addscategorysToCategory(this.form, this.data.idCategory ).subscribe(scategory => {
        this.sCategory = scategory;
      
      }
      );
      window.location.reload();

    }}
    reset(){
      this.currentUser = this.token.getUser();
   var id =this.currentUser.id
      this.boutiqueService.findBoutiqueToUser(this.currentUser.id).subscribe(
        data=>{
          window.location.replace(`/cn/${id}`)
        },
        err=>{
          console.log(err);
        }
      )
    }
    addCategoryInvalid()
    {
      
    }
  onNoClick(): void {
 this.dialogRef.close();
  }


}

