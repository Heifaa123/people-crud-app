import { Component, OnInit } from '@angular/core';
import { AgencyServiceService } from '../agency-service.service';

@Component({
  selector: 'app-agency-service',
  templateUrl: './agency-service.component.html',
  styleUrls: ['./agency-service.component.css']
})
export class AgencyServiceComponent implements OnInit {
  agenciesList:any=[];
  usersList:any=[];


  constructor(private agencyServices:AgencyServiceService) {
    
   }
   ngOnInit(): void {
    this.getagencies()

  }


  getagencies() {
    this.agencyServices.getAgencies().subscribe((agencies: any) => {
      console.log(agencies)
      this.agenciesList=agencies;
    })
  }

}
