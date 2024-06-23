import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlmacenComponent } from './dashboard/almacen/almacen.component';
import { LlanteriaComponent } from './dashboard/llanteria/llanteria.component';
import { authGuard } from './auth.guard';
import { Almacen2Component } from './dashboard/almacen2/almacen2.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {path: "almacen", component: AlmacenComponent},
            {path: "llanteria", component: LlanteriaComponent},
            {path: "almacen2", component: Almacen2Component}
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
