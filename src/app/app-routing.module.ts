import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBeneficiosFuncionariosComponent } from './componentes/beneficios/lista-beneficios-funcionarios/lista-beneficios-funcionarios.component';
import { CadastrarComponent } from './componentes/cargo/cadastrar/cadastrar.component';
import { DeletarComponent } from './componentes/cargo/deletar/deletar.component';
import { EditarComponent } from './componentes/cargo/editar/editar.component';
import { ListaFuncionariosComponent } from './componentes/cargo/lista-funcionarios/lista-funcionarios.component';
import { ListaComponent } from './componentes/cargo/lista/lista.component';
import { ListaContaComponent } from './componentes/conta/lista-conta/lista-conta.component';
import { ListaGeralComponent } from './componentes/funcionario/lista-geral/lista-geral.component';
import { ListaInativosComponent } from './componentes/funcionario/lista-inativos/lista-inativos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: "login", component:LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "cargo", component: ListaComponent},
  {path: "cargo/cadastro", component: CadastrarComponent},
  {path: "cargo/lista-funcionarios/:id", component: ListaFuncionariosComponent},
  {path: "cargo/editar/:id", component: EditarComponent},
  {path: "cargo/deletar/:id", component: DeletarComponent},
  {path: "funcionario", component: ListaGeralComponent},
  {path: "funcionario-inativo", component: ListaInativosComponent},
  {path: "contas", component: ListaContaComponent},
  {path: "beneficios-funcionario/:id", component: ListaBeneficiosFuncionariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
