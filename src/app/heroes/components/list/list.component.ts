import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes=['Spiderman','Thor','Hulk','IronMan','Capitan America'];
  public borrado:boolean=false;
  public valor:number=8;

  public heroeBorrado:string | undefined='';

  eliminar():void{
    this.heroeBorrado= this.heroes.pop();
    this.heroeBorrado?this.borrado=true:this.borrado=false;
  }
}
