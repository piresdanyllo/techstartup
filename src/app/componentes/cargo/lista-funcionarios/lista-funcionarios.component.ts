import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

  filter!:any
  id_cargo: string

  modalDemitir: boolean = false
  modalPromocao: boolean = false

  nome_cargo: String = ''
  nivel_cargo: String = ''

  cargoEscolhido: any

  cargo: Cargo = {
    id_cargo: '',
    nome_cargo: '',
    nivel_cargo: ''
  }

  cargos: Cargo[] = []

  funcionario: Funcionario = {
    id_funcionario:'',
    nome_funcionario: '',
    cidade_funcionario: ''
  }

  funcionarios: Funcionario[] = []

  constructor(private funcionarioService: FuncionarioService, private router: Router, private activatedRoute: ActivatedRoute, private cargoService: CargoService) {
    this.id_cargo = this.activatedRoute.snapshot.paramMap.get('id')!
   }

  ngOnInit(): void {
    this.buscarFuncionariosDoCargo()
    this.mostrarNomeDoCargo()
    this.mostrarTodosCargos()
  }

  buscarFuncionariosDoCargo(){
    this.funcionarioService.mostrarFuncionariosDoCargo(this.id_cargo).subscribe(resultado =>{
      this.funcionarios = resultado
      console.log(this.funcionarios);

    })
  }

  mostrarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado => {
      this.cargos = resultado
    })
  }

  mostrarNomeDoCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado => {
      this.nome_cargo = resultado.nome_cargo
      this.nivel_cargo = resultado.nivel_cargo
    })
  }

  modalParaDemitir(funcionario: Funcionario){
    this.modalDemitir = true
    this.funcionario = funcionario
  }

  modalParaPromocao(funcionario: Funcionario){
    this.modalPromocao = true
    this.funcionario = funcionario
  }

  cancelarDemitir(){
    this.modalDemitir = false
  }

  cancelarPromocao(){
    this.modalPromocao = false
  }

  demitirFuncionario(){
    this.funcionarioService.demitirFuncionario(this.funcionario).subscribe({
      complete: () => {
        console.log('Funcionario demitido')
        this.modalDemitir = false
        this.buscarFuncionariosDoCargo()
      },
      error: () => {
        console.log('Funcionario não pode ser demitido')
        this.modalDemitir = false
        this.buscarFuncionariosDoCargo()
      }
    })
  }

  promoverFuncionario(){
    this.funcionarioService.promoverFuncionario(this.funcionario,this.funcionario.id_funcionario, this.cargoEscolhido).subscribe({
      complete: () => {
        console.log('Funcionario promovido')
        this.modalPromocao = false
        this.buscarFuncionariosDoCargo()
      },
      error: () => {
        console.log('Funcionario não pode ser promovido')
        this.modalPromocao = false
        this.buscarFuncionariosDoCargo()
      }
    })
  }
}
