import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {

  myForm2:FormGroup;

  constructor(private fb:FormBuilder){
    let formControls={
      firstname: new FormControl()
    }
    this.myForm2=this.fb.group(formControls);
  }

  fun(){
    console.log(this.myForm2.value);
  }
}
