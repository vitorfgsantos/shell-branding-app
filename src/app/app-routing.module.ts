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
  {
    path: 'list/:id',
    loadChildren: './list/details/details.module#DetailsPageModule'
  },
  { path: 'audit', loadChildren: './audit/audit.module#AuditPageModule' },
  { path: 'audit/stations/:id', loadChildren: './audit/stations/stations.module#StationsPageModule' },
  { path: 'audit/pista', loadChildren: './audit/pista/pista.module#PistaPageModule' },
  { path: 'audit/stations', loadChildren: './audit/stations/stations.module#StationsPageModule' },
  { path: 'audit/pista/:id', loadChildren: './audit/pista/pista.module#PistaPageModule' },
  { path: 'audit/pista/take-photo', loadChildren: './audit/pista/take-photo/take-photo.module#TakePhotoPageModule' },
  { path: 'audit/select', loadChildren: './audit/select/select.module#SelectPageModule' },
  { path: 'manuals', loadChildren: './manuals/manuals.module#ManualsPageModule' },
  { path: 'stations', loadChildren: './stations/stations.module#StationsPageModule' },
  { path: 'stations/:id', loadChildren: './stations/details/details.module#DetailsPageModule' },
  { path: 'stations/equipments/:id', loadChildren: './stations/details/equipments/equipments.module#EquipmentsPageModule' },
  { path: 'rewards', loadChildren: './rewards/rewards.module#RewardsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
