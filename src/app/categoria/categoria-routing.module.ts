import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { CategoriaPesquisaComponent } from './categoria-pesquisa/categoria-pesquisa.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriaPesquisaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_PESQUISAR_CATEGORIA'] }
    },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class CategoriaRoutingModule { }