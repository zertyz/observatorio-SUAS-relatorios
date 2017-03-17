/**
 * Created by tais on 23/02/17.
 */
import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Tela3 } from './tela3.component';

const routes: Routes = [
  {
    path:'',
    component: Tela3,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]

  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
