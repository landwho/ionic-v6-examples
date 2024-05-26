import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from './inicio';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private HttpClient:HttpClient) { }

  getMenuOptions(){
    return this.HttpClient.get<Componente[]>('assets/menu-opts.json');
  }


}
