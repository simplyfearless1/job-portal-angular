import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EditJobAdModule } from './edit-job-ad/edit-job-ad.module';
import { CreateJobAdModule } from './create-job-ad/create-job-ad.module';
import { ViewJobAdsModule } from './view-job-ads/view-job-ads.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CreateJobAdModule,
    EditJobAdModule,
    ViewJobAdsModule,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
