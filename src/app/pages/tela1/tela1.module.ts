import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Tela1 } from './tela1.component';
import { routing }  from './tela1.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';

import {Typography} from "./typography";

import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

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

import { ChartistJs } from './chartistJs'
import { ChartistJsService } from './chartistJs/chartistJs.service'

import { ContextualTable } from './contextualTable'

import { PecasAtuacaoTable} from './pecasAtuacao'
import { PecasAtuacaoService} from './pecasAtuacao/pecasAtuacao.service'

import { LegislacaoTable } from './legislacao'
import { LegislacaoService } from './legislacao/legislacao.service'

import { OrcamentoTable } from './orcamento'
import { OrcamentoService } from './orcamento/orcamento.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DropdownModule.forRoot(),
    routing,

  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Tela1,
    Typography,
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
    ChartistJs,
    ContextualTable,
    PecasAtuacaoTable,
    LegislacaoTable,
    OrcamentoTable,


  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService,
    ChartistJsService,
    PecasAtuacaoService,
    LegislacaoService,
    OrcamentoService,


  ]
})
export default class Tela1Module {}
