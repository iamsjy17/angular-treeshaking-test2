import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lazyapp',
  },
  {
    path: '',
    children: [
      {
        path: 'otherlazy',
        loadChildren: () =>
          import('./lazy/lazy.module').then((mod) => mod.LazyModule),
      },
      {
        path: 'lazyapp',
        loadChildren: () =>
          import('./lazy-app/lazy-app.module').then((mod) => mod.LazyAppModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
