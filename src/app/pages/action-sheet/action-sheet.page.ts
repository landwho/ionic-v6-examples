import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private ActionSheetController:ActionSheetController) { }

  ngOnInit() {
  }


  onClick(){
    this.presentActionSheet()
  }

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      icon:'trash',
      data: {
        action: 'delete',

      },
      handler:()=>{
        console.log("you click on delete action")
      }
      
    },
    {
      text: 'Share',
      icon:'share',
      data: {
        action: 'share',
      },
      handler:()=>{
        console.log("you click on share action")
      }
    },
    {
      text:'Play (Open Modal)',
      icon:'caret-forward-circle',
      data:{
        action:'play'
      },
      handler:()=>{
        console.log("you click on play action")
      }
    },
    {
      text:'Favorite',
      icon:'heart',
      data:{
        action:'favorite'
      },
      handler:()=>{
        console.log("you click on favorite action")
      }
    },
    {
      text: 'Cancel',
      icon:'close',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];


  async presentActionSheet(){
    const actionSheet = await this.ActionSheetController.create({
      header:'Albums',
      cssClass:'my-custom-class',
      backdropDismiss:false,
      buttons:[
        {
        text:'Delete',
        role:'destructive',
        icon:'trash-outline',
        cssClass:'red',
          handler:()=>{
            console.log("delete")
          }
        },
        {
        text:'Share',
        icon:'share-outline',
          handler:()=>{
            console.log("Share")
          }
        }
        ,
        {
        text:'Play (Open Modal)',
        icon:'caret-forward-circle-outline',
          handler:()=>{
            console.log("Play clicked")
          }
        }
        ,
        {
        text:'Favorite',
        icon:'heart-outline',
          handler:()=>{
            console.log("Favorite")
          }
        }
        ,
        {
        text:'Cancel',
        role:'cancel',
        icon:'close',
          handler:()=>{
            console.log("Close")
          }
        }
    ]
    });
    await actionSheet.present()
  }

}
