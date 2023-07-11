import { Component, Input, OnInit } from '@angular/core';
import { JobAd } from 'src/app/shared/models/job-ad.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobAdService } from 'src/app/shared/services/job-ad.service';

@Component({
  selector: 'app-view-job-ads-cards',
  templateUrl: './view-job-ads-cards.component.html',
  styleUrls: ['./view-job-ads-cards.component.scss']
})
export class ViewJobAdsCardsComponent implements OnInit {
  @Input ('jobAds') jobAds: JobAd[] = [];
  @Input ('pageToAssign') pageToAssign: number = 0;
  page: number = 0;
  mybreakpoint: number = 0;

  constructor(
    private jobAdService: JobAdService, 
    private _snackBar: MatSnackBar, 
    private route: ActivatedRoute,
    private router: Router) {}
  
    
  ngOnInit(): void {
    if(window.innerWidth <= 768)
    this.mybreakpoint = 1;
    if(window.innerWidth >= 768 && window.innerHeight <= 1024) {
      this.mybreakpoint = 2;
    }
    if(window.innerWidth >= 1024) {
      this.mybreakpoint = 3;
    }

    if(this.pageToAssign != 0) {
      this.page = this.pageToAssign;
    }
  }

  handleSize(event: any) {
    if(event.innerWidth <= 768)
    this.mybreakpoint = 1;
    if(event.innerWidth >= 768 && event.innerHeight <= 1024) {
      this.mybreakpoint = 2;
    }
    if(event.innerWidth >= 1024) {
      this.mybreakpoint = 3;
    }
  }

  archiveJob(id: number): void {
    const jobStatusToSet = {status: "archived"};
    this.jobAdService.editJobAdStatus(jobStatusToSet, id).subscribe(response => {
      if(response) {
        this._snackBar.open("Job archived sucessfully", "Close");
      }
    });
  }

  publishJob(id: number): void {
    const jobStatusToSet = {status: "published"};
    this.jobAdService.editJobAdStatus(jobStatusToSet, id).subscribe(response => {
      if(response) {
        this._snackBar.open("Job published sucessfully", "Close");
      }
    });
  }

  editJob(id:number): void {
    const newQueryParams:Params = {
      id: id,
      status: null,
      q: null,
      page: null,
    }
    this.router.navigate(
      ['edit-job-ad'],
      {
        queryParams: newQueryParams,
        queryParamsHandling: 'merge',
        replaceUrl: true,
      }
    )
  }

  getPage(page: number): void {
    this.page = page;
    const newQueryParams:Params = {
      page: page,
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
}
