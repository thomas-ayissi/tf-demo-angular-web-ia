import { Component, OnInit } from '@angular/core';
import { IFormateur } from 'src/app/models/IFormateur';
import { FormateurService } from 'src/app/shared/services/formateur.service';


@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  list : IFormateur[] = [];

  constructor(private _formService : FormateurService) {

  }

  ngOnInit(): void {
      this.list = this._formService.getAll();
  }
  
  deleteFormateur(id : number) : void {
    this._formService.delete(id);
  }

}
