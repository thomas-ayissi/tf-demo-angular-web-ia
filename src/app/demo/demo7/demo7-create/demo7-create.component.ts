import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormateur } from 'src/app/models/IFormateur';
import { FormateurService } from 'src/app/shared/services/formateur.service';

@Component({
  selector: 'app-demo7-create',
  templateUrl: './demo7-create.component.html',
  styleUrls: ['./demo7-create.component.scss']
})
export class Demo7CreateComponent {

  ajoutForm : FormGroup;

  constructor(private _fb : FormBuilder,
              private _fs : FormateurService,
              private _router : Router) {
    this.ajoutForm = this._fb.group({
      nom : [null, [Validators.required]],
      prenom : [null, [Validators.required]],
      dateNaiss : [null, [Validators.required]],
      animal : [null, []]
    })
  }

  add() : void {
    if(this.ajoutForm.valid){
      let formateurAAjouter : IFormateur = {
        id : 0,
        nom : this.ajoutForm.value.nom,
        prenom : this.ajoutForm.value.prenom,
        dateNaiss : new Date(this.ajoutForm.value.dateNaiss),
        avatar : '../../assets/images/aude.png',
        animal : this.ajoutForm.value.animal
      }
      this._fs.create(formateurAAjouter);
      this._router.navigateByUrl('/demo/demo7');
    }
    else {
      console.log('NON');
      
    }
  }
}
