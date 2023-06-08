import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ProductoresComponent } from '../../productores/productores.component';
import { TicketComponent } from '../../recepcion/ticket/ticket.component';
import { DetallesComponent } from '../../recepcion/detalles/detalles.component';

import { NotificationsComponent } from '../../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'productores',        component: ProductoresComponent },
    { path: 'productores/ticket',         component: TicketComponent },
    { path: 'productores/detalles',       component: DetallesComponent }, 
    { path: 'notifications',  component: NotificationsComponent },
];
