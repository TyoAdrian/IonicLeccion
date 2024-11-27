import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BNS1PageRoutingModule } from './bns1-routing.module';

import { BNS1Page } from './bns1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BNS1PageRoutingModule
  ],
  declarations: [BNS1Page]
})
export class BNS1PageModule {}
