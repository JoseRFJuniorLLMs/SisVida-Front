import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { Covid19Component} from '../../pages/covid19/covid19.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RetinopatiaComponent} from '../../pages/retinopatia/retinopatia.component';
import {CarcinomaComponent} from '../../pages/carcinoma/carcinoma.component';
import {ResonanciaComponent} from '../../pages/resonancia/resonancia.component';
import {PneumoniaComponent} from '../../pages/pneumonia/pneumonia.component';
import {PacienteComponent} from '../../pages/paciente/paciente.component';
import {ServidorComponent} from '../../pages/servidor/servidor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    Covid19Component,
    RetinopatiaComponent,
    CarcinomaComponent,
    ResonanciaComponent,
    PneumoniaComponent,
    PacienteComponent,
    ServidorComponent,
  ]
})

export class AdminLayoutModule {}
