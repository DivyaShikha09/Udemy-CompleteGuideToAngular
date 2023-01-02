import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  checkNum:number;
  showSuccess:boolean;
  showWarning:boolean;

  constructor (){

  }

  ngOnInit() {
    this.reset();
  }

  public reset(){
    this.checkNum = 0;
    this.showSuccess=false;
    this.showWarning=false;
  }

  public checkSquare() {
    debugger;
    if(this.checkNum > 0){
      var x = Math.floor(Math.sqrt(this.checkNum));
      if(this.checkNum == x*x){
        this.showSuccess=true;
        this.showWarning=false;
      } else {
        this.showWarning=true;
        this.showSuccess=false;
      }
    }
  }

}

