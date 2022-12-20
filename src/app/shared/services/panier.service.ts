import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  listArticles : IProduct[] = []

  constructor() { }

  getList() : IProduct[] {
    return this.listArticles;
  }

  add(nameArticle : string, nombre : number) : void {
    //chercher si présent
    let productFound = this.listArticles.find(p => p.name.toLowerCase() === nameArticle.trim().toLowerCase())
    if(!productFound){
      this.listArticles.push({ name : nameArticle.trim(), qtt : nombre})
    }
    else{
      productFound.qtt += nombre;
    }
  }

  delete(id : number) : void {
    this.listArticles.splice(id, 1);
  }

  moins(id : number) : void {
    this.listArticles[id].qtt --;
    if(this.listArticles[id].qtt === 0){
      this.delete(id);
    }
  }

  plus(id : number) : void {
    this.listArticles[id].qtt ++;
  }

}
