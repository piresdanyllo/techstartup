import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cargos:any
  funcionariosAtivos:any
  constructor(private cargoService: CargoService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.mostrarQuantidadeDeCargos()
    this.mostrarQuantidadeDeFuncionariosAtivos()
  }

  mostrarQuantidadeDeCargos(){
    this.cargoService.mostrarQuantidadeDeCargos().subscribe(resultado => {
      this.cargos = resultado
      console.log(this.cargos)
    })
  }

  mostrarQuantidadeDeFuncionariosAtivos(){
    this.funcionarioService.mostrarQuantidadeDeFuncionariosAtivos().subscribe(resultado => {
      this.funcionariosAtivos = resultado
      console.log(this.funcionariosAtivos)
    })
  }

}
