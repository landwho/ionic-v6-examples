import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  // alertButtons = ['Action'];

  constructor(private AlertController:AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.alertPresent()
  }

  async alertPresent(){
    const alert = await this.AlertController.create({
      cssClass:'',
      header:'Alert',
      subHeader:'Title',
      message:'This is an example of alert action!',
      buttons:[{
        text:'OK',
        handler:()=>{
          console.log("You confirm the alert")
        }
      },'Cancel']
    });
    await alert.present();
  }


  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }



}
