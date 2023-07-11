import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

import { CreateJobAdComponent } from './create-job-ad.component';
import { CreateJobAdFormComponent } from './create-job-ad-form/create-job-ad-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { JobAdService } from '../shared/services/job-ad.service';

@NgModule({
  declarations: [
    CreateJobAdComponent,
    CreateJobAdFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    HttpClientModule,
    MatSnackBarModule,
    RouterLink
  ],
  providers: [
    JobAdService
  ],
  bootstrap: [CreateJobAdComponent]
})
export class CreateJobAdModule { }
