import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { MoneyHttp } from 'app/seguranca/money-http';

import { PessoaService } from '../pessoa/pessoa.service';
import { LancamentoService } from '../lancamento/lancamento.service';
import { CategoriaService } from '../categoria/categoria.service';
import { DashboardService } from './../dashboard/dashboard.service';
import { RelatoriosService } from 'app/relatorios/relatorios.service';

import { PessoaModule } from '../pessoa/pessoa.module';
import { LancamentoModule } from '../lancamento/lancamento.module';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { SegurancaModule } from '../seguranca/seguranca.module';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,

    LancamentoModule,
    PessoaModule,
    DashboardModule,
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
  RelatoriosService,
  ErrorHandlerService,
  AuthService,
  MoneyHttp,

  ConfirmationService,
  MessageService,
  JwtHelperService,
  Title,
  {provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class CoreModule { }
