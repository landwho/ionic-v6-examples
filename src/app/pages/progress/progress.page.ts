import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value:number =0;
  rangeChange(ev:any){
    this.value = ev.detail.value
    console.log(ev.detail.value)
  }

}
