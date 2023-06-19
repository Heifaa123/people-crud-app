import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup

  constructor(private fb: FormBuilder){

let FormControls={
  name:new FormControl('', [
    Validators.required,
    Validators.pattern("[a-z .'-]+"),
    Validators.minLength(2)
  ]),
  email:new FormControl('', [
    Validators.required,
    Validators.email
  ]),
  password:new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]),
  repassword:new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ])
}

this.registerForm=this.fb.group(FormControls)

  }

get name(){return this.registerForm.get('name')}
get email(){return this.registerForm.get('email')}
get password(){return this.registerForm.get('password')}
get repassword(){return this.registerForm.get('repassword')}

register(){
  let data = this.registerForm.value;
  let user = new User(data.name, data.email, data.password);
  console.log(user);
}
}

