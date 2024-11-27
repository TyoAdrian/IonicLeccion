import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BNS1Page } from './bns1.page';

const routes: Routes = [
  {
    path: '',
    component: BNS1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BNS1PageRoutingModule {}
