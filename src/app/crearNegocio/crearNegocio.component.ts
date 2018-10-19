import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';
import { Observable} from 'rxjs';
import 'rxjs/Rx';
import {FormControl} from '@angular/forms';
import {Http} from '@angular/http';
import { empty } from "rxjs/observable/empty";
import { of } from "rxjs/observable/of";

@Component({
  selector: 'app-crearNegocio',
  templateUrl: './crearNegocio.component.html'
})
export class CrearNegocioComponent {
	lugar:any = {};
  display:boolean = false;
  results$ : Observable<any>;
  private searchField : FormControl;

  constructor(private route:ActivatedRoute, private servicio:LugaresService, private http:Http)
  {
    const URL = 'https://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
    .debounceTime(500)
    .switchMap(query => query ? this.http.get(`${URL}?address=${query}`) :[])
    .map(response => response.json())    
    .map(response => response['results'])
    .catch(() => Observable.empty());
  }

  guardarLugar()
  {
    var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
  	console.log("valor");


    this.lugar.id = Date.now();
    this.lugar.sit = "AC";

    console.log(this.lugar);

    this.servicio.obtenerGeoData(direccion).subscribe(
      (result) =>
       {
                this.lugar.lat = result.json().results[0].geometry.location.lat;
                this.lugar.lng = result.json().results[0].geometry.location.lng;

                this.servicio.agregarLugar(this.lugar);

                this.display = true; 
                this.lugar = {};
        }
     );
  }

  cerrarModal()
  {
    this.display = false; 
  }

  asignarDireccion(result)
  {
    this.lugar.calle = result.address_components[0].long_name;
    this.lugar.ciudad = result.address_components[3].long_name;
    this.lugar.pais = result.address_components[4].long_name;

     this.searchField.setValue('');
  }

}