import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { DoctorRegisterationComponent } from '@src/app/doctor/doctor-registeration.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/auto-generated',
      pathMatch: 'full',
  },
  {
      path: 'auto-generated',
      component: AutoGeneratedComponent,
  },
  {
    path: 'doc-reg',
    component: DoctorRegisterationComponent,
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }