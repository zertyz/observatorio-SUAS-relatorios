/**
 * Created by tais on 23/02/17.
 */
import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Tela4 } from './tela4.component';

const routes: Routes = [
  {
    path:'',
    component: Tela4,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]

  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
