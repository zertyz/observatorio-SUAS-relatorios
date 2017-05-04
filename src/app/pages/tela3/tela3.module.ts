/**
 * Created by tais on 23/02/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';

import { Tela3 } from './tela3.component';
import { routing }  from './tela3.routing';

import { Buttons } from "./buttons/buttons.component"
import { FlatButtons } from './buttons/components/flatButtons';
import { RaisedButtons } from './buttons/components/raisedButtons';
import { SizedButtons } from './buttons/components/sizedButtons';
import { DisabledButtons } from './buttons/components/disabledButtons';
import { IconButtons } from './buttons/components/iconButtons';
import { LargeButtons } from './buttons/components/largeButtons';
import { DropdownButtons } from './buttons/components/dropdownButtons';
import { GroupButtons } from './buttons/components/groupButtons';
import { EButtons } from './buttons/components/equipamentoButtons';
import { MunicipiosButtons } from './buttons/components/municipiosButtons'
import { AnoButtons } from './buttons/components/anoButtons';
import { InicioButton } from './buttons/components/inicioButton';
import { AjudaButton } from './buttons/components/ajudaButton';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    DropdownModule.forRoot(),
    routing,

  ],
  declarations: [

    Tela3,
    Buttons,
    FlatButtons,
    RaisedButtons,
    SizedButtons,
    DisabledButtons,
    IconButtons,
    LargeButtons,
    DropdownButtons,
    GroupButtons,
    EButtons,
    MunicipiosButtons,
    AnoButtons,
    InicioButton,
    AjudaButton,

  ]

})
export default class Tela3Module {}
