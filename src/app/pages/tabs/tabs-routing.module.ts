import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'account',
       loadChildren:()=> import('../card/card.module').then(m => m.CardPageModule)
      },
      {
        path:'contact',
       loadChildren:()=> import('../segment/segment.module').then(m => m.SegmentPageModule)
      },
      {
        path:'settings',
       loadChildren:()=> import('../refresher/refresher.module').then(m => m.RefresherPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
