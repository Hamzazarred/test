import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/modal/Modal';
import { TagService } from 'src/app/service/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {
  tag: Tag = {} as Tag;
  ngForm :FormGroup
  form: any = {};
name:string;
  constructor(public dialogRef: MatDialogRef<AddTagComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tagService: TagService) { }

  ngOnInit(): void {
    if (this.data.id != null) {
      this.tagService.findTagById(this.data.id).subscribe(tag => {

    
        this.form=tag ;
        console.log(this.form)
      })
    }
  }
  addTag() {

    if (this.data.id != null) {
     
      this.tagService.editTag(this.form, this.data.id).subscribe(tag => {
        this.tag = tag;
       
      });
      this.dialogRef.close();
    }
     else {
      
   
  
      this.tagService.addTagToBoutique(this.form, this.data.idboutique).subscribe(tag => {
        this.tag = tag;
       
      }
      );
      this.dialogRef.close();
     
    }}
    addTagInvalid()
    {
      
    }
  onNoClick(): void {
 this.dialogRef.close();
  }


}

