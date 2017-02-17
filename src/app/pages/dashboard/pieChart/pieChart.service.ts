import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: '',
        stats: '',
        icon: '-',
      }, {
        color: pieColor,
        description: '',
        stats: '',
        icon: '',
      }, {
        color: pieColor,
        description: '',
        stats: '',
        icon: '',
      }, {
        color: pieColor,
        description: '',
        stats: '',
        icon: '',
      }
    ];
  }
}
