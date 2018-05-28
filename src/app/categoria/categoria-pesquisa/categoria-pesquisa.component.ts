import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

import { CategoriaFiltro, CategoriaService } from '../categoria.service';
import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.css']
})
export class CategoriaPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CategoriaFiltro();
  categorias = [];
  @ViewChild('tabela') grid;

  constructor(
    private categoriaService: CategoriaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService
  ){ }

  ngOnInit() {
  }

  pesquisar(pagina = 0){

    this.filtro.pagina = pagina;

    this.categoriaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.categorias = resultado.categorias;
        console.log(this.categorias);
      });
  }

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}
