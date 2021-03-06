import {Component} from '@angular/core';

import {OrcamentoService} from './orcamento.service';


@Component({
  selector: 'orcamento-table',
  styleUrls: ['./orcamento.scss'],
  templateUrl: './orcamento.html',
})
export class OrcamentoTable {

  metricsTableData:Array<any>;

  constructor(private _orcamentoService: OrcamentoService) {
    this.metricsTableData = _orcamentoService.metricsTableData;
  }
}




