import { Component, EventEmitter, Output} from '@angular/core';
import { Personaje } from '../../interfaces/Personaje.interface';

@Component({
    selector: 'dbz-add-form',
    templateUrl: './form-add.component.html',
    styleUrl:'./form-add.component.css'
})

export class FormComponent  {
    @Output()
    public OnNewPersonaje : EventEmitter<Personaje> = new EventEmitter()

    public personaje:Personaje={
        nombre:'aa',
        poder:0
    }

    agregarPersonaje():void{
      
        if(this.personaje.nombre.length==0) return;
        
        this.OnNewPersonaje.emit(this.personaje);
        this.personaje={nombre:'',poder:0}
    }
}