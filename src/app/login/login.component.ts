import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj:any = {};

  constructor(private autorizacionService:AutorizacionService)
  {
  	
  }

  login()
  {
  	this.autorizacionService.login(this.loginObj.email,this.loginObj.password);
  }
}
