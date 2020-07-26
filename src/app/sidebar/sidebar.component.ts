import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../pages/user/user.component';
import {PacienteComponent} from '../pages/paciente/paciente.component';
import {ServidorComponent} from '../pages/servidor/servidor.component';
import {Covid19Component} from '../pages/covid19/covid19.component';
import {RetinopatiaComponent} from '../pages/retinopatia/retinopatia.component';
import {CarcinomaComponent} from '../pages/carcinoma/carcinoma.component';
import {ResonanciaComponent} from '../pages/resonancia/resonancia.component';
import {PneumoniaComponent} from '../pages/pneumonia/pneumonia.component';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
   { path: '/dashboard',     title: 'Dashboard',         icon:'nc-ambulance',       class: '' },
   { path: '/user',         title: 'User',             icon:'nc-badge',    class: '' },
   { path: '/paciente',          title: 'Pacientes',              icon:'nc-atom',      class: '' },
   { path: '/servidor', title: 'Servidor',     icon:'nc-time-alarm',    class: '' },
   { path: '/covid19',          title: 'Covid-19',      icon:'nc-world-2',  class: '' },
   { path: '/retinopatia',         title: 'Retinopatia',        icon:'nc-tap-01',    class: '' },
   { path: '/cacinoma',    title: 'Cacinoma',        icon:'nc-touch-id', class: '' },
   { path: '/resonancia',       title: 'Resonancia',    icon:'nc-compass-05',  class: '' },
   { path: '/pneumonia',       title: 'Pneumonia',    icon:'nc-planet',  class: '' },
   { path: '/icons',       title: 'icons',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
