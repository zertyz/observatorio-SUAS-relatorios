import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'popular-app',
  encapsulation: ViewEncapsulation.None,
  styles: ['./popularApp.scss'],
  template: './popularApp.html'
})
export class PopularApp {

  ngOnInit() {
  }
}
