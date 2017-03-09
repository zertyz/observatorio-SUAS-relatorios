import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PseService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'UTILIZADO',
        stats: 'Valor',

      }, {
        color: pieColor,
        description: 'NÃO UTILIZADO',
        stats: 'Valor',

      }
    ];
  }
}
