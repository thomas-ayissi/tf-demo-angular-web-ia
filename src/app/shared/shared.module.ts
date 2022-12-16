import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';


@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
