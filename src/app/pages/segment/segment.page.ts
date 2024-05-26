import { Component, OnInit } from '@angular/core';
import { SegmentService } from './segment.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes?:Observable<any>
  publisher:string=''

  constructor(private SegmentService:SegmentService) { 
    this.heroes = this.SegmentService.getHeroes();
  }

  ngOnInit() {
  }

  segmentChanged(e:any){

    console.log(e.detail.value)
   
    // if(e.detail.value === 'todos'){
    //   return this.publisher=''
    // }
    this.publisher = e.detail.value;
  }

  getHeroInfo(hero:any[]){
    console.log(hero)
  }


}
