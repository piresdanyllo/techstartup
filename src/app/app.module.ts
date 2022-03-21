import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaComponent } from './componentes/cargo/lista/lista.component';
import { EditarComponent } from './componentes/cargo/editar/editar.component';
import { CadastrarComponent } from './componentes/cargo/cadastrar/cadastrar.component';
import { DeletarComponent } from './componentes/cargo/deletar/deletar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { ListaFuncionariosComponent } from './componentes/cargo/lista-funcionarios/lista-funcionarios.component';
import { ListaGeralComponent } from './componentes/funcionario/lista-geral/lista-geral.component';
import { ListaInativosComponent } from './componentes/funcionario/lista-inativos/lista-inativos.component';
import { ListaContaComponent } from './componentes/conta/lista-conta/lista-conta.component';
import { ListaBeneficiosFuncionariosComponent } from './componentes/beneficios/lista-beneficios-funcionarios/lista-beneficios-funcionarios.component';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { NgxCurrencyModule } from 'ngx-currency';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaComponent,
    EditarComponent,
    CadastrarComponent,
    DeletarComponent,
    LoginComponent,
    ListaFuncionariosComponent,
    ListaGeralComponent,
    ListaInativosComponent,
    ListaContaComponent,
    ListaBeneficiosFuncionariosComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule,
    Ng2SearchPipeModule
  ],
  providers: [
  {provide: LOCALE_ID, useValue: 'pt-br'},
  {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
  CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
