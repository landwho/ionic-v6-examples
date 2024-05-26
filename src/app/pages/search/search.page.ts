import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs';
import { AlbumnModel } from './albumn';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumnes:any[]=[]
  textoBuscar:string = '';

  constructor(private SearchService:SearchService) { 
  this.SearchService.getAlbumns().subscribe(data=>{
    this.albumnes = data;
    console.log(this.albumnes)
  })
  }

  ngOnInit() { }

  onSearchChange(e:any){
    this.textoBuscar = e.detail.value;
  }

}
