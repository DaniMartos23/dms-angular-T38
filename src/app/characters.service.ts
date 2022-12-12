import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  retornar_clientes(){
    return this.http.get("https://rickandmortyapi.com/api/character");
  }
}
