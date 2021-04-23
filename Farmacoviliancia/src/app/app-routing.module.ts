import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmacoComponent} from './components/farmaco/farmaco.component'

const routes: Routes = [
  {
    path: 'farmaco',
    component: FarmacoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }