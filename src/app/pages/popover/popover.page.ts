import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoPage } from './popover-info/popover-info.page';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private PopoverController:PopoverController) { }

  ngOnInit() {
  }

  async onClick(){
    const popover = await this.PopoverController.create({
      component:PopoverInfoPage,
      translucent:true,
      event:event
    });
    await popover.present()
  }

}
