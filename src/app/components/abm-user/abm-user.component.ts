import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-abm-user',
  templateUrl: './abm-user.component.html',
  styleUrls: ['./abm-user.component.scss'],
})


export class AbmUserComponent implements OnInit {

  @ViewChild('input', {static: false}) input: ElementRef<HTMLInputElement>;
 
  myControl = new FormControl('');
  
  filterUsers: String[] = [""];

  users: String[] = [""]; 

  constructor( private userService : UserService ) { }

  ngOnInit(): void {
    console.log( this.userService.getJsonContent() ) ;
    this.filterUsers = this.users.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filterUsers = this.users.filter(o => o.toLowerCase().includes(filterValue));
  }

  //aca capturo el usuario y debo enviarlo al service
  // para que devuelva una respuesta la informacion 
  UserSelect(e){ 
    console.log(e.target.value)
  }

  createUser() {}
}


