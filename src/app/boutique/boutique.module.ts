import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutiqueComponent } from './boutique.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreEcommerceModule } from '../core-ecommerce/core-ecommerce.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { PasswordComponent } from '../password/password.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { CommentService } from '../service/comment.service';
import { TagService } from '../service/tag.service';
import { OrderService } from '../service/order.service';
import { UserService } from '../service/user.service';
import { CategoryService } from '../service/category.service';
import { HomeComponent } from '../Boutique-componant/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { SingleProductComponent } from '../Boutique-componant/single-product/single-product.component';
import { ShopComponent } from '../Boutique-componant/shop/shop.component';
import { CategoryShopComponent } from '../Boutique-componant/category-shop/category-shop.component';
import { SubcategoryShopComponent } from '../Boutique-componant/subcategory-shop/subcategory-shop.component';
import { AllCategoryComponent } from '../Boutique-componant/all-category/all-category.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { OverlayModule } from '@angular/cdk/overlay';
import { ClipboardModule } from 'ngx-clipboard';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { PortalModule } from '@angular/cdk/portal';

import { TailleService } from '../service/taille.service';
import { ColorService } from '../service/color.service';
import { DiscriptionService } from '../service/discription.service';
import { ShoppingCartCComponent } from '../Boutique-componant/category-shop/shopping-cart-c/shopping-cart-c.component';
import { ProductsCComponent } from '../Boutique-componant/category-shop/products-c/products-c.component';
import { ShoppingCartSComponent } from '../Boutique-componant/subcategory-shop/shopping-cart-s/shopping-cart-s.component';
import { ProductsSComponent } from '../Boutique-componant/subcategory-shop/products-s/products-s.component';
import { ProductsComponent } from '../Boutique-componant/all-category/products/products.component';
import { ShoppingCartComponent } from '../Boutique-componant/all-category/shopping-cart/shopping-cart.component';
import { ScategoryService } from '../service/scategory.service';
import { PannierComponent } from '../boutique-componant/pannier/pannier.component';
import { CartHomeComponent } from '../Boutique-componant/cart-home/cart-home.component';

import { LoginClientComponent } from '../admin-pop/login-client/login-client.component';
import { AuthService } from '../service/auth.service';
import { BoutiqueService } from '../service/boutique.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterClientComponent } from '../register-client/register-client.component';
import { SliderService } from '../service/slider.service';

const appRoutes: Routes = [{
  path: '', component: BoutiqueComponent, children: [
     
          { path: 'home/:idBoutique', component: HomeComponent},
          { path: 'product/:idProduct', component: SingleProductComponent},
          { path: ':idBoutique', component: ShopComponent,children:[
            { path: '', component:AllCategoryComponent},
              { path: 'category/:idCategory', component:CategoryShopComponent},
              { path: 'scategory/:Scategory', component: SubcategoryShopComponent},
          ]
        
        
        
        },
          
         ]
        }];

@NgModule({
  imports: [
    RouterModule,
    WavesModule,
      HttpClientModule,
      CommonModule,
      RouterModule.forChild(appRoutes),
      MatToolbarModule,
    
      MatButtonModule,
      MatIconModule,
      MatTabsModule,
     CoreEcommerceModule,
   
      MatSidenavModule,
      // PerfectScrollbarModule,
      NgScrollbarModule,
      MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
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
  CarouselModule,
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
  NgbModule,
  IvyCarouselModule,
  MatCarouselModule.forRoot(),
  MDBBootstrapModule.forRoot(),
  ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
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
    OverlayModule,
    PortalModule,
 FormsModule,


 FlexLayoutModule,

  ],
  declarations: [
BoutiqueComponent,
HomeComponent,
ShopComponent,
SingleProductComponent,
CategoryShopComponent,
SubcategoryShopComponent,
AllCategoryComponent,
ProductsCComponent,
ProductsComponent,
ShoppingCartCComponent,
ShoppingCartComponent,
ProductsSComponent,
ShoppingCartSComponent,
PannierComponent,
CartHomeComponent,
RegisterClientComponent,
LoginClientComponent,
],
  providers: [
    AuthService,
    BoutiqueService,
SliderService,
  ProductService,
 CartService,
 CommentService,
 OrderService,
 TagService,
 UserService,
 CartService,
CategoryService,
TailleService,
ColorService,
DiscriptionService,
ScategoryService,


      //     provide: PERFECT_SCROLLBAR_CONFIG,
      //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      // }
  ],
  exports:[]
})
export class BoutiqueModule { }
