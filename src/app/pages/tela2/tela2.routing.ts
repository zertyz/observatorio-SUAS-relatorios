/**
 * Created by carlos on 07/03/17.
 */
import { Routes, RouterModule }  from '@angular/router';

import { Tela2 } from './tela2.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tela2,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
