import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router'; 
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';

const appRoutes: Routes = [
    { path: '', component: RegisterComponent },
]

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    HttpClientModule
  ],
  declarations: [RegisterComponent],
  exports: [
      RouterModule
  ],
  providers: [
    AuthService,
    TokenStorageService 
  ]
})
export class RegisterModule { }
