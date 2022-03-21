import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cargo: Cargo = {
    id_cargo: '',
    nome_cargo: '',
    nivel_cargo: ''
  }

  constructor(private cargoService: CargoService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.cargo.id_cargo = this.activatedRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.mostrarUmCargo()
  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe(resultado => {
      this.cargo = resultado
      console.log(this.cargo)
    })
  }

  editarCargo(){
    this.cargoService.editarCargo(this.cargo).subscribe({
      next: () => {
        console.log("editada")
        alert(`Turma ${this.cargo.id_cargo} editada com sucesso!`)
      },
      error: erro => {
        alert(`A turma ${this.cargo.id_cargo} não pode ser editada.`)
        this.router.navigate(['/turma/list'])
      },
      complete: () => {
        console.info('Complete')
        this.router.navigate(['/cargo'])
      }
    })
  }
}
