import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private _users : IUser[] = [
    { id : 1, pseudo : 'audeb', password : '123aude', firstname : 'Aude', lastname : 'Beurive'},
    { id : 2, pseudo : 'khunl', password : '123khun', firstname : 'Khun', lastname : 'Ly'}
  ];

  constructor() { }

  connection(pseudo : string, pwd : string) : IUser | undefined {
    //Est-ce que j'ai un user dont le pseudo correspond à celui que j'reçois ?
    let userFound = this._users.find(u => u.pseudo === pseudo);
    //Si oui
    if(userFound){
      //Est-ce que le mdp correspond à celui de l'utilisateur trouvé ?
      if(userFound.password === pwd) {
        //Si mdp égaux, on renvoie l'utilisateur trouvé
        return userFound;
      }
    }
    return undefined;
  }

  disconnection() : undefined {
    //En vrai, il faudra, quand on aura vu une vraie Auth, dégager le tokede la session etc
    return undefined;
  }

}
