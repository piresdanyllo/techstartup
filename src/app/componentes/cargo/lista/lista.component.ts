import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  filter!: any
  modalCadastrar: boolean = false
  modalDeletar: boolean = false
  modalEditar: boolean = false

  idDeletar: any
  nomeCargo: String = ''
  nivelCargo: String = ''

  cargos: Cargo[] = []

  cargo: Cargo = {
    nome_cargo: '',
    nivel_cargo: ''
  }

  constructor(private cargoService: CargoService, private router: Router) {

  }

  ngOnInit(): void {
    this.mostrarCargos()
  }

  mostrarCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resposta => {
      this.cargos = resposta
    })
  }

  modalParaCadastrar(){
    this.modalCadastrar = true
  }

  modalParaDeletar(cargos: Cargo){
    this.modalDeletar = true
    this.idDeletar = cargos.id_cargo
    this.nomeCargo = cargos.nome_cargo
    this.nivelCargo = cargos.nivel_cargo
  }

  modalParaEditar(cargos: Cargo){
    this.modalEditar = true
    this.cargo = cargos
  }

  cancelarCadastro(){
    this.modalCadastrar = false
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cargo']);
    })
  }

  cancelarDelete(){
    this.modalDeletar = false
  }

  cancelarEditar(){
    this.modalEditar = false
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cargo']);
    })
  }

  cadastrarCargo(){
    this.cargoService.cadastrarCargo(this.cargo).subscribe({
      next: () => {
        console.log("Cargo cadastrado")
        this.modalCadastrar = false
      },
      error: erro => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cargo']);
    }),
      complete: () => {
        console.info('Complete')
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/cargo']);
      })
      }
    })
  }

  deletarCargo(){
    this.cargoService.excluirCargo(this.idDeletar).subscribe({
      next: () => {
        console.log("Cargo deletado")
        this.modalDeletar = false
      },
      error: erro => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cargo']);
        })
        alert('O cargo não pode ser deletado pois possui funcionários associados')
       },
      complete: () => {
        console.info('Complete')
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/cargo']);
      })
      }
    })
  }

  editarCargo(){
    this.cargoService.editarCargo(this.cargo).subscribe({
      next: () => {
        console.log("Cargo editado")
        this.modalEditar = false
      },
      error: erro => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cargo']);
    }),
      complete: () => {
        console.info('Complete')
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/cargo']);
      })
      }
    })
  }
}
