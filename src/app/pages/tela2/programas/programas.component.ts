/**
 * Created by tais on 10/03/17.
 */
import {Component} from '@angular/core';

import {ProgramasService} from './programas.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import 'style-loader!./programas.scss';

@Component({
  selector: 'programas',
  templateUrl: './programas.html',
})
// TODO: move easypiechart to component
export class Programas {

  public charts: Array<Object>;
  private _init = false;

  constructor(private _pieChartService: ProgramasService) {
    this.charts = this._pieChartService.getData();
  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 50,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(0, 100));
    });
  }
}
