import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {

  // Property binding
  prenom : string = "Aude"
  prenom2 : string = ""

  //Event binding
  jour : string = ""

  //Attribute binding
  id : string = "ma-div"
  isActive : boolean = true

  //Méthodes
  changerJour(j : string) : void {
    this.jour = j;
  }

  toggleActive() : void {
    this.isActive = !this.isActive;
  }

}
