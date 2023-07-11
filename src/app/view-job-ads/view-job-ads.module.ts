import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { ViewJobAdsComponent } from './view-job-ads.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { JobAdService } from '../shared/services/job-ad.service';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ViewJobAdsFiltersComponent } from './view-job-ads-filters/view-job-ads-filters.component';
import { ViewJobAdsCardsComponent } from './view-job-ads-cards/view-job-ads-cards.component';

@NgModule({
  declarations: [
    ViewJobAdsComponent,
    ViewJobAdsFiltersComponent,
    ViewJobAdsCardsComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatChipsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    JobAdService
  ],
  bootstrap: [ViewJobAdsComponent]
})
export class ViewJobAdsModule { }
