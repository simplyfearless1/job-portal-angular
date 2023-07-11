import { Component, OnInit} from '@angular/core';
import { JobAd } from '../shared/models/job-ad.model';
import { JobAdService } from '../shared/services/job-ad.service';
import { JobAdSearchFilters } from '../shared/models/job-ad-search.model-filters';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-job-ads',
  templateUrl: './view-job-ads.component.html',
  styleUrls: ['./view-job-ads.component.scss']
})

export class ViewJobAdsComponent implements OnInit{
  jobAds: JobAd[] = [];
  filtersToAssign:JobAdSearchFilters = {
    q: '',
    status: [],
  };
  pageToAssign:number = 0;

  constructor(
    private jobAdService: JobAdService, 
    private route: ActivatedRoute) {}

  filterJobAds(filteredJobAds: JobAd[]) {
    this.jobAds = filteredJobAds;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const { q, status, page } = params;
      if(q !== undefined) this.filtersToAssign.q = q;
      if(status !== undefined) {
        for(let stat of status) {
          this.filtersToAssign.status.push(stat);
        }
      }
      if(page !== undefined) this.pageToAssign = page;
    })
    if(this.filtersToAssign.status.length > 0 || this.filtersToAssign.q !== "") {
      this.jobAdService.filterJobAdsByTitleAndStatus(this.filtersToAssign.status, this.filtersToAssign.q).subscribe(response=>{
        for(let job of response) {
          this.jobAds.push(job);
        }
      })
    }
    else {
      this.jobAdService.getJobAd().subscribe({
        next: (response) => {
          for(let job of response) {
            this.jobAds.push(job);
          }
        },
        error: (err) => {
          throw new Error(err);
        }
      })
    }    
  }
}
