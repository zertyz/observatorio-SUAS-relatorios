import {Component} from '@angular/core';

import {CapacidadeAtendimentoService} from './capacidadeAtendimento.service';


@Component({
  selector: 'capacidade-atendimento',
  styleUrls: ['./capacidadeAtendimento.scss'],
  templateUrl: './capacidadeAtendimento.html',
})
export class CapacidadeAtendimentoTable {

  metricsTableData:Array<any>;

  constructor(private _CapacidadeAtendimentoService: CapacidadeAtendimentoService) {
    this.metricsTableData = _CapacidadeAtendimentoService.metricsTableData;
  }
}




