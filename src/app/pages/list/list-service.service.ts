import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private HttpClient:HttpClient) { }

  getUsuarios(){
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/users');
  }


}
