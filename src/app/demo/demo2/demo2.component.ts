import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {

    maChaine : string = 'Je suis une chaine';
    monNombre : number = 14.14574857965;
    maDate : Date = new Date();
    maTemperature : number = -17.8;
    maTemperatureF : number = 42;
}
