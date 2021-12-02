import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AddTagComponent } from './admin-pop/add-tag/add-tag.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PrioriteComponent } from './admin-componant/priorite/priorite.component';
import { ToastrModule } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';


//import { CartComponent } from './boutique-componant/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    LazyLoadModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    NgbModule,
    MatProgressBarModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],

})
export class AppModule { }
