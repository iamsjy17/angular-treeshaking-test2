import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { HomeComponent } from './components/pw-home/pw-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
