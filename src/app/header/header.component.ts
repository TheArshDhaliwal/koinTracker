import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  selectedCurrency: string = "cad";

  constructor(){}

  currencyValue(event:string){
    console.log(event);
  }

}
