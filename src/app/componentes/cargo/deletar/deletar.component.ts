import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

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
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado) => {
      this.cargo = resultado
      console.log(this.cargo);
    })
  }

  deletarCargo(){
    this.cargoService.excluirCargo(this.cargo.id_cargo).subscribe({
      next: () => {
        console.log("excluida")
        alert(`Cargo ${this.cargo.id_cargo} deletado com sucesso!`)
      },
      error: erro => {
        alert(`O cargo ${this.cargo.id_cargo} não pode ser deletado.`)
        this.router.navigate(['/cargo'])
      },
      complete: () => {
        console.info('Complete')
        this.router.navigate(['/cargo'])
      }
    })
  }
}
