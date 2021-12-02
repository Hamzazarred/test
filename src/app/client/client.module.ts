import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

// import {
//     PerfectScrollbarModule, 
//     PERFECT_SCROLLBAR_CONFIG,
//     PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { appRoutesclient } from './lazyloaderclient.routes';
import { coreclientModule } from '../core-client/core-client.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../service/cart.service';
import { UserService } from '../service/user.service';
import { TagService } from '../service/tag.service';
import { OrderService } from '../service/order.service';

import { CommentService } from '../service/comment.service';
import { ProductService } from '../service/product.service';

import { PasswordComponent } from '../password/password.component';

import { UpdateProfileComponent } from '../update-profile/update-profile.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true
// };





@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(appRoutesclient),
        MatToolbarModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        coreclientModule,
        MatSidenavModule,
        // PerfectScrollbarModule,
        NgScrollbarModule,
        MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
        
    ],
    declarations: [ClientComponent,

     PasswordComponent,
     
     UpdateProfileComponent
],
    providers: [
    ProductService,
   CartService,
   CommentService,
   OrderService,
   TagService,
   UserService,
  

        //     provide: PERFECT_SCROLLBAR_CONFIG,
        //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        // }
    ],
    exports:[]
})
export class clientModule { }
