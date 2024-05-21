import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '../services/usuarios.json';  



@Injectable({
  providedIn: 'root'
})

export class UserService {

  urlApi = 'api/users';

  constructor( ) { }

  getJsonContent() {
    return (data.Usuarios as any)
  }
}
