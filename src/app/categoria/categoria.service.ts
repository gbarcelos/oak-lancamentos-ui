import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import "rxjs/add/operator/toPromise";

export class CategoriaFiltro{
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias';

  constructor(private http: Http) { }

  pesquisar(filtro: CategoriaFiltro): Promise<any>{

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome){
      params.set('nome', filtro.nome);
    }


    return this.http.get(`${this.categoriasUrl}?pesquisa`, {headers, search: params})
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const categorias = responseJson.content;

        const resultado = {
          categorias,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.categoriasUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
