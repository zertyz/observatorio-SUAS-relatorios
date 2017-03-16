import {Component} from '@angular/core';

import {LegislacaoService} from './legislacao.service';


@Component({
  selector: 'legislacao-table',
  styleUrls: ['./legislacao.scss'],
  templateUrl: './legislacao.html',
})
export class LegislacaoTable {

  metricsTableData:Array<any>;

  constructor(private _legislacaoService: LegislacaoService) {
    this.metricsTableData = _legislacaoService.metricsTableData;
  }
}




