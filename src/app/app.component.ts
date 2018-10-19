import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	isLogueado = false;
	emailUsrLogeado:any;

	constructor(private autorizacionService:AutorizacionService, private alertService:AlertService)
	{
		this.autorizacionService.isLogueado().subscribe((resultado) => 
		{
			if(resultado && resultado.uid)
			{
				this.isLogueado=true;
				this.emailUsrLogeado= this.getEmailUsrLogueado();
			}
			else
			{
				this.isLogueado=false;
			}
		}, (error) => 
		{
        	// console.log('Un error ha ocurrido');
        	// // alert('Un error ha ocurrido');
        	// this.alertService.error('Un error ha ocurrido');
        	// console.log(error);	
        	this.isLogueado = false;
		}
		);
	}

	logout()
	{
		this.autorizacionService.logout();
	}



	private getEmailUsrLogueado()
	{
	 	return this.autorizacionService.getEmailUsrLogueado();
	}
}
