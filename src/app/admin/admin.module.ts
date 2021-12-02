import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
// import {
//     PerfectScrollbarModule, 
//     PERFECT_SCROLLBAR_CONFIG,
//     PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { appRoutes } from './lazyloader.routes';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true
// };


import { CoreModule } from '../core/core.module';
import { CategoryService } from '../service/category.service';
import { AddCategoryComponent } from '../admin-pop/add-category/add-category.component';
import { AddProductComponent } from '../admin-pop/add-product/add-product.component';
import { AddTagComponent } from '../admin-pop/add-tag/add-tag.component';
import { AddSabcategoryComponent } from '../admin-pop/add-sabcategory/add-sabcategory.component';

import { FormModule } from '../forms/forms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorService } from '../service/color.service';
import { TailleService } from '../service/taille.service';
import { DiscriptionService } from '../service/discription.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { TagService } from '../service/tag.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
        FormModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        ScrollingModule,
        ColorPickerModule,
        MatExpansionModule,
MatChipsModule,
        
MatCheckboxModule,
        
 MatDialogModule,
 MatButtonToggleModule,
 
       
 
        
            MatSelectModule,
         
            
        // PerfectScrollbarModule,
        NgScrollbarModule
    ],
    declarations: [AdminComponent,
        AddCategoryComponent,
        AddProductComponent,
        
        AddSabcategoryComponent,

    ],
    providers: [CategoryService,
        ColorService,
        TailleService,
        DiscriptionService,
        TagService
       
    ]
})
export class AdminModule { }
