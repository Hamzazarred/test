import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagService } from 'src/app/service/tag.service';
import { CommentService } from 'src/app/service/comment.service';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryComponent } from './subcategory.component';

import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const r: Routes = [
	{ path: '', component: SubcategoryComponent},
	// { path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }},
	// { path: 'nvd3-charts', component: Nvd3ChartsComponent ,data: { animation: 'nvd3-charts' }},
];
@NgModule({
  declarations: [ 
    SubcategoryComponent,
 
  ],
imports: [
CommonModule,
HttpClientModule,
MatCardModule,
RouterModule,
RouterModule.forChild(r),
MatExpansionModule,
MatInputModule,
   MatIconModule,
   FormsModule,
       ReactiveFormsModule,
       MatSelectModule,
      MatButtonModule,

   MatExpansionModule
  ],
  providers: [
    TagService,
    CommentService,
    ProductService,
    UserService,
    CommentService,
    TokenStorageService,
    BoutiqueService,
    TagService,
    
   
    // {
    //     provide: PERFECT_SCROLLBAR_CONFIG,
    //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // }
]
})
export class SubcategoryModule { }
