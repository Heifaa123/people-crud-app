import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { UserService } from '../user.service';

export interface PeriodicElement {
id: number;
Firstname: string;
Lastname: string;
Phone: number;

}



@Component({
selector: 'app-people-list',
templateUrl: './people-list.component.html',
styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit{
  test=false
  list : PeriodicElement[] = [
    {id: 5, Firstname: 'Heifa', Lastname: 'Hraiech',Phone:27092566 },
    { id: 8, Firstname: 'Ghada', Lastname: 'Hraiech',Phone:27092566  },
    { id: 7, Firstname: 'Ghofrane', Lastname: 'Hraiech',Phone:27092566  },
    { id: 3, Firstname: 'Abderrahmen', Lastname: 'Hraiech',Phone:27092566  },
    { id: 2, Firstname: 'Rourou', Lastname: 'Hraiech',Phone:27092566  },
    { id: 4, Firstname: 'Riri', Lastname: 'Hraiech',Phone:55311780  },
    
    ];
peoplelist = ['#','id', 'Firstname', 'Lastname', 'Phone'];
peoplesList:any=[];
usersList:any=[];

constructor(private peopleService: PeopleService, private userService: UserService) {
    
}

ngOnInit(): void {
  this.getPeoples();
//  this.delete();
 }

delete(iduser:number, i:number){
 
 /// let index = this.peoplelist.indexOf(lign);
  this.list.splice(i, 1);


  this.userService.deleteUser(iduser).subscribe((peoples: any) => {
 
  }, err => {
    console.log(err)
  })

}

getPeoples() {
 this.peopleService.getPeoples().subscribe((peoples: any) => {
   console.log(peoples)
   this.peoplesList=peoples;
 }, err => {
   console.log(err);
 })
}

}