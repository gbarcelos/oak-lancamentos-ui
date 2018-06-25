import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../../seguranca/auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Lancamento } from '../../core/model';
import { LancamentoService } from '../lancamento.service';
import { CategoriaService } from '../../categoria/categoria.service';
import { PessoaService } from '../../pessoa/pessoa.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];

  pessoas = [];

  formulario: FormGroup;

  constructor(
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.configurarFormulario();

    const codigo = this.route.snapshot.params['codigo'];

    if (codigo) {

      this.carregar(codigo);

    } else {

      this.title.setTitle('Cadastro de Lançamento');

    }
    this.carregarCategorias();
    this.carregarPessoas();
  }

  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      codigo: [],
      tipo: [ 'RECEITA', Validators.required ],
      dataVencimento: [ null, Validators.required ],
      dataPagamento: [],
      descricao: [null, [ Validators.required, Validators.minLength(5) ]],
      valor: [ null, Validators.required ],
      pessoa: this.formBuilder.group({
        codigo: [ null, Validators.required ],
        nome: []
      }),
      categoria: this.formBuilder.group({
        codigo: [ null, Validators.required ],
        nome: []
      }),
      observacao: []
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo').value);
  }

  carregar(codigo: number) {

    this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.formulario.patchValue(lancamento);
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {

    if (this.editando) {

      this.atualizar();

    } else {

      this.adicionar();

    }
  }

  atualizar() {

    this.lancamentoService.atualizar(this.formulario.value)
      .then(lancamento => {
        this.formulario.patchValue(lancamento);

        this.toasty.success('Lancamento atualizado com sucesso.');
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  adicionar() {

    this.lancamentoService.salvar(this.formulario.value)
      .then(lancamentoAdicionado => {
        this.toasty.success('Lancamento adicionado com sucesso.');

        this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCategorias() {

    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map(cat => {
          return {label: cat.nome, value: cat.codigo};
        });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    return this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map(pess => {
          return {label: pess.nome, value: pess.codigo};
        });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo() {

    this.formulario.reset();

    setTimeout(function() {
      this.lancamento = new Lancamento();
    }.bind(this), 1);

    this.router.navigate(['/lancamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Lançamento: ${this.formulario.get('descricao')}`);
  }

}
