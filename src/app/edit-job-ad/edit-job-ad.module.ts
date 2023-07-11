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
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

import { EditJobAdComponent } from './edit-job-ad.component';
import { EditJobAdFormComponent } from './edit-job-ad-form/edit-job-ad-form.component';
import { JobAdService } from '../shared/services/job-ad.service';


@NgModule({
  declarations: [
    EditJobAdComponent,
    EditJobAdFormComponent,
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
  bootstrap: [EditJobAdComponent]
})
export class EditJobAdModule { }
