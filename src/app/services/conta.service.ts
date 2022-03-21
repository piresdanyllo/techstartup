import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from '../models/conta';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  baseUrl: String = 'http://localhost:8080/startup'

  constructor(private http: HttpClient) { }

  mostrarUmaConta(id_conta: string):Observable<Conta>{
    const url = `${this.baseUrl}/conta/${id_conta}`
    return this.http.get<Conta>(url)
  }
  cadastrarConta(conta: Conta, id_funcionario: string):Observable<Conta>{
    const url = `${this.baseUrl}/conta?funcionario=${id_funcionario}`
    return this.http.post<Conta>(url, conta)
  }

  editarConta(conta: Conta, id_conta: string, id_funcionario: string):Observable<Conta>{
    const url = `${this.baseUrl}/conta/${id_conta}?funcionario=${id_funcionario}`
    return this.http.put<Conta>(url, conta)
  }

  deletarConta(id_conta: string):Observable<void>{
    const url = `${this.baseUrl}/conta/${id_conta}`
    return this.http.delete<void>(url)
  }

  contaDosFuncionarios():Observable<void>{
    const url = `${this.baseUrl}/conta/contas-dos-funcionarios`
    return this.http.get<void>(url)
  }


}
