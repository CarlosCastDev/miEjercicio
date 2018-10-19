import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearNegocioComponent } from './crearNegocio/crearNegocio.component';
import { EditarNegocioComponent } from './editarNegocio/editarNegocio.component';
import { FormsModule } from '@angular/forms'

import { AgmCoreModule } from '@agm/core';
import { DirectvaResaltar } from './directives/resaltar.directive';
import { DirectvaContrarClicks } from './directives/contar-clicks.directive';
import { OcticonDirective } from './directives/octicons.directive';
import { LugaresService } from './services/lugares.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


import { AngularFireAuthModule } from 'angularfire2/auth';

import { UiSwitchModule } from 'ngx-toggle-switch';
import { HttpModule } from '@angular/http';

// import alert service and component
import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './services/alert.service';
import { AutorizacionService } from './services/autorizacion.service';
import { MiGuardiaService } from './services/mi-guardia.service';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

const appRutas : Routes = [
{path : '' , component : LugaresComponent, canActivate:[MiGuardiaService]},
{path : 'lugares' , component : LugaresComponent, canActivate:[MiGuardiaService]},
{path : 'detalle/:id' , component : DetalleComponent, canActivate:[MiGuardiaService]},
{path : 'contacto' , component : ContactoComponent},
{path : 'login' , component : LoginComponent},
{path : 'registro' , component : RegistroComponent},
{path : 'crearNegocio' , component : CrearNegocioComponent, canActivate:[MiGuardiaService]},
{path : 'editarNegocio/:id' , component : EditarNegocioComponent, canActivate:[MiGuardiaService]}
];

export const firebaseConfig = {
    apiKey: "AIzaSyBZ8EKbqX-Ytoz0p0gTqeL1-dK2xOynNK4",
    authDomain: "mi-ejercicio.firebaseapp.com",
    databaseURL: "https://mi-ejercicio.firebaseio.com",
    projectId: "mi-ejercicio",
    storageBucket: "mi-ejercicio.appspot.com",
    messagingSenderId: "336411165444"
};


@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    CrearNegocioComponent,
    DirectvaResaltar,
    DirectvaContrarClicks,
    OcticonDirective,
    EditarNegocioComponent,
    AlertComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMTOKsmhFBCnv8sKcm-db4HXevsQPXS3s'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRutas),
    UiSwitchModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [LugaresService, AlertService, AutorizacionService, MiGuardiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
