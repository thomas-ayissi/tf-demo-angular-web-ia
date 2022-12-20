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
import { Exo3Component } from './exo3/exo3.component';
import { PanierBisComponent } from './exo3/panier-bis/panier-bis.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component,
    Exo2Component,
    PanierComponent,
    Exo3Component,
    PanierBisComponent,
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
