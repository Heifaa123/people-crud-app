import { Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  usersList:any=[];

  myForm:FormGroup;

  constructor(private fb:FormBuilder){

    let formControls={
      firstname:new FormControl('test', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])
      
    }
    this.myForm = this.fb.group(formControls);
  }
  get firstname(){
    return this.myForm.get('firstname');
  }

  saveUser(){
    console.log(this.myForm.value);
  }
  

 




}



// // name="doudi";

  // // imageUrl = "assets/images/spring.webp";

  // // // bookslist=['hi','hello','Guten morgen'];

  // // myCondition = true;

 

  // constructor(private userService: UserService) {
    
  //  }
  // ngOnInit(): void {
  //   this.getusers()

  // }


  // // getusers() {
  // //   this.userService.getAllusers().subscribe((users: any) => {
  // //     console.log(users)
  // //     this.usersList=users;
  // //   }, err => {
  // //     console.log(err)
  // //   })
  // // }



  // // hello(myname: String) {
  // //   alert('Hello' + myname);
  // // }
