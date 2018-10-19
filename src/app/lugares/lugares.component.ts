import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { AlertService } from '../services/alert.service';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations : [
  trigger('contenedorAnimable',
    [
      state
      ('inicial',
        style
        (
        {
            opacity: 0
            // ,
            // backgroundColor : 'green',
            // transform: 'rotate3d(0,0,0,0deg)'
        }
        )
      ),
      state
      ('final',
        style
        (
        {
            opacity: 1
            // ,
            // backgroundColor : 'yellow',
            // transform: 'rotate3d(5,10,20,30deg)'
        }
        )
      )
      ,
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500))
    ]
  )
  ]
})
export class LugaresComponent {
  title:string = 'Ejercicio Angular 4';
  valor:boolean = true;
  nombre:string = '';  
  lat:number = 19.4274584;
  lng:number = -99.1645882;
  lugares = null;
  state = 'inicial';

  constructor(private lugaresService:LugaresService, private alertService:AlertService, private router:Router){

  	lugaresService.getLugares().valueChanges().subscribe(
     lugares => {
          this.lugares = lugares;
          console.log("entra");
          console.log(this.lugares);
          setTimeout(() => {
            this.valor = false;
          }, 3000);
          this.animar();
        },
        error => {
            console.log(error);
            if(this.router.url != '/login')
            {
              this.alertService.error("Tenemos algunas dificultades Error :"+error);
            }
        }
      );
    

  }

  doSomething()
  {
  	alert('PUM!!!');
  }

  animar()
  {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicia(e)
  {
    console.log(e);
    console.log('Inicia');
  }

  animacionTermina(e)
  {
    console.log(e);
    console.log('Termina');
  }
}
