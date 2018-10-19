import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth/auth';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Injectable()
export class AutorizacionService {

constructor(private angularFireAuth:AngularFireAuth, private alertService:AlertService, private router:Router){
    this.isLogueado();
}

    public login = (email,password) => {
        console.log('metodo login');
                this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then((response)=>{
            // alert('Usuario registrado con éxito');
            console.log('Usuario logeado con éxito');
            this.alertService.info('Usuario logeado con éxito');            
            console.log(response);
            this.router.navigate(['lugares']);

        })
        .catch((error) =>{
            console.log('Un error ha ocurrido');
            // alert('Un error ha ocurrido');
            this.alertService.error('Un error ha ocurrido');
            console.log(error);    
        });
    }

    public registro = (email,password) => {
        console.log('metodo registro');
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password).then((response)=>{
        	// alert('Usuario registrado con éxito');
        	console.log('Usuario registrado con éxito');
        	this.alertService.info('Usuario registrado con éxito');
        	console.log(response);
            this.router.navigate(['lugares']);
        })
        .catch((error) =>{
        	console.log('Un error ha ocurrido');
        	// alert('Un error ha ocurrido');
        	this.alertService.error('Un error ha ocurrido');
        	console.log(error);	
        });
    }

    public isLogueado = () => {
        return this.angularFireAuth.authState;
    }

    public logout = () => {
        console.log('metodo logout');
        this.router.navigate(['login']);
        this.angularFireAuth.auth.signOut();        
    }

    public getEmailUsrLogueado = () => {
        return this.angularFireAuth.auth.currentUser.email;
    }

}