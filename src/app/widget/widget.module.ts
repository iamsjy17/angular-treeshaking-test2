import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './components/test2/test2.component';
import { Test1Component } from './components/test1/test1.component';
import { Test3Component } from './components/test3/test3.component';

@NgModule({
  declarations: [Test1Component, Test2Component, Test3Component],
  imports: [CommonModule],
  exports: [Test1Component, Test2Component, Test3Component],
})
export class WidgetModule {}
