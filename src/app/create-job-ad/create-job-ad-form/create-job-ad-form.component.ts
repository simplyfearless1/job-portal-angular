import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobAdService } from 'src/app/shared/services/job-ad.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from 'src/app/shared/error-state-matcher/error-state-matcher.validator';

@Component({
  selector: 'app-create-job-ad-form',
  templateUrl: './create-job-ad-form.component.html',
  styleUrls: ['./create-job-ad-form.component.scss']
})

export class CreateJobAdFormComponent{
  jobForm: FormGroup;
  jobSkillForm: FormGroup;
  matcher = new FormErrorStateMatcher();
  jobSkills: string[] = [];
  jobStatusList = ["Published", "Draft"];

  constructor(fb: FormBuilder, private jobAdService: JobAdService, private _snackBar: MatSnackBar, private router: Router) {
    // Add Form inside of a form
    this.jobForm = fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.minLength(10), Validators.required]],
      skills: [this.jobSkills, Validators.minLength(1)],
      status: ['', Validators.required],
    });
    this.jobSkillForm = fb.group({
      jobSkill: ['', Validators.required],
    });
  }

  saveJob():void {
    if(this.jobForm.valid) {
      this.jobAdService.createJobAd(this.jobForm.value).subscribe({
        next: (response) => {
          if(response) {
            this._snackBar.open("Job created sucessfully", "Close");
            this.router.navigate(
              ["job-ads"],
              {
                replaceUrl: true
              }
            )
          }
        },
        error: (err) => {
          throw new Error(err);
        }
      })
    }
  }

  addSkill():void {
    if(this.jobSkillForm.valid && this.jobSkills.includes(this.jobSkillForm.value.jobSkill) === false) {
      this.jobSkills.push(this.jobSkillForm.value.jobSkill);
      this.jobSkillForm.reset()
    } else this.jobSkillForm.get('jobSkill')?.setErrors({ incorrect: true})
  }

  removeSkill(jobSkilltoRemove: string):void {
    const updatedSkills = this.jobSkills.filter(e => e !== jobSkilltoRemove);
    this.jobSkills = updatedSkills;
  }
}
