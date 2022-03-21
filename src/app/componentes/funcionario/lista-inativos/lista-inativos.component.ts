import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-inativos',
  templateUrl: './lista-inativos.component.html',
  styleUrls: ['./lista-inativos.component.css']
})
export class ListaInativosComponent implements OnInit {

  filter!: any
  funcionarios: Funcionario[] = []

  modalEditar: boolean = false
  modalDeletar: boolean = false

  funcionario: Funcionario = {
    nome_funcionario: '',
    cidade_funcionario: ''
  }

  idFuncionario: any
  nomeFuncionario: any
  cidadeFuncionario:any

  cargoEscolhido: any
  cargos: Cargo[] = []

  constructor(private funcionarioService: FuncionarioService, private router: Router, private cargoService: CargoService) { }

  ngOnInit(): void {
    this.mostrarInativos()
    this.mostrarTodosCargos()
  }

  mostrarInativos(){
    this.funcionarioService.mostrarFuncionarioInativo().subscribe(resultado => {
      this.funcionarios = resultado
      console.log(this.funcionarios);

    })
  }

  mostrarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado => {
      this.cargos = resultado
    })
  }

  modalParaEditar(id_funcionario: string){
    this.modalEditar = true
    this.funcionarioService.mostrarUmFuncionario(id_funcionario).subscribe(resultado => {
      this.funcionario = resultado
    })
  }

  cancelarEditar(){
    this.modalEditar = false
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/funcionario-inativo']);
    })
  }

  ativarFuncionario(){
    this.funcionarioService.editarFuncionario(this.funcionario, this.funcionario.id_funcionario, this.cargoEscolhido).subscribe({
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

  modalParaDeletar(funcionario: Funcionario){
    this.modalDeletar = true
    this.idFuncionario = funcionario.id_funcionario
    this.nomeFuncionario = funcionario.nome_funcionario
    this.cidadeFuncionario = funcionario.cidade_funcionario
  }

  cancelarDelete(){
    this.modalDeletar = false
  }

  deletarFuncionario(){
    this.funcionarioService.deletarFuncionario(this.idFuncionario).subscribe({
      next: () => {
        console.log("Funcionario deletado")
        this.modalDeletar = false
      },
      error: erro => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/funcionario-inativo']);
        })
        alert('O funcionário não pode ser deletado pois possui conta e beneficios associados')
       },
      complete: () => {
        console.info('Complete')
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/funcionario-inativo']);
      })
      }
    })
  }

}
