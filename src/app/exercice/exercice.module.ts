import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';
import { ToFahrenheitPipe } from '../shared/pipes/to-fahrenheit.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component,
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  bootstrap : [ExerciceComponent]
})
export class ExerciceModule { }
