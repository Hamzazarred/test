import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SliderService } from 'src/app/service/slider.service';
const r: Routes = [
	{ path: '', component: SliderComponent},
	// { path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }},
	// { path: 'nvd3-charts', component: Nvd3ChartsComponent ,data: { animation: 'nvd3-charts' }},
];


@NgModule({
  declarations: [ 
   SliderComponent,
 
  ],
imports: [
CommonModule,
RouterModule.forChild(r),
NgbModule,
FormsModule,
MatIconModule,
ReactiveFormsModule,
HttpClientModule,
MatButtonModule,
  ],
  providers: [
   SliderService


      //     provide: PERFECT_SCROLLBAR_CONFIG,
      //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      // }
  ],
})
export class SliderModule { }
