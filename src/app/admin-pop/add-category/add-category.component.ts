import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/modal/Modal';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  category: Category = {} as Category;
  progressBar = false;
  form: any = {};
name:string;
  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) { }

  ngOnInit(): void {
    if (this.data.idCategory != null) {
      this.categoryService.findCategoryById(this.data.idCategory).subscribe(category => {

        this.category = category;
        this.form.value=category ;
        console.log(this.form)
      })
    }
  }
  addCategory() {
  
    this.progressBar = true;
    if (this.data.idCategory != null) {
      this.category.name=this.form.Category;
      this.categoryService.editCategory(this.category, this.data.idCategory).subscribe(category => {
        this.category = category;
       
      });
      this.dialogRef.close();
    }
     else {
      
   
  this.category.name=this.form.Category;
      this.categoryService.addCategoryToBoutique(this.category, this.data.idBoutique).subscribe(category => {
        this.category = category;
       
      }
      );
      this.dialogRef.close();
    }}
    addCategoryInvalid()
    {
      
    }
  onNoClick(): void {
 this.dialogRef.close();
  }


}

