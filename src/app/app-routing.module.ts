import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  // { path : 'home', redirectTo : ''},
  { path : 'demo', component : DemoComponent, loadChildren : () => import("./demo/demo.module").then(m => m.DemoModule)} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
