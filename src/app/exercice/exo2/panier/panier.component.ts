import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  @Input() listProducts : IProduct[] = [];

  @Output() sendDelete : EventEmitter<number>;
  @Output() sendQtUp : EventEmitter<number>;
  @Output() sendQtDown : EventEmitter<number>;

  constructor(){
    this.sendDelete = new EventEmitter<number>();
    this.sendQtUp = new EventEmitter<number>();
    this.sendQtDown = new EventEmitter<number>();
  }

  onDelete(indice : number) : void {
    this.sendDelete.emit(indice)
  }

  onUp(indice : number) : void {
    this.sendQtUp.emit(indice);
  }

  onDown(indice : number) : void {
    this.sendQtDown.emit(indice);
  }

}
