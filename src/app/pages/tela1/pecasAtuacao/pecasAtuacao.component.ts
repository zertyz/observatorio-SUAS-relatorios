import {Component} from '@angular/core';

import {PecasAtuacaoService} from './pecasAtuacao.service';


@Component({
  selector: 'pecasAtuacao-table',
  templateUrl: './pecasAtuacao.html',
})
export class PecasAtuacaoTable {

  metricsTableData:Array<any>;

  constructor(private _pecasAtuacaoService: PecasAtuacaoService) {
    this.metricsTableData = _pecasAtuacaoService.metricsTableData;
  }
}




