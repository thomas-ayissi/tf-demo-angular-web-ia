import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component {
  form: FormGroup;
  // form2: FormGroup;

  constructor(private _f: FormBuilder) {
    this.form = this._f.group({
      form1 : this._f.group({
        nis: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
        nom: [null, [Validators.required]],
        prenom: [null, [Validators.required]],
        dateNaiss: [null, [Validators.required, this.isMajeur()]],
        genre: ['Autre', [Validators.required]],
        typeCompte: ['', [Validators.required]],
        tel: [null, []],
        email: [null, [Validators.required, Validators.email]],
        mdp: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,}$/)]],
        mdp2: [null, [Validators.required]],
        adresse: [false, []],

      }, {validators: [this.confirmPassword()]}),      
      adresseForm : this._f.group({
        rue: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        boite: [null, []],
        cp: [null, [Validators.required, Validators.min(1000), Validators.max(9999)]],
        ville: [null, [Validators.required]],
        pays: [null, [Validators.required]],
      })
    }, )

    // this.form2 = this._f.group({
    //   rue: [null, [Validators.required]],
    //   numero: [null, [Validators.required]],
    //   boite: [null, []],
    //   cp: [null, [Validators.required, Validators.min(1000), Validators.max(9999)]],
    //   ville: [null, [Validators.required]],
    //   pays: [null, [Validators.required]],
    // })
  }

  // submitForm(): void{
  //   if(this.form.valid){
  //     if(this.form.get('adresse')?.value){
  //       if(this.form2.valid){
  //         console.log('formulaire envoyé avec les données de l\'adresse');
  //       }
  //       else{
  //         this.form2.markAllAsTouched();
  //       }
  //     }
  //     else{
  //       console.log('formulaire envoyé sans les données de l\'adresse');
  //     }
  //   }
  //   else{
  //     this.form.markAllAsTouched();
  //   }
  // }

  submitForm(): void{
    if(this.form.get('form1')?.valid){
      if(this.form.get('form1.adresse')?.value){
        if(this.form.get('adresseForm')?.valid){
          console.log('formulaire envoyé avec les données de l\'adresse');
        }
        else{
          this.form.get('adresseForm')?.markAllAsTouched();
        }
      }
      else{
        console.log('formulaire envoyé sans les données de l\'adresse');
      }
    }
    else{
      this.form.get('form1')?.markAllAsTouched();
    }
  }


  isMajeur(): ValidatorFn | null{
    return (control: AbstractControl) => {
      if(control.value != null || control.value != ''){
        let todayYear = new Date().getFullYear()
        let inputYear = new Date(control.value).getFullYear()
        if(todayYear - inputYear < 18){
          return {mineur: true}
        }
      }
      return null
    }
  }

  confirmPassword(): ValidatorFn | null{
    return (control: AbstractControl) => {
      if(control.get('mdp')?.value !== control.get('mdp2')?.value){
        return {diff: true}
      }
      return null
    }
  }
}
