import { Component, OnInit } from '@angular/core';

// reference to the service which fetches data from api
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html'
})
export class EmployerComponent implements OnInit {
  // add dependency to the service in the constructor. This component must have this service available to it
  constructor(private employerService: EmployerService) { }

  employers: any

  // fetch all employers from the service
  getEmployers(): void {
    this.employerService.getEmployers().subscribe(response => {
      this.employers = response;
    })
   // console.log(this.employers);
  }

  // fetch data whenever this component is instantiated
  ngOnInit() {
    this.getEmployers();
  }
}
