import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptionComponent } from './conception.component';
import { RouterModule, Routes } from '@angular/router';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
const r: Routes = [
	{ path: '', component: ConceptionComponent},
	// { path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }},
	// { path: 'nvd3-charts', component: Nvd3ChartsComponent ,data: { animation: 'nvd3-charts' }},
];
@NgModule({
  declarations: [ 
    ConceptionComponent,
 
  ],
imports: [
CommonModule,
RouterModule.forChild(r),
MatCheckboxModule,
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
export class ConceptionModule { }
