import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  host="https://autoteam.teamdev.tn/api/1.0.0";
  private getAllUsersUrl = "http//backend-people-crud-app.herokuapp.com/users";
  // "https://jsonplaceholder.typicode.com/users" 
  private getOneUserUrll="http//backend-people-crud-app.herokuapp.com/users/";
  private deleteUsersUrl = "http//backend-people-crud-app.herokuapp.com/users/";
  // "http://mobile/interventions/appointments/{id}"
  private addUserUrl="http//backend-people-crud-app.herokuapp.com/users/add";
  private updateUserUrl="http//backend-people-crud-app.herokuapp.com/users/update";
  getAllusers(){

    let data=this.http.get <any> ("https://jsonplaceholder.typicode.com/users");
      return data;
  }
  getOneUser(id:String){

    return this.http.get<any>(this.getOneUserUrll+id)

  }
  deleteUser(id:any){
    return this.http.delete<any>(this.deleteUsersUrl.replace("{id}",id));
  }
  addUser(user:User){
    return this.http.post<any>(this.addUserUrl,user);
  }
  updateUser(user:User){
    return this.http.put<any>(this.updateUserUrl,user);
  }
}
