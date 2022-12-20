import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';
import { ToFahrenheitPipe } from '../shared/pipes/to-fahrenheit.pipe';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './exo2/exo2.component';
import { FormsModule } from '@angular/forms';
import { PanierComponent } from './exo2/panier/panier.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component,
    Exo2Component,
    PanierComponent,
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule
  ],
  bootstrap : [ExerciceComponent]
})
export class ExerciceModule { }
