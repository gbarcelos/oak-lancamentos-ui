import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from '../lancamento/lancamento.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { CategoriaModule } from '../categoria/categoria.module';
import { CategoriaService } from '../categoria/categoria.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';
import { LancamentoModule } from '../lancamento/lancamento.module';
import { PessoaModule } from '../pessoa/pessoa.module';
import { SegurancaModule } from '../seguranca/seguranca.module';
import { AuthService } from '../seguranca/auth.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    CategoriaModule,
    LancamentoModule,
    PessoaModule,
    SegurancaModule


  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
  LancamentoService,
  PessoaService,
  CategoriaService,
  ConfirmationService,
  AuthService,
  ErrorHandlerService,
  Title,
  JwtHelper,
  {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { }
