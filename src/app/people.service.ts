import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService{
    private getAllUsersUrl = "https://jsonplaceholder.typicode.com/users" 
    private deleteAllUsersUrl ="" ;
  constructor(private http:HttpClient) { }
  
  getPeoples(){

    let data=this.http.get <any> (this.getAllUsersUrl);
      return data;
  }
 

}

  

  


