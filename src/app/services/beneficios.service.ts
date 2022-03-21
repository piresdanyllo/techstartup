import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beneficios } from '../models/beneficios';

@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {

  baseUrl: String = 'http://localhost:8080/startup'

  constructor(private http: HttpClient) { }

  mostrarBeneficiosDoFuncionario(id_funcionario: string):Observable<Beneficios[]>{
    const url = `${this.baseUrl}/beneficios-funcionario/${id_funcionario}`
    return this.http.get<Beneficios[]>(url)
  }

  mostrarUmBeneficio(codigo: string):Observable<Beneficios>{
    const url = `${this.baseUrl}/beneficios/${codigo}`
    return this.http.get<Beneficios>(url)
  }

  cadastrarBeneficio(beneficio: Beneficios, id_funcionario: string):Observable<Beneficios>{
    const url = `${this.baseUrl}/beneficios/${id_funcionario}`
    return this.http.post<Beneficios>(url, beneficio)
  }

  editarBeneficio(beneficio: Beneficios, codigo: string, id_funcionario: string):Observable<Beneficios>{
    const url = `${this.baseUrl}/beneficios/${codigo}?funcionario=${id_funcionario}`
    return this.http.put<Beneficios>(url, beneficio)
  }

  deletarBeneficio(codigo: string):Observable<void>{
    const url = `${this.baseUrl}/beneficios/${codigo}`
    return this.http.delete<void>(url)
  }
}
