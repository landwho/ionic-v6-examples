import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name?:string;
  @Input() country?:string;
  
  constructor(private ModalController:ModalController) { }

  ngOnInit() {
  }

  async salir(){
    const modal = await this.ModalController.dismiss();
  }

  async salirConArgumentos(){
    const modal = await this.ModalController.dismiss({
      name:'Ricardo Brooks',
      country: 'Guatemala'
    });
  }
}
