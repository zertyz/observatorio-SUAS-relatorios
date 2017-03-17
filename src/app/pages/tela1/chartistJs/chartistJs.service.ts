import {Injectable} from '@angular/core';

import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class ChartistJsService {

  private _data = {
    simpleLineOptions: {
      color: this._baConfig.get().colors.defaultText,
      fullWidth: true,
      height: '200px',
      chartPadding: {
        right: 40
      }
    },
    simpleLineData: {
      labels: ['0','1', '2', '3', '4', '5','6','7'],
      series: [
        [100,100,140,60,50,60,92,68],
        [150,130,110,111,90,90,100,33],
        [90, 101, 92, 60, 70,71,80,94],

      ]
    }
  };

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  public getAll() {
    return this._data;
  }

  public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  }
}
