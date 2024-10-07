import { Component } from "@angular/core";

@Component({
    selector:'app-counter',//nombre del tag
    template:`
        <h1>Contador</h1>
        <h3>Valor: {{counter}}</h3>
        <button (click)="ChangeCounter(1)">+1</button>
        <button (click)="ChangeCounter(-1)">-1</button>
        <button (click)="Reset(10)">Reiniciar</button>
    `
})
export class CounterComponent{
    public counter:number=10;

    ChangeCounter(value:number):void{
      this.counter+=value;
    }
  
    Reset(value:number):void{
      this.counter=value;
    }
}
