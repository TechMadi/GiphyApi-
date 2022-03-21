import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickersRoutingModule } from './stickers-routing.module';
import { AllStickersComponent } from './all-stickers/all-stickers.component';
import { ReusableModule } from './../reusable/reusable.module';
import { ServiceModule } from '../service/service.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AllStickersComponent],
  imports: [
    CommonModule,
    StickersRoutingModule,
    ReusableModule,
    ServiceModule,
    HttpClientModule,
  ],
})
export class StickersModule {}
