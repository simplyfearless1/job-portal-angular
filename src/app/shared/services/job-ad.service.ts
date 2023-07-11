import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobAd } from "../models/job-ad.model";

@Injectable()
export class JobAdService {
    readonly baseUrl: string = "http://localhost:3000";

    constructor(private http: HttpClient) {}

    createJobAd(data: JobAd):Observable<any> {
        return this.http.post(this.baseUrl + "/jobs", { ...data });
    }
    
    editJobAd(data: JobAd, id:string): Observable<any> {
        return this.http.patch(this.baseUrl + "/jobs/" + id, { ...data });
    }

    editJobAdStatus(data: any, id:number): Observable<any> {
        return this.http.patch(this.baseUrl + "/jobs/" + id, { ...data });
    }

    getJobAd(id?: string): Observable<any> {
        if(id !== undefined) {
            return this.http.get<JobAd>(this.baseUrl + "/jobs/" + id);
        } else return this.http.get<JobAd>(this.baseUrl + "/jobs");
    }

    filterJobAdsByTitleAndStatus(statusToFilter?: string[], titleToFilter?: string): Observable<any> {
        if (statusToFilter != null) {
            let urlParamsToQuery: string = "";
            for(let status of statusToFilter) {
                urlParamsToQuery = urlParamsToQuery + "&status=" + status;
            }
            if(titleToFilter) {
                return this.http.get(this.baseUrl + "/jobs?q=" + titleToFilter + urlParamsToQuery)
            } else return this.http.get(this.baseUrl + "/jobs?" + urlParamsToQuery);
        } else return this.http.get(this.baseUrl + "/jobs?q=" + titleToFilter)
    }
}