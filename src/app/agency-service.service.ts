import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AgencyServiceService {

  constructor(private http:HttpClient) { }
  
  getAgencies(){

    let data=this.http.get <any> ("https://autoteam.teamdev.tn/api/1.0.0/agencies");
      return data;
  }
}
