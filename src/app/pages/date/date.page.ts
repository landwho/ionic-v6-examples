import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  fecha : Date = new Date()

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(e:any){
    let date = new Date(e.detail.value)
    console.log(date.toLocaleDateString())
  }

  customPickerOption(){}

}
