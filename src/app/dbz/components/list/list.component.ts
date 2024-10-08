
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje.interface';
import { PersonajeService } from '../../services/personajes.service';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {
   
    

    @Output()
    public onEliminarPersonaje : EventEmitter<string> = new EventEmitter();

    @Input()
    public personajes:Personaje[]=[];

    constructor(private personajeService: PersonajeService) {
        
    }

    
    onEliminar(id:string):void{
        this.onEliminarPersonaje.emit(id);
    }
 }
