import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root' // Este servicio será proporcionado a toda la aplicación
})
export class PersonajeService {
  private personajes:Personaje[] = [
    { id:uuid(), nombre: 'Goku', poder: 9000 },
    { id:uuid(), nombre: 'Vegeta', poder: 8500 }
  ];

  constructor() {}

  // propiedad para obtener los personajes
  get Personajes():Personaje[] {
    return this.personajes;
  }
  // Método para agregar un nuevo personaje
  agregarPersonaje(personaje: Personaje) {
    const nuevo:Personaje={id:uuid(),...personaje}
    this.personajes.push(nuevo);
  }
  // Método para eliminar un nuevo personaje
  eliminarPersonaje(id:string):void{
    this.personajes=this.personajes.filter(p=>p.id!==id);

  }
}

