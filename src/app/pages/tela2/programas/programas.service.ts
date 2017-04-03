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
        color:  colorHelper.hexToRgbA('#3acd52', 0.8),
      }, {
        color:  colorHelper.hexToRgbA('#cd2d26', 0.8),
      }
    ];
  }
}
