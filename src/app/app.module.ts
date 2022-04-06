import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { MostrarClientesComponent } from './component/user/mostrar-clientes/mostrar-clientes.component';
import { CrearClientesComponent } from './component/user/crear-clientes/crear-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarClientesComponent,
    CrearClientesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
