import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobAdService } from 'src/app/shared/services/job-ad.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrorStateMatcher } from 'src/app/shared/error-state-matcher/error-state-matcher.validator';

@Component({
  selector: 'app-edit-job-ad-form',
  templateUrl: './edit-job-ad-form.component.html',
  styleUrls: ['./edit-job-ad-form.component.scss']
})
export class EditJobAdFormComponent implements OnInit {
  jobForm: FormGroup;
  jobSkillForm: FormGroup;
  matcher = new FormErrorStateMatcher();
  jobSkills: string[] = [];
  jobStatusList = ["Published", "Draft", "Archived"];
  jobStatus: string = '';
  jobIdToFetch: string = '';

  constructor(
    fb: FormBuilder, 
    private jobAdService: JobAdService,
    private _snackBar: MatSnackBar, 
    private route: ActivatedRoute,
    private router: Router) {
    this.jobForm = fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      skills: [this.jobSkills, Validators.minLength(1)],
      status: ['', Validators.required],
    });
    this.jobSkillForm = fb.group({
      jobSkill: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const { id } = params;
      if(id != "") {
        this.jobIdToFetch = id;
      }
    })
    if(this.jobIdToFetch !== undefined) {
      this.jobAdService.getJobAd(this.jobIdToFetch).subscribe((response) => {
        for(const input of Object.keys(response)) {
          this.jobForm.get(input)?.setValue(response[input as keyof typeof response]);
        }
        this.jobSkills =  this.jobForm.get('skills')?.getRawValue();
      });
    }
  }
  
  updateJob():void {
    if(this.jobForm.valid) {
      this.jobAdService.editJobAd(this.jobForm.value, this.jobIdToFetch).subscribe(response => {
        if(response) {
          this._snackBar.open("Job updated sucessfully", "Close");
          this.router.navigate(
            ["job-ads"],
            {
              replaceUrl: true
            }
          )
        }
      });
    }
  }

  addSkill():void {
    if(this.jobSkillForm.valid && this.jobSkills.includes(this.jobSkillForm.value.jobSkill) === false) {
      this.jobSkills.push(this.jobSkillForm.value.jobSkill);
      this.jobSkillForm.reset();
    } else this.jobSkillForm.get('jobSkill')?.setErrors({ incorrect: true})
  }

  removeSkill(jobSkilltoRemove: string):void {
    const updatedSkills = this.jobSkills.filter(e => e !== jobSkilltoRemove);
    this.jobSkills = updatedSkills;
  }
}
