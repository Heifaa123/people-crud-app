import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name='heifa'
  wimg=1000
msg="message"


setMessage(type:any){
  console.log(type)
  this.msg=type
}

}
