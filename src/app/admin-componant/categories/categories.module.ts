import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { TagService } from 'src/app/service/tag.service';
import { CommentService } from 'src/app/service/comment.service';
import { ProductService } from 'src/app/service/product.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { AddTagToProductComponent } from 'src/app/admin-pop/add-tag-to-product/add-tag-to-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
const chartRoutes: Routes = [
	{ path: '', component: CategoriesComponent},
	// { path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }},
	// { path: 'nvd3-charts', component: Nvd3ChartsComponent ,data: { animation: 'nvd3-charts' }},
];
@NgModule({
  declarations: [   CategoriesComponent,
    AddTagToProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild(chartRoutes),
    MatExpansionModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [TagService,
    CommentService,
    ProductService,
    UserService,
    CommentService,
    TokenStorageService,
    BoutiqueService,

 
    // {
    //     provide: PERFECT_SCROLLBAR_CONFIG,
    //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // }
]
})
export class CategoriesModule { }
