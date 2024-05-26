import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  constructor(private HttpClient:HttpClient) { }

  getHeroes(){
    return this.HttpClient.get('assets/superheroes.json').pipe(delay(1500))
  }
}
