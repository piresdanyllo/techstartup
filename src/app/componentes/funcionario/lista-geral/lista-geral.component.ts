import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Conta } from 'src/app/models/conta';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { ContaService } from 'src/app/services/conta.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-geral',
  templateUrl: './lista-geral.component.html',
  styleUrls: ['./lista-geral.component.css']
})
export class ListaGeralComponent implements OnInit {

  filter!: any
  funcionariosComCargo: any
  cargoEscolhido: any
  cargos: Cargo[] = []
  idDoCargoAtual: any
  idFuncionarioParaConta: any

  modalCadastrar: boolean = false
  modalEditar: boolean = false
  modalConta: boolean = false

  funcionario: Funcionario = {
    nome_funcionario: '',
    cidade_funcionario:''
  }

  conta: Conta = {
    agencia_conta: '',
    banco_conta: '',
    numero_conta: ''
  }


  constructor(private funcionarioService: FuncionarioService, private router: Router, private cargoService: CargoService, private contaService: ContaService) { }

  ngOnInit(): void {
    this.mostrarFuncionariosComCargo()
    this.mostrarTodosCargos()
  }

  mostrarFuncionariosComCargo(){
    this.funcionarioService.mostrarFuncionariosComCargo().subscribe(resultado => {
      this.funcionariosComCargo = resultado
      console.log(this.funcionariosComCargo);

    })
  }

  mostrarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado => {
      this.cargos = resultado
    })
  }

  modalParaCadastrar(){
    this.modalCadastrar = true
  }

  cancelarCadastro(){
    this.modalCadastrar = false
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/funcionario']);
    })
  }

  modalParaEditar(id_funcionario: string){
    this.modalEditar = true
    this.funcionarioService.mostrarUmFuncionario(id_funcionario).subscribe(resultado => {
      this.funcionario = resultado
      console.log(this.funcionario);
      this.funcionarioService.mostrarIdCargoDoFuncionario(id_funcionario).subscribe(resultado => {
        this.idDoCargoAtual = resultado
        console.log(this.idDoCargoAtual);
      })
    })
  }

  cancelarEditar(){
    this.modalEditar = false
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/funcionario']);
    })
  }

  modalParaConta(id_funcionario: string){
    this.modalConta = true
    this.funcionarioService.mostrarUmFuncionario(id_funcionario).subscribe(resultado => {
      this.idFuncionarioParaConta = resultado.id_funcionario
      console.log(this.idFuncionarioParaConta)
    })
  }

  cancelarConta(){
    this.modalConta = false
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/funcionario']);
    })
  }

  cadastrarFuncionario(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario, this.cargoEscolhido).subscribe({
      complete: () => {
        console.log('Funcionario cadastrado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/funcionario']);
        })
      },
      error: () => {
        console.log('Funcionário não foi cadastrado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/funcionario']);
        })
      }
    })
  }

  editarFuncionario(){
    this.funcionarioService.editarFuncionario(this.funcionario, this.funcionario.id_funcionario, this.idDoCargoAtual).subscribe({
      complete: () => {
        console.log('Funcionario editado')
        this.modalEditar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/funcionario']);
        })
      },
      error: () => {
        console.log('Funcionário não foi editado')
        this.modalEditar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/funcionario']);
        })
      }
    })
  }

  cadastrarConta(){
    this.contaService.cadastrarConta(this.conta, this.idFuncionarioParaConta).subscribe({
      complete: () => {
        console.log('Conta cadastrada')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/funcionario']);
        })
      },
      error: () => {
        console.log('Conta não foi cadastrada')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/funcionario']);
        })
      }
    })
  }
}
