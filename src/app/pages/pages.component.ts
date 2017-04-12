import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: ` 
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    
   
    <footer class="al-footer clearfix">
      <div class="al-footer-right"> 2017 &copy; Todos os direitos reservados </div>
      <div class="al-footer-main clearfix">
        <div class="al-copy"> <a href="http://www.mprj.mp.br/"> MINISTÉRIO PÚBLICO DO ESTADO DO RIO DE JANEIRO</a> </div>
        <ul class="al-share clearfix">
          <li><a href="https://pt-br.facebook.com/MPRJ.Oficial" target="_blank"> <i class="socicon socicon-facebook"></i></a></li>
          <li><a href="https://twitter.com/mp_rj" target="_blank"> <i class="socicon socicon-twitter"></i></a></li>
          <li><a href="https://plus.google.com/106370263355225435139" target="_blank"> <i class="socicon socicon-google"></i></a></li>
          <li><a href="http://www.mprj.mp.br/comunicacao/ouvidoria" target="_blank"> <i class="fa fa fa-bullhorn"> </i></a></li>
        </ul>
      </div>
    </footer>

    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
