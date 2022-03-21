import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/landing/landing.component';
import { NotFoundPageComponent } from './modules/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'stickers',
    loadChildren: () =>
      import('./modules/stickers/stickers.module').then(
        (m) => m.StickersModule
      ),
  },
  {
    path: 'gifs',
    loadChildren: () =>
      import('./modules/gifs/gifs.module').then((m) => m.GifsModule),
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
