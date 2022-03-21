import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cargo: Cargo = {
    nome_cargo: '',
    nivel_cargo: ''
  }
  constructor(private cargoService: CargoService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarCargo(){
    this.cargoService.cadastrarCargo(this.cargo).subscribe({
      next: () => console.log("Cargo cadastrado"),
      error: erro => this.router.navigate(['/cargo']),
      complete: () => {
        console.info('Complete')
        this.router.navigate(['/cargo'])
      }
    })
  }
}
