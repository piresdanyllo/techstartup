import { Beneficios } from './../../../models/beneficios';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { BeneficiosService } from 'src/app/services/beneficios.service';

@Component({
  selector: 'app-lista-beneficios-funcionarios',
  templateUrl: './lista-beneficios-funcionarios.component.html',
  styleUrls: ['./lista-beneficios-funcionarios.component.css']
})
export class ListaBeneficiosFuncionariosComponent implements OnInit {

  filter!:any
  idFuncionario: any
  nomeFuncionario: String = ''
  codigoBeneficio: any
  nomeBeneficio: String = ''
  valorBeneficio: Number = 0

  beneficio: Beneficios = {
    nomeBeneficio: '',
    valorBeneficio: 0
  }

  beneficios: Beneficios[] = []

  modalCadastrar: boolean = false
  modalEditar: boolean = false
  modalDeletar: boolean = false

  constructor(private beneficiosService: BeneficiosService ,private funcionarioService: FuncionarioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.idFuncionario = this.activatedRoute.snapshot.paramMap.get('id')!
   }

  ngOnInit(): void {
    this.mostrarFuncionario()
    this.buscarBeneficiosDoFuncionario()
  }

  mostrarFuncionario(){
    this.funcionarioService.mostrarUmFuncionario(this.idFuncionario).subscribe(resultado => {
      this.nomeFuncionario = resultado.nome_funcionario
    })
  }

  buscarBeneficiosDoFuncionario(){
    this.beneficiosService.mostrarBeneficiosDoFuncionario(this.idFuncionario).subscribe(resultado => {
      this.beneficios = resultado
      console.log(this.beneficios)
    })
  }

  modalParaCadastrar(){
    this.modalCadastrar = true
  }

  cancelarCadastro(){
    this.modalCadastrar = false
  }

  modalParaEditar(codigo: string){
    this.modalEditar = true
    this.beneficiosService.mostrarUmBeneficio(codigo).subscribe(resultado => {
      this.beneficio = resultado
    })
  }

  cancelarEditar(){
    this.modalEditar = false
  }

  modalParaDeletar(codigo: string){
    this.modalDeletar = true
    this.beneficiosService.mostrarUmBeneficio(codigo).subscribe(resultado => {
      this.codigoBeneficio = resultado.codigo
      this.nomeBeneficio = resultado.nomeBeneficio
      this.valorBeneficio = resultado.valorBeneficio
    })
  }

  cancelarDelete(){
    this.modalDeletar = false
  }

  cadastrarBeneficio(){
    this.beneficiosService.cadastrarBeneficio(this.beneficio, this.idFuncionario).subscribe({
      complete: () => {
        console.log('Benefício cadastrado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/beneficios-funcionario/${this.idFuncionario}`]);
        })
      },
      error: () => {
        console.log('Benefício não foi cadastrado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/beneficios-funcionario/${this.idFuncionario}`]);
        })
      }
    })
  }

  editarBeneficio(){
    this.beneficiosService.editarBeneficio(this.beneficio, this.beneficio.codigo, this.idFuncionario).subscribe({
      complete: () => {
        console.log('Benefício editado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/beneficios-funcionario/${this.idFuncionario}`]);
        })
      },
      error: () => {
        console.log('Benefício não foi editado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/beneficios-funcionario/${this.idFuncionario}`]);
        })
      }
    })
  }

  deletarBeneficio(){
    this.beneficiosService.deletarBeneficio(this.codigoBeneficio).subscribe({
      complete: () => {
        console.log('Benefício editado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/beneficios-funcionario/${this.idFuncionario}`]);
        })
      },
      error: () => {
        console.log('Benefício não foi editado')
        this.modalCadastrar = false
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/beneficios-funcionario/${this.idFuncionario}`]);
        })
      }
    })
  }

}
