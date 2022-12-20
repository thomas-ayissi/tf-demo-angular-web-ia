import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-panier-bis',
  templateUrl: './panier-bis.component.html',
  styleUrls: ['./panier-bis.component.scss']
})
export class PanierBisComponent {
  listProduit : IProduct[];

  constructor(private _panierService : PanierService) {
    this.listProduit = this._panierService.getList();
  }

  up(id : number) : void {
    this._panierService.plus(id);
  }

  down(id : number) : void {
    this._panierService.moins(id);
  }

  delete(id : number) : void {
    this._panierService.delete(id);
  }
}
