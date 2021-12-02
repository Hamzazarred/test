import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadreComponent } from './cadre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



const r: Routes = [
	{ path: '', component: CadreComponent},
	// { path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }},
	// { path: 'nvd3-charts', component: Nvd3ChartsComponent ,data: { animation: 'nvd3-charts' }},
];
@NgModule({
  declarations: [ 
    CadreComponent,
 
  ],
imports: [
CommonModule,
RouterModule.forChild(r),
HttpClientModule,
HttpClientModule,
FormsModule,
 MatInputModule,
    MatIconModule,
    FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatButtonModule,
RouterModule.forChild(r),

MatRadioModule,
FormsModule
  ],
  providers: [   

  
    // {
    //     provide: PERFECT_SCROLLBAR_CONFIG,
    //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // }
]
})
export class CadreModule { }
