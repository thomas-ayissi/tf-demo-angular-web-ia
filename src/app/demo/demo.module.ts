import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ],
  bootstrap : [DemoComponent]

})
export class DemoModule { }
