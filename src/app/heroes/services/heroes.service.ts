import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Reactive Extensions for JavaScript rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Heroe } from '../interfaces/Heroe.interface';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=5a3e19e6b5da40eec6c8df22babd787a';

  

  constructor(private http: HttpClient) {}

  obtenerHeroes(): Observable<Heroe[]> {
    return this.http.get<{ data: { results: Heroe[] } }>(this.apiUrl).pipe(
      map(response => response.data.results)  // Ahora el resultado está tipado como Personaje[]
    );
  }
    
}