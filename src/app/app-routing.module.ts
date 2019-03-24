import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'audit', loadChildren: './audit/audit.module#AuditPageModule' },
  { path: 'audit/stations', loadChildren: './audit/stations/stations.module#StationsPageModule' },
  { path: 'audit/pista', loadChildren: './audit/pista/pista.module#PistaPageModule' },
  { path: 'audit/select', loadChildren: './audit/select/select.module#SelectPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
