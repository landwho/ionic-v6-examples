import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from './list-service.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList?:IonList;

  usuarios:any;

  constructor(private ListService:ListService) { }

  ngOnInit() {
    this.getUsuarios()
  }

  getUsuarios(){
    this.ListService.getUsuarios().subscribe(data=>{ this.usuarios = data ;console.log(data)})
  }


  closeIonList(){
    this.ionList?.closeSlidingItems();
  }

  detail(user:any){
    
    console.log("Detalle del Usuario");
    console.log(user);
    this.closeIonList();
  }

  delete(user:any){
    console.log(user);

    console.log("Usuario Eliminado");
    this.closeIonList()

  }

}
