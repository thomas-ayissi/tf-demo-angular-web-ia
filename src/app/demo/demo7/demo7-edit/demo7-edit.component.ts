import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFormateur } from 'src/app/models/IFormateur';
import { FormateurService } from 'src/app/shared/services/formateur.service';

@Component({
  selector: 'app-demo7-edit',
  templateUrl: './demo7-edit.component.html',
  styleUrls: ['./demo7-edit.component.scss']
})
export class Demo7EditComponent implements OnInit{
  editForm : FormGroup;
  idForm : number;

  constructor(private _fb : FormBuilder,
              private _fs : FormateurService,
              private _router : Router,
              private _activeRoute : ActivatedRoute) {

    this.editForm = this._fb.group({
      nom : [null, [Validators.required]],
      prenom : [null, [Validators.required]],
      dateNaiss : [null, [Validators.required]],
      animal : [null, []]
    });

    this.idForm = parseInt(this._activeRoute.snapshot.params['id']);    
  }

  ngOnInit(): void {
      let formateur : IFormateur | undefined = this._fs.getById(this.idForm);
      console.log(formateur);
      
      //Si pas unefined, on peut le mettre dans le formulaire
      if(formateur) {
        this.editForm.patchValue({
          nom : formateur.nom,
          prenom : formateur.prenom,
          dateNaiss : `${formateur.dateNaiss.getFullYear()}-${formateur.dateNaiss.getMonth()+1}-${formateur.dateNaiss.getDate()}`,
          animal : formateur.animal
        })

      }
  }

  edit() : void {
    if(this.editForm.valid){
      let formateurAEditer : IFormateur = {
        id : this.idForm,
        nom : this.editForm.value.nom,
        prenom : this.editForm.value.prenom,
        dateNaiss : new Date(this.editForm.value.dateNaiss),
        avatar : '../../assets/images/aude.png',
        animal : this.editForm.value.animal
      }

      this._fs.update(formateurAEditer, this.idForm);

      this._router.navigateByUrl('/demo/demo7');
    }
    else {
      console.log('NON');
      
    }
  }
}
