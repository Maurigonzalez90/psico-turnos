import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @ViewChild('input', {static: false}) input: ElementRef<HTMLInputElement>;
 
  myControl = new FormControl('');

  //Si el usuario tiene información, se muestra el componente
  user = [
    {
      id: 1,
      nombre: 'gisele',
      correo: 'a@a.com',
      history: {
        day1: "texto 1",
        day2: "texto 2",
        day3: "texto 3",
        day4: "texto 4",
        day5: "texto 5",
      }
    }
  ];
  
  
  

  ngOnInit(): void {
  }

  constructor() 
  { 
  }

  


  
}
