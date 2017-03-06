/**
 * Created by tais on 23/02/17.
 */
import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Tela2 } from './tela2.component';

const routes: Routes = [
  {
    path:'',
    component: Tela2,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]

  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
