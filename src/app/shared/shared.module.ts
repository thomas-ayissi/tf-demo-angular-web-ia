import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FormateurCardComponent } from './components/formateur-card/formateur-card.component';


@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    FormateurCardComponent
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    FormateurCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
