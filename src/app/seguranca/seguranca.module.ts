import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JwtModule } from '@auth0/angular-jwt';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { SegurancaRoutingModule } from './seguranca-routing.module';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),

    InputTextModule,
    ButtonModule,

    HttpClientModule,

    SegurancaRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    LogoutService
  ]
})
export class SegurancaModule { }
