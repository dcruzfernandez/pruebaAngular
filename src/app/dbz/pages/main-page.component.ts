import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';
import { PersonajeService } from '../services/personajes.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainDbzComponent  {
    
    constructor(private personajeService: PersonajeService) {
     
    }

    get personajes():Personaje[]{
        return [...this.personajeService.Personajes]
    }

    agregarPersonaje(newPersonaje:Personaje):void{
        this.personajeService.agregarPersonaje(newPersonaje);
    }
    eliminarPersonaje(id:string):void{
        this.personajeService.eliminarPersonaje(id);
    }
}

