import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String = 'http://localhost:8080/startup'

  constructor(private http: HttpClient) { }

  mostrarTodosCargos():Observable<Cargo[]>{
    const url = `${this.baseUrl}/cargo`
    return this.http.get<Cargo[]>(url)
  }

  mostrarUmCargo(id: string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.get<Cargo>(url)
  }

  cadastrarCargo(cargo: Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url, cargo)
  }

  excluirCargo(id:String):Observable<void>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.delete<void>(url)
  }

  editarCargo(cargo: Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<Cargo>(url, cargo)
  }

  mostrarQuantidadeDeCargos():Observable<void>{
    const url = `${this.baseUrl}/cargo/quantidade-total`
    return this.http.get<void>(url)
  }
}
