import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Http} from "@angular/http";
import {Headers} from "@angular/http";

@Injectable()
export class LugaresService{
  lugares:any = {};
  lugar:any = {};
  API_ENDPOINT:String = "https://mi-ejercicio.firebaseio.com";

  constructor(private afb:AngularFireDatabase, private http:Http)
  {

  }

  public getLugares(){
    this.lugares = this.afb.list('lugares/');
    console.log(this.lugares);

    return this.lugares;

/*    const headers = new Headers({"Content-Type":"application/json"});
    this.lugares = this.http.post(this.API_ENDPOINT+"/lugares.json" , null, {headers:headers});
    console.log(this.lugares);*/


/*    return this.http.get(this.API_ENDPOINT+'/.json')
    .map((resultado)=>{
        const data = resultado.json().lugares;
        return (Object as any).values(data.subjects);
    });*/

  }

  public getLugar(id){
    return this.afb.object('lugares/'+id);
  }

  public agregarLugar(lugar)
  {
    console.log("en servicio");

    console.log(lugar);
    this.afb.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public actualizaLugar(lugar)
  {
    console.log("en servicio");

    console.log(lugar);
    this.afb.database.ref('lugares/'+lugar.id).update(lugar);
  }

  public obtenerGeoData(direccion)
  {
      return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }
}