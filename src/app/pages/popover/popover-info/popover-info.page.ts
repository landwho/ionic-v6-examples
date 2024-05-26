import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.page.html',
  styleUrls: ['./popover-info.page.scss'],
})
export class PopoverInfoPage implements OnInit {

  items =['opcion 1', 'opcion 2', 'opcion 3', 'opcion 4', 'opcion 5'];

  constructor() { }

  ngOnInit() {
  }

  onClick(value:any){
    console.log(value)

  }

}
