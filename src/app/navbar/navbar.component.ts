import { Component } from '@angular/core';
import { ILink } from '../models/ILink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],  
})
export class NavbarComponent {
  links : ILink[] = [
    { title : 'Accueil', url : '/'},
    { title : 'Demo', url : '/demo', children : [
      { title : 'Demo 1 - Les Bindings', url : '/demo/demo1'},
      { title : 'Demo 2 - Les Pipes', url : '/demo/demo2'},
      { title : 'Demo 3 - Les Directives', url : '/demo/demo3'},
      { title : 'Demo 4 - Input & Output', url : '/demo/demo4'},
      { title : 'Demo 5 - Services', url : '/demo/demo5'},
      { title : 'Demo 6 - Les Formulaires', url : '/demo/demo6'},
      { title : 'Demo 7 - Routing -> Fake Crud complet', url : '/demo/demo7'}
    ], isVisible : false },
    { title : 'Exercice', url : '/exercice', children : [
      { title : 'Exercice 1 - Le timer', url : '/exercice/exo1'},
      { title : 'Exercice 2 - La Shopping List Eco+', url : '/exercice/exo2'},
      { title : 'Exercice 3 - La Shopping List', url : '/exercice/exo3'},
      { title : 'Exercice 4 - Formulaire d\'inscription', url : '/exercice/exo4'}
    ], isVisible : false}
  ]


  toggleLink(i : number) : void {
    for(let j : number = 0; j < this.links.length; j++ ) {
      if(j != i) {
        this.links[j].isVisible = false;
      }
    }
    this.links[i].isVisible = !this.links[i].isVisible;

    //autre façon
    // let temp : boolean | undefined = this.links[i].isVisible;
    // this.links.forEach((link : ILink) => link.isVisible = false)
    // this.links[i].isVisible = !temp;

  }
}
