import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SidebarComponent } from '../core-ecommerce/sidebar/sidebar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AccComponent } from './acc/acc.component';



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
      AccComponent
  ],

  imports: [
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
  ],


  exports: [
      SidemenuComponent,
      SidemenuItemComponent,
      ToolbarNotificationComponent,
      ToolbarComponent,
      SearchBarComponent,
      FullscreenComponent,
      SidebarComponent,
      UserMenuComponent
  ],

  providers: [
      // {
      //     provide: PERFECT_SCROLLBAR_CONFIG,
      //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      // }
  ]
})
export class CoreEcommerceModule { }
