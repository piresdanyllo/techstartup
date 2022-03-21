import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: String = 'http://localhost:8080/startup'

  constructor(private http: HttpClient) { }

  mostrarTodosFuncionarios():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.get<Funcionario[]>(url)
  }

  mostrarFuncionariosDoCargo(id_cargo: string):Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/buscar-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url)
  }

  mostrarFuncionariosComCargo():Observable<void>{
    const url = `${this.baseUrl}/funcionario/buscar-funcionarios-com-cargo`
    return this.http.get<void>(url)
  }

  promoverFuncionario(funcionario: Funcionario, id_funcionario: string, cargo: Cargo):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/promover/${id_funcionario}?cargo=${cargo.id_cargo}`
    return this.http.put<Funcionario>(url, funcionario)
  }

  demitirFuncionario(funcionario: Funcionario):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/demitir/${funcionario.id_funcionario}`
    return this.http.put<Funcionario>(url, funcionario)
  }

  cadastrarFuncionario(funcionario: Funcionario, cargo: Cargo):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario?cargo=${cargo.id_cargo}`
    return this.http.post<Funcionario>(url, funcionario)
  }

  mostrarUmFuncionario(id_funcionario: string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }

  mostrarIdCargoDoFuncionario(id_funcionario: string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/buscar-id-cargo/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }

  editarFuncionario(funcionario: Funcionario, id_funcionario: string, id_cargo: string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}?cargo=${id_cargo}`
    return this.http.put<Funcionario>(url, funcionario)
  }

  mostrarFuncionarioInativo():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/inativos`
    return this.http.get<Funcionario[]>(url)
  }

  deletarFuncionario(id_funcionario: string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)
  }

  mostrarQuantidadeDeFuncionariosAtivos():Observable<void>{
    const url = `${this.baseUrl}/funcionario/quantidade-total-ativos`
    return this.http.get<void>(url)
  }
}
