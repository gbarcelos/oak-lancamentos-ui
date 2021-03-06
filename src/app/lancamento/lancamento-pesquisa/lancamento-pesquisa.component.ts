import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit{

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private auth: AuthService,
    ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de Lançamentos');
  }

  pesquisar(pagina = 0) {

    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmacaoExcluir(lancamento: any) {

    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });

  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
        this.messageService.add({ severity: 'success', detail: 'Lancamento excluído com sucesso' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}