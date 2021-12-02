import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatStepperModule} from '@angular/material/stepper';
import { RegisterBoutiqueComponent } from './register-boutique.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import { BoutiqueService } from '../service/boutique.service';
import { AuthService } from '../service/auth.service';
const appRouter :Routes =[{path:'', component: RegisterBoutiqueComponent }];
@NgModule({
  declarations: [RegisterBoutiqueComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    HttpClientModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRouter),
  ],
  exports: [
    RouterModule
],
providers: [
  BoutiqueService,
  AuthService
  ]
})
export class RegisterBoutiqueModule { }
