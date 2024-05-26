import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading?: HTMLIonLoadingElement;


  constructor(private LoadingController:LoadingController) { }

  ngOnInit() {
  }


  mostrarLoading(){
    this.presentLoading();
  }

  async presentLoading(){
    const loading = await this.LoadingController.create({
      cssClass:'my-custom-class',
      message:'Please wait ....',
      duration:5000,
    });
    await loading.present();
    // const {role, data} = await loading.onDidDismiss();
    // console.log('Loading dismissed!')
  }

}
