/**
 * Created by tais on 23/02/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';

import { Tela2 } from './tela2.component';
import { routing }  from './tela2.routing';


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

import { DadosMunicipais2 } from './dadosMunicipais2/dadosMunicipais2.component'
import { RioDeJaneiro } from './rioDeJaneiro/rioDeJaneiro.component'

import { ListaEquipamentos } from './listaEquipamentos/listaEquipamentos.component'

import { PieChart } from './pieChart/pieChart.component'
import { PieChartService } from './pieChart/pieChart.service';

import { Pse } from './pse/pse.component';
import { PseService } from './pse/pse.service';







@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    DropdownModule.forRoot(),
    routing,

  ],
  declarations: [

    Tela2,
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
    DadosMunicipais2,
    RioDeJaneiro,
    ListaEquipamentos,
    PieChart,
    Pse,

  ],
  providers: [
    PieChartService,
    PseService,
  ]

})
export default class Tela2Module {}
