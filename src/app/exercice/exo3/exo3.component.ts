import { Component } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component {
  nameProduct : string = '';
  nombre : number = 1;

  constructor(private _panierService : PanierService){

  }

  add() : void {
    if(this.nameProduct.trim() !== '') {
      this._panierService.add(this.nameProduct, this.nombre)
      this.nameProduct = '';
      this.nombre = 1;
    }
  }
}
