import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumnModel } from './albumn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private HttpClient:HttpClient) { }

  getAlbumns(): Observable<AlbumnModel[]> {
    return this.HttpClient.get<AlbumnModel[]>('https://jsonplaceholder.typicode.com/albums');
  }

}
