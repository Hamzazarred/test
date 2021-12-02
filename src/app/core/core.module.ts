import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
// import {
//     PerfectScrollbarModule, 
//     PERFECT_SCROLLBAR_CONFIG,
//     PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { CategoryService } from '../service/category.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { ProductService } from '../service/product.service';
import { ScategoryService } from '../service/scategory.service';
import { TokenStorageService } from '../service/token-storage.service';
import { BoutiqueService } from '../service/boutique.service';
import { AcceuilComponent } from './acceuil/acceuil.component';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true
// };

@NgModule({

    declarations: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarNotificationComponent,
        ToolbarComponent,
        SearchBarComponent,
        FullscreenComponent,
        SidebarComponent,
        UserMenuComponent,
        AcceuilComponent
    ],

    imports: [
     
        MatMenuModule,
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatChipsModule,
        RouterModule,
        // PerfectScrollbarModule,
        NgScrollbarModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatTabsModule,
        MatSliderModule,
        MatProgressBarModule,
        MatDialogModule,
    ],


    exports: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarNotificationComponent,
        ToolbarComponent,
        SearchBarComponent,
        FullscreenComponent,
        SidebarComponent,
        UserMenuComponent,
        HttpClientModule
    ],

    providers: [CategoryService,
        ProductService,
        ScategoryService,
        TokenStorageService,
        BoutiqueService
        // {
        //     provide: PERFECT_SCROLLBAR_CONFIG,
        //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        // }
    ]
})
export class CoreModule { }
