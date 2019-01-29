import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { GrowlModule } from 'primeng/growl';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

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
import { MoneyHttp } from 'app/seguranca/money-http';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    GrowlModule,
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
    GrowlModule,
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
  MoneyHttp,

  ErrorHandlerService,
  Title,
  JwtHelperService,
  MessageService,
  {provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class CoreModule { }
