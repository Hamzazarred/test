import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddProductComponent } from 'src/app/admin-pop/add-product/add-product.component';
import { AddSabcategoryComponent } from 'src/app/admin-pop/add-sabcategory/add-sabcategory.component';
@Component({
    selector: 'cdk-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {
    idBoutique:number;
    @Input() menu;
    @Input() iconOnly: boolean;
    @Input() secondaryMenu = false;

id:number;
  
    constructor( private dialog: MatDialog,private route: ActivatedRoute) { 
    
        
         }
         ngOnInit() {
          this.idBoutique = this.route.snapshot.params.idBoutique;
          console.log(this.idBoutique)
       }


    openLink() {
        this.menu.open = this.menu.open;
    }

    chechForChildMenu() {
        return (this.menu && this.menu.scategorys) ? true : false;
    }

    
     addProductcategorie(idCategory:any){//cv
      
      const dialogRef = this.dialog.open(AddProductComponent, { width: '800px',
        data: { idCategory}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(idCategory);
       
      });

    }
    addProductscategorie(idSCategory:any){
      var idBoutique = this.route.snapshot.params.idBoutique;
       
         const dialogRef = this.dialog.open(AddProductComponent, { width: '800px',
          data: { idSCategory,idBoutique }
        });
        dialogRef.afterClosed().subscribe(result => {
        
  
        });
      
   
     

    }

    addsCategory( idCategory :any){//cv
      const dialogRef = this.dialog.open(AddSabcategoryComponent, {
        data: { idCategory }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log( idCategory );
        
      });
    }
    add(menu:any){
      console.log(menu)
    }

}
