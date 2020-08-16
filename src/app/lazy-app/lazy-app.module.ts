import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyAppRoutingModule } from './lazy-app-routing.module';
import { HomeComponent } from './components/pw-home/pw-home.component';
import { LazyModule } from '../lazy/lazy.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LazyAppRoutingModule, LazyModule],
})
export class LazyAppModule {}
