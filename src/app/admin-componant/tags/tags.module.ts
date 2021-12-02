import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TagService } from 'src/app/service/tag.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from 'src/app/admin-pop/confirm-dialog/confirm-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormModule } from 'src/app/forms/forms.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrioriteComponent } from '../priorite/priorite.component';
import {NgForm} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AddTagComponent } from 'src/app/admin-pop/add-tag/add-tag.component';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

const r: Routes = [
	{ path: ':idBoutique', component: TagsComponent},
  { path: 'rong/:idBoutique', component: PrioriteComponent},
	// { path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }},
	// { path: 'nvd3-charts', component: Nvd3ChartsComponent ,data: { animation: 'nvd3-charts' }},
];
@NgModule({
  declarations: [ 
TagsComponent,
ConfirmDialogComponent,
PrioriteComponent,
AddTagComponent
  ],
imports: [

  ReactiveFormsModule,
 MatTabsModule,

 ToastContainerModule,

MatToolbarModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
 
    RouterModule.forChild(r),
    MatExpansionModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    NgbNavModule,
    MatMenuModule,
    CommonModule,
    MatListModule,
  
    MatInputModule,
    MatIconModule,
    
    RouterModule,
    // PerfectScrollbarModule,
    NgScrollbarModule,
    FlexLayoutModule,

    
    MatSliderModule,
    MatProgressBarModule,
   
  ],
  providers: [
    
   
    
    TagService,
    
    // {
    //     provide: PERFECT_SCROLLBAR_CONFIG,
    //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // }
],

})
export class TagsModule { }
