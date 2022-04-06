import { Component, OnInit } from '@angular/core';
import {UserI} from 'src/app/models/User';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent implements OnInit {

  public users:UserI[] =[]

  constructor() { 
    this.users=[
      {
        id: 1,
        nombres: "Keiners Andrés",
        apellidos: "Barraza Durán",
        direccion: "Calle 14 A",
        telefono: "3012511784"
      },

      {
        id: 2,
        nombres: "Angie Paola",
        apellidos: "Villera Gómez",
        direccion: "Calle 34",
        telefono: "3013300000"
      },

      {
        id: 3,
        nombres: "Juancho Polo",
        apellidos: "Valencia",
        direccion: "Calle 15",
        telefono: "3011111000"
      }
    ]
  }

  ngOnInit(): void {
  }

}
