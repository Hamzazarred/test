import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import {TooltipModule } from 'ngx-bootstrap/Tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';

const ngxComponents = [

  AccordionModule.forRoot(),
  CarouselModule.forRoot(),
  ModalModule.forRoot(),
  PopoverModule.forRoot(),
  AccordionModule.forRoot(),
  PaginationModule.forRoot(),
  TooltipModule.forRoot(),
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngxComponents
  ],
  exports :[
    ngxComponents,
  ]
})
export class NgxModule { }
