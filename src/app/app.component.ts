import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './pages/inicio/inicio';
import { MenuController } from '@ionic/angular';
import { InicioService } from './pages/inicio/inicio.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes:Observable<Componente[]>;
 

  constructor(private MenuController:MenuController, private InicioService:InicioService) {
    this.componentes = this.InicioService.getMenuOptions();
   }

  ngOnInit(){ }

  onSplitPaneVisible(e:any){}
}
