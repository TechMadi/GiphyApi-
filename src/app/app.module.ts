import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './modules/landing/landing.component';
import { NotFoundPageComponent } from './modules/not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
