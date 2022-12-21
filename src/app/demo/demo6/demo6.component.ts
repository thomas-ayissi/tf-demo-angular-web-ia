import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {

  monFormulaire : FormGroup;

  constructor(private _fb : FormBuilder){
    //Création du formulaire côté TS
    this.monFormulaire = this._fb.group({
      lastname : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      firstname : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      birthdate : [null, [Validators.required, this.majeurValidator()]],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
      phone : [null, []],
      siblings : [null, [Validators.required, Validators.min(0)]],
      country : ['', [Validators.required]],
      single : [null, []]
    }, { validators : this.charoValidator() });
  }

  submitForm() : void {
    if(this.monFormulaire.valid){
      console.log('Formulaire valide : Envoyé');
      console.log(this.monFormulaire.value);
      
    }else {
      console.log('Formulaire invalide : Pas envoyé');
      this.monFormulaire.markAllAsTouched();

    }

    // console.log(this.monFormulaire.value.lastname)
    // console.log(this.monFormulaire.get('lastname')?.value);
    
  }

  majeurValidator() : ValidatorFn | null {
    return (control : AbstractControl) => {
      //Si y'a quelque chose entré dans notre input
      if(control.value !== '' && control.value !== null){
        let todayYear = new Date().getFullYear();
        let inputYear = new Date(control.value).getFullYear();

        if(todayYear - inputYear < 18) {
          return { mineur : true }
        }
      }
      return null;
    }
  }

  // charoValidator(form : FormGroup) : any {
  //   //Vérifier si célib coché
  //   if(form.get('single')?.value) {
  //     //Si oui, si null ou vide dans tel
  //     if(form.get('phone')?.value === '' || form.get('phone')?.value === null ){
  //       //Renvoie une erreur
  //       return { charolife : true }
  //     }
  //   }
  //   return null;
  // }

  charoValidator() : ValidatorFn | null {
    return (form : AbstractControl) => {
      //Vérifier si célib coché
    if(form.get('single')?.value) {
      //Si oui, si null ou vide dans tel
      if(form.get('phone')?.value === '' || form.get('phone')?.value === null ){
        //Renvoie une erreur
        return { charolife : true }
      }
    }
    return null;
    }
    
  }

}
