import { ProyectosComponent } from './Pages/proyectos/proyectos.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '404', component: NotFoundComponent },
  {
    path: '', pathMatch: 'full', redirectTo: 'inicio'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
