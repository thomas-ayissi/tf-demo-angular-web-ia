import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  @Input() prenomMonParent : string = '';
  @Input() ageParent : number = 0;

  @Output() sendEnvie : EventEmitter<string>;

  constructor(){
    this.sendEnvie = new EventEmitter<string>();
  }

  declencheBesoin( besoin : string ) : void {
    this.sendEnvie.emit(besoin)
    
  }

}
