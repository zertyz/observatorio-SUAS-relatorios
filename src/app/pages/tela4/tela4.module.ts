/**
 * Created by tais on 23/02/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';

import { Tela4 } from './tela4.component';
import { routing }  from './tela4.routing';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    DropdownModule.forRoot(),
    routing,

  ],
  declarations: [

    Tela4,


  ]

})
export default class Tela4Module {}
