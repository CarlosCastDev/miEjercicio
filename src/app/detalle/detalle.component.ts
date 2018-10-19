import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  id:number = null;
  lugar:any = {};


  constructor(private route:ActivatedRoute, private lugaresService:LugaresService)
  {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['refered']);
    this.id = this.route.snapshot.params['id'];

    interface lugarI {
        plan: string;
    };

    lugaresService.getLugar(this.id).valueChanges().subscribe((lugar:lugarI) => 
    {

    if(lugar.plan == null)
    {
      lugar.plan = "Gratis";
    }
    else if(lugar.plan)
    {
      lugar.plan = "Plan";
    }
    else
    {
      lugar.plan = "Gratis";
    }

      this.lugar = lugar;
    });

    console.log(this.lugar);
  }
}
