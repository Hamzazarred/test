
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { QueryBuilder } from 'odata-query-builder';
import { AddTagComponent } from 'src/app/admin-pop/add-tag/add-tag.component';
import { ConfirmDialogComponent } from 'src/app/admin-pop/confirm-dialog/confirm-dialog.component';
import { Tag } from 'src/app/modal/Modal';
import { TagService } from 'src/app/service/tag.service';




@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})

export class TagsComponent  implements OnInit {
  Entity: Array<Tag> = [];
  Entityrong: Array<any> = [];
  search: FormControl = new FormControl();
  usercount: number;
  idboutique:number;
  displayedColumns: any[] = [
    'priorite',
    'name',
 
    'actions',
  ];


  dataSource: MatTableDataSource<Tag>;
  constructor(     private route: ActivatedRoute,private httpservice:TagService,
    private dialog: MatDialog,
    private router: Router,private _snackBar: MatSnackBar
    ) {    this.route.params.subscribe(
      params => {
      
        this.idboutique = params.idBoutique});}

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit(): void {
      this.search.valueChanges.subscribe((value) => {
        this.loadUserNames();
        this.paginator.pageIndex = 0;
      });
    }


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.loadUserNames();
  }
/**
   *   loadUserNames()
   */
 loadUserNames(): void {
  let query = new QueryBuilder();
  query.expand(
    'role'
  );

    query.top(this.paginator.pageSize);
    query.skip(this.paginator.pageIndex * this.paginator.pageSize);
    query.count();



  if (this.search.value) {
    query.filter((f) =>
    f.filterPhrase(`contains(name, '${this.search.value}')`)
    );
  }

  this.httpservice.findTagsForBoutique(this.idboutique).subscribe((response) => {
    this.Entity = response;

    this.dataSource = new MatTableDataSource(this.Entity);
    this.usercount = response['@odata.count'];

  });
}

  onCreate() {
    let idboutique = this.idboutique
    const dialogConfig = new MatDialogConfig();
    this.dialog
      .open(AddTagComponent, {
        data: { idboutique },
       
        width: '25%',
        height: '100%',
        autoFocus: true,
        disableClose: false,
      })
      .afterClosed()
      .subscribe((res) => {
        this.loadUserNames();
      });
  }
  /**
   * Update()
   *  ouverture de POP UP de modification
   */
  gotoUpdate(id: number) {
    const dialogConfig = new MatDialogConfig();
    this.dialog
      .open(AddTagComponent, {
        data: { id },
       
        width: '25%',
        height: '100%',
        autoFocus: true,
        disableClose: false,
      })
      .afterClosed()
      .subscribe((res) => {
        this.loadUserNames();
      });
  }

  /**
   * Supp()
   *  ouverture de POP UP de Suppression
   */
  supp(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '39%';
    dialogConfig.height = '30%';
    this.dialog
      .open(ConfirmDialogComponent, {
        panelClass: 'confirm-dialog-container',
        disableClose: true,
        position: { top: '30px' },
        data: {
          message: 'vous etes sur de supprimer cette entité juridique??',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.httpservice.deleteTag(id).subscribe((res) => {
           
          
            this.httpservice.findTagsForBoutique(this.idboutique).subscribe((response) => {
              this.Entity = response;
            
         this.Entity.sort(function (a, b) {
            return a.priorite - b.priorite;
          });
          
          this.httpservice.RongTagToBoutique(this.Entity).subscribe(res=>{
            console.log(res)
            this.loadUserNames();
          })
            });
                        this._snackBar.open(
              'Entité juridique supprimée avec succés!!',
              'Fermer',
              {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 2000,
              }
            );
        
            
          });
        
        /*  this.Entityrong.sort(function (a, b) {
            return a.priorite - b.priorite;
          });*/
          
         /* this.httpservice.RongTagToBoutique(this.Entity).subscribe(res=>{
            console.log(res)
            this.loadUserNames();
          })*/
     
        }
      });
    
    
  }
}