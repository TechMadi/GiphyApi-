import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStickersComponent } from './all-stickers/all-stickers.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all',
  },
  {
    path: 'all',
    component: AllStickersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class StickersRoutingModule {}
