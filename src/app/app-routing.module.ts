import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditJobAdComponent } from './edit-job-ad/edit-job-ad.component';
import { CreateJobAdComponent } from './create-job-ad/create-job-ad.component';
import { ViewJobAdsComponent } from './view-job-ads/view-job-ads.component';

const routes: Routes = [
  {
    path: "create-job-ad",
    component: CreateJobAdComponent
  },
  {
    path: "edit-job-ad",
    component: EditJobAdComponent
  },
  {
    path: "job-ads",
    component: ViewJobAdsComponent
  },
  {
    path: '**',
    component: ViewJobAdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
