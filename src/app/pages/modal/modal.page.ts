import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from './modal-info/modal-info.page';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  respuesa:any;

  constructor(private ModalController:ModalController) { }

  ngOnInit() {
  }
 async mostarModal(){

    const modal = await this.ModalController.create({
      component:ModalInfoPage,
      componentProps:{
        name:'Jorge UBico',
        country:'Guatemala'
      }
    });
    await modal.present();

    const {data } = await modal.onWillDismiss()


    //  const resp = await modal.onWillDismiss()
    // console.log(data)
    this.respuesa = data

    
  }


}
