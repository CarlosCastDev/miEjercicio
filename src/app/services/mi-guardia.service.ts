import { Injectable } from '@angular/core';
import { Router, NavigationStart, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { AutorizacionService } from '../services/autorizacion.service';
import { AlertService } from '../services/alert.service';
import 'rxjs/add/operator/filter';

import { Alert, AlertType } from '../_models/alert';

@Injectable()
export class MiGuardiaService implements CanActivate{
    isLogueado = false;

    constructor(private autorizacionService:AutorizacionService, private alertService:AlertService)
    {
        this.autorizacionService.isLogueado().subscribe((resultado) => 
        {
            if(resultado && resultado.uid)
            {
                this.isLogueado=true;
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

    canActivate (){
        return this.isLogueado;
    }
}