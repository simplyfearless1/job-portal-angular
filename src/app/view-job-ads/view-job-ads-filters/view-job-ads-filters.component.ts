import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobAdService } from 'src/app/shared/services/job-ad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobAd } from 'src/app/shared/models/job-ad.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrorStateMatcher } from 'src/app/shared/error-state-matcher/error-state-matcher.validator';

@Component({
  selector: 'app-view-job-ads-filters',
  templateUrl: './view-job-ads-filters.component.html',
  styleUrls: ['./view-job-ads-filters.component.scss']
})
export class ViewJobAdsFiltersComponent implements OnInit {
  @Output() filteredJobAds = new EventEmitter<JobAd[]>();
  @Input ('filtersToAssign') filtersToAssign:any = [];

  searchForm: FormGroup;
  matcher = new FormErrorStateMatcher();
  jobStatusList: string[] = ['Published', 'Draft', 'Archived'];
  jobStatus: string[] = [];
  showClearButton: boolean = false;

  constructor(
    private jobAdService: JobAdService, 
    fb: FormBuilder,  
    private route: ActivatedRoute,
    private router: Router) {
    this.searchForm = fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit() {
    if(this.filtersToAssign.q !== "" ) {
      this.searchForm.get('search')?.setValue(this.filtersToAssign.q);
      this.showClearButton = true;
    }
    if(this.filtersToAssign.status != null) {
      this.jobStatus = this.filtersToAssign.status;
    }
  }

  filterJobs() {
    const status: string[] = this.jobStatus;
    const search:string = this.searchForm.get('search')?.getRawValue()
    this.jobAdService.filterJobAdsByTitleAndStatus(status, search).subscribe({
      next: (response) => {
        this.filteredJobAds.emit(response);
      },
      error: (err) => {
        throw new Error(err);
      }
    })
    const newQueryParams = {
      q: this.searchForm.get('search')?.getRawValue(),
      status: this.jobStatus,
      page: 1
    };
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: newQueryParams,
        queryParamsHandling: 'merge'
      }
    );
  }

  searchFieldChanged(): void {
    if(this.searchForm.get('search')?.getRawValue() !=='') {
      this.showClearButton = true;
    } else this.showClearButton = false;
  }

  clearSearchField():void {
    this.searchForm.get('search')?.setValue('');
    this.searchForm.reset();
    const paramsSnapshot = {...this.route.snapshot.queryParams };
    delete paramsSnapshot['q'];
    this.router.navigate(['.'], {
        queryParams: paramsSnapshot,
    });
  }
}
