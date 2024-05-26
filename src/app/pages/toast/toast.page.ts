import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private ToastController:ToastController) { }

  ngOnInit() {
  }



  async onClick(){
    const toast = await this.ToastController.create({
      message:'toast message #1',
      duration:1000
    });
    await toast.present()
  }

  async onClick2(){
    const toast2 = await this.ToastController.create({
      message:'toast message #2',
      duration:1000
    });
    await toast2.present()
  }

}
