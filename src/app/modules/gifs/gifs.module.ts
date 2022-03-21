import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { AllGifsComponent } from './all-gifs/all-gifs.component';
import { ServiceModule } from '../service/service.module';
import { HttpClientModule } from '@angular/common/http';
import { ReusableModule } from './../reusable/reusable.module';

@NgModule({
  declarations: [AllGifsComponent],
  imports: [
    CommonModule,
    GifsRoutingModule,
    ServiceModule,
    HttpClientModule,
    ReusableModule,
  ],
})
export class GifsModule {}
