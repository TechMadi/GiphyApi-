import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGifsComponent } from './all-gifs/all-gifs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: AllGifsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifsRoutingModule {}
