import { Component } from '@angular/core';
import { IFormateur } from 'src/app/models/IFormateur';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
   prenomParent : string = 'Robert';
   age : number = 0;

   envieEnfant : string = '...en attente d\'une réponse de l\'enfant...'

  //Démo + concrète
  formateurs : IFormateur[] = [{
    id : 1,
    nom : "Beurive",
    prenom : "Aude",
    dateNaiss : new Date(1989, 9, 16),
    avatar : '../../assets/images/aude.png'
  },
  {
    id : 2,
    nom : 'Ly',
    prenom : 'Khun',
    dateNaiss : new Date(1982, 4, 6),
    avatar : '../../assets/images/khun.png'
  },
  {
    id : 3,
    nom : 'Chaineux',
    prenom : 'Gavin',
    dateNaiss : new Date(1993, 9, 18),
    animal : 'Skye',
    avatar : '../../assets/images/gavin.png'
  },
  {
    id : 4,
    nom : 'Strimelle',
    prenom : 'Aurélien',
    dateNaiss : new Date(1989, 10, 1),
    animal : 'Lachatte',
    avatar : '../../assets/images/aurelien.png'
  }];

  formateurDuJour : string = 'inconnu';

   changeEnvie(besoinEnfant : string) {
    this.envieEnfant = besoinEnfant;
   }

   setName(name : string) {
    this.formateurDuJour = name;
   }
}
