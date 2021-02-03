import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProyectosComponent } from './Pages/proyectos/proyectos.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { ProyectoComponent } from './Components/proyecto/proyecto.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:
    [
      NavbarComponent,
      FooterComponent,
      InicioComponent,
      AboutComponent,
      ProyectosComponent,
      ContactoComponent,
      ProyectoComponent,
      LoadingComponent,
      NotFoundComponent
    ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class RoutesModule { }
