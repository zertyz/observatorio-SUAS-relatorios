import { Routes, RouterModule }  from '@angular/router';

import { Tela1 } from './tela1.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tela1,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
