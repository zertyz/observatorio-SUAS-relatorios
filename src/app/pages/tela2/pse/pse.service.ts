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
        color:  colorHelper.hexToRgbA('#25753a',0.8),
      },
      {
        color:  colorHelper.hexToRgbA('#8f2420', 0.8),
      }
    ];
  }
}
