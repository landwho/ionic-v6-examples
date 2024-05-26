import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPage } from './popover.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  },  {
    path: 'popover-info',
    loadChildren: () => import('./popover-info/popover-info.module').then( m => m.PopoverInfoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverPageRoutingModule {}
