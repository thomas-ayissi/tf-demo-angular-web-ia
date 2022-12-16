import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component {
  //prop
  totalSecondes : number = 0;
  timer : any = undefined;
  //isActive : boolean = false;

  //méthode
  start() : void {
    //this.isActive = !this.isActive;
    this.timer = setInterval(() => {
      this.totalSecondes++;
    } , 100) 
  }

  pause() : void {
    //this.isActive = !this.isActive;
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() : void {
    this.totalSecondes = 0;
    this.pause();
    // clearInterval(this.timer);
    //this.isActive = false;
  }
}
