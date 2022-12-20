import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component {

  shoppingList: IProduct[] = []

  item: string = '';

  ajouter() : void {
    //Si pas vide et pas full espaces
    if (this.item.trim() !== '') {
      //On regarde si le produit existe déjà dans la liste
      let existingProduct = this.shoppingList.find(p => p.name.toLowerCase() === this.item.toLowerCase().trim());
      //Si pas
      if(!existingProduct ) {
        //ajout dans la liste
        this.shoppingList.push({
          name: this.item.trim(),
          qtt: 1
        });
      //sinon, on augmente de 1 la quantité du produit
      } else {
        existingProduct.qtt++;
      }
      this.item = '';

      
    }
  }

  delete(indice : number) : void {
    this.shoppingList.splice(indice, 1);

  }

  up(indice : number) : void {
    this.shoppingList[indice].qtt ++;

  }

  down(indice : number) : void {
    this.shoppingList[indice].qtt --;
    //Si la quantité arrive à 0, on delete de product
    if(this.shoppingList[indice].qtt === 0){
      this.delete(indice);
    }

  }
}
