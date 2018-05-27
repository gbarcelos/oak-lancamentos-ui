import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CategoriaPesquisaComponent } from "./categoria-pesquisa/categoria-pesquisa.component";

const routes: Routes = [
    { path: 'categorias', component: CategoriaPesquisaComponent },
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