import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClientesComponent } from './component/user/crear-clientes/crear-clientes.component';
import { MostrarClientesComponent } from './component/user/mostrar-clientes/mostrar-clientes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path:'user/listar',
    component:MostrarClientesComponent
  },
  {
    path:'user/crear',
    component:CrearClientesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
