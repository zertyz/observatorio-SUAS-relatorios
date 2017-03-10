/**
 * Created by tais on 10/03/17.
 */
/**
 * Created by tais on 10/03/17.
 */
import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class ProgramasService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'UTILIZADO',
        stats: 'Verde',

      }, {
        color: pieColor,
        description: 'NÃO UTILIZADO',
        stats: 'Vermelho',

      }
    ];
  }
}
