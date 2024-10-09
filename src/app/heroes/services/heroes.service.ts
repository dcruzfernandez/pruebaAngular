import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Reactive Extensions for JavaScript rxjs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Heroe } from '../interfaces/Heroe.interface';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
  
  private publicKey = '5a3e19e6b5da40eec6c8df22babd787a';
  private privateKey = '5a86fb41a1d41689b66caea0df3b917a12ff88ae'; 
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  

  constructor(private http: HttpClient) {}

  obtenerHeroes(): Observable<Heroe[]> {
    
    
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();
    const url = `${this.apiUrl}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
    console.log(url);
    return this.http.get<{ data: { results: Heroe[] } }>(url).pipe(
      map(response => response.data.results)
    );
  }
    
}