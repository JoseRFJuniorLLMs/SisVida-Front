import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import {Covid19Component} from '../../pages/covid19/covid19.component';
import {RetinopatiaComponent} from '../../pages/retinopatia/retinopatia.component';
import {CarcinomaComponent} from '../../pages/carcinoma/carcinoma.component';
import {ResonanciaComponent} from '../../pages/resonancia/resonancia.component';
import {PneumoniaComponent} from '../../pages/pneumonia/pneumonia.component';
import {PacienteComponent} from '../../pages/paciente/paciente.component';
import {ServidorComponent} from '../../pages/servidor/servidor.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user',           component: UserComponent },
  { path: 'paciente',       component: PacienteComponent },
  { path: 'servidor',       component: ServidorComponent },
  { path: 'covid19',        component: Covid19Component },
  { path: 'retinopatia',    component: RetinopatiaComponent },
  { path: 'cacinoma',       component: CarcinomaComponent },
  { path: 'resonancia',     component: ResonanciaComponent },
  { path: 'pneumonia',      component: PneumoniaComponent },
  { path: 'icons',          component: IconsComponent }
 /*   { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }*/
];
