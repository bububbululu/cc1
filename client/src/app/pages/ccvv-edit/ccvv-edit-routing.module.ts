import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcvvEditComponent } from './ccvv-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CcvvEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CcvvEditRoutingModule { }
