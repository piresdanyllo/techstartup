import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from 'src/app/models/conta';
import { ContaService } from 'src/app/services/conta.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-conta',
  templateUrl: './lista-conta.component.html',
  styleUrls: ['./lista-conta.component.css']
})
export class ListaContaComponent implements OnInit {

  filter!: any
  modalConta: boolean = false
  modalDeletar: boolean = false
  contaDoFuncionario: any
  idFuncionario: any
  nomeFuncionario: any
  idConta: any

  conta: Conta = {
    agencia_conta:'',
    banco_conta: '',
    numero_conta:''
  }
  constructor(private contaService: ContaService, private router: Router, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.mostrarContaDosFuncionarios()
  }

  mostrarContaDosFuncionarios(){
    this.contaService.contaDosFuncionarios().subscribe(resultado =>{
      this.contaDoFuncionario = resultado
      console.log(this.contaDoFuncionario)
    })
  }

  modalParaEditar(id_funcionario: string, id_conta: string){
    this.modalConta = true
    this.funcionarioService.mostrarUmFuncionario(id_funcionario).subscribe(resultado => {
      this.idFuncionario = resultado.id_funcionario
      this.nomeFuncionario = resultado.nome_funcionario
      console.log(this.idFuncionario)
    })
    this.contaService.mostrarUmaConta(id_conta).subscribe(resultado => {
      this.conta = resultado
      this.idConta = resultado.id_conta
      console.log(this.conta)
      console.log(this.idConta)
    })
  }

  cancelarEditar(){
    this.modalConta = false
  }

  modalParaDeletar(id_conta: string, id_funcionario: string){
    this.modalDeletar = true
    this.funcionarioService.mostrarUmFuncionario(id_funcionario).subscribe(resultado => {
      this.nomeFuncionario = resultado.nome_funcionario
      console.log(this.idFuncionario)
    })
    this.contaService.mostrarUmaConta(id_conta).subscribe(resultado => {
      this.conta = resultado
      this.idConta = resultado.id_conta
      console.log(this.conta)
      console.log(this.idConta)
    })
  }

  cancelarDelete(){
    this.modalDeletar = false
  }

  editarConta(){
    this.contaService.editarConta(this.conta, this.idConta, this.idFuncionario).subscribe({
      complete: () => {
        console.log('Conta editada')
        this.modalConta = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/contas']);
        })
      },
      error: () => {
        console.log('Conta não foi editada')
        this.modalConta = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/contas']);
        })
      }
    })
  }

  deletarConta(){
    this.contaService.deletarConta(this.idConta).subscribe({
      complete: () => {
        console.log('Conta editada')
        this.modalConta = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/contas']);
        })
      },
      error: () => {
        console.log('Conta não foi editada')
        this.modalConta = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/contas']);
        })
      }
    })
  }
}
