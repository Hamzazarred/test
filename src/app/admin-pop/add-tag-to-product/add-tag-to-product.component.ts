import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/modal/Modal';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { TagService } from 'src/app/service/tag.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-tag-to-product',
  templateUrl: './add-tag-to-product.component.html',
  styleUrls: ['./add-tag-to-product.component.scss']
})
export class AddTagToProductComponent implements OnInit {
  tags: Tag[];
  filterTags: Tag[];
  currentUser: any;
  idBoutique:number
  constructor(private boutiqueService : BoutiqueService,private token: TokenStorageService,public dialogRef: MatDialogRef<AddTagToProductComponent>,private tagService: TagService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)
    this.boutiqueService.findBoutiqueToUser(this.currentUser.id).subscribe(
      data=>{this.idBoutique=data.id
        this.tagService.findTagsForBoutique(data.id).subscribe(tags => {
          this.tags = tags;
          this.tagService.findTagsForProduct(this.data.idProduct).subscribe(filterTags => {
            this.filterTags = filterTags;
            this.filterTags.forEach(t => {
              this.tags = this.tags.filter(item => item.id !== t.id);
            })
          })
        })}
 
      );
  
  }

  selectedValue(event: any) {
    const idTag = event.value;
    this.tagService.addTagToProduct(this.data.idProduct, idTag).subscribe(() => {
      this.dialogRef.close();
    })
  }
}
