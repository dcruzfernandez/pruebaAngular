import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public nombre:string='thor';
    public edad:number=40;

    get nombreMayuscula():string{
      return this.nombre.toUpperCase();

    }
    mostrarDatos():string{
      return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
      this.nombre='spiderman';
    }

    cambiarEdad():void{
      this.edad=25;
    }

    restablecer():void{
      this.edad=40;
      this.nombre='thor';
    }

}
