import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddCategoryComponent } from 'src/app/admin-pop/add-category/add-category.component';
import { Category, menu } from 'src/app/modal/Modal';

import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  idBoutique: number;
    @Input() iconOnly:boolean = false;
   // public menus = menus;
      m:Category[]=[];
   menus:any={}=[];
  
    constructor( private dialog: MatDialog,private route: ActivatedRoute, private categoryService:CategoryService) { 
    
        
       
        }

    ngOnInit() {
    
      this.route.params.subscribe(
        params => {
          this.idBoutique = this.route.snapshot.params.idBoutique;
          this.categoryService.findCategoriesForBoutique(this.idBoutique).subscribe(categorys => {
            this.m = categorys;
            this.m.map(obj=>{
            this.menus=this.m;
          
            });
          })
    })
    }

    addCategory(idBoutique: number) {
    
      const dialogRef = this.dialog.open(AddCategoryComponent, { width: '450px',
        data: { idBoutique }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }

}
