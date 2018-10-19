import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crearNegocio',
  templateUrl: './editarNegocio.component.html'
})
export class EditarNegocioComponent {
	lugar:any = {};
  display:boolean = false;
  id:number = null;

  constructor(private route:ActivatedRoute, private servicio:LugaresService)
  {
    this.id = this.route.snapshot.params['id'];

        interface lugarI {
        plan: boolean;
    };

    servicio.getLugar(this.id).valueChanges().subscribe((lugar:lugarI) => 
    {

        if(lugar.plan == null)
        {
          console.log("llega a false");
          lugar.plan = false;
        }
        else if(lugar.plan)
        {
          lugar.plan = true;
        }
        else
        {
          lugar.plan = false;
        }

        this.lugar = lugar;

     });

    console.log(this.lugar);
  }

  actualizarLugar()
  {
    var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    
  	console.log("valor EDITAR");

    console.log(this.lugar);

    this.servicio.obtenerGeoData(direccion).subscribe(
      (result) =>
       {
                this.lugar.lat = result.json().results[0].geometry.location.lat;
                this.lugar.lng = result.json().results[0].geometry.location.lng;

                  this.servicio.actualizaLugar(this.lugar);

                this.display = true; 
                this.lugar = {};
        }
     );
  }

  cerrarModal()
  {
    this.display = false; 
  }
}