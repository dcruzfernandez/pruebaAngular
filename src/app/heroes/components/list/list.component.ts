import { Component } from '@angular/core';
// import { Heroe } from '../../interfaces/Heroe.interface';
// import { HeroesService } from '../../services/heroes.service';
// import { Observable } from 'rxjs';

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

  // public heroes!: Observable<Heroe[]>;

  // constructor(private heroesService: HeroesService) {}

  
  // ngOnInit(): void {
  //   this.heroes = this.heroesService.obtenerHeroes();
  // }
}
