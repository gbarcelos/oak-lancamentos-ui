import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ToastyModule } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../seguranca/auth.service';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

import { CategoriaService } from '../categoria/categoria.service';
import { LancamentoService } from '../lancamento/lancamento.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { DashboardService } from './../dashboard/dashboard.service';
import { RelatoriosService } from 'app/relatorios/relatorios.service';

import { LancamentoModule } from '../lancamento/lancamento.module';
import { PessoaModule } from '../pessoa/pessoa.module';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { SegurancaModule } from '../seguranca/seguranca.module';
import { RelatoriosModule } from 'app/relatorios/relatorios.module';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    LancamentoModule,
    PessoaModule,
    DashboardModule,
    RelatoriosModule,
    SegurancaModule

  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
  LancamentoService,
  PessoaService,
  CategoriaService,
  DashboardService,
  ConfirmationService,
  RelatoriosService,
  AuthService,
  ErrorHandlerService,
  Title,
  JwtHelper,
  {provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class CoreModule { }
