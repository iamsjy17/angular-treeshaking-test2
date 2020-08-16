import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { HomeComponent } from './components/pw-home/pw-home.component';

@NgModule({
  declarations: [Test1Component, Test2Component, Test3Component, HomeComponent],
  imports: [CommonModule, LazyRoutingModule],
  exports: [Test1Component, Test2Component, Test3Component],
})
export class LazyModule {}
