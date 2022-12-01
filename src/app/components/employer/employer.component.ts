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
  name: string | undefined
  region: string | undefined
  description: string | undefined

  // fetch all employers from the service
  getEmployers(): void {
    this.employerService.getEmployers().subscribe(response => {
      this.employers = response;
    })
   // console.log(this.employers);
  }

  // create a new employer to be sent to the service
  addEmployer(): void {
    let employer = {
      name: this.name,
      region: this.region,
      description: this.description
    }
    this.employerService.addEmployer(employer).subscribe(response => {
      // update list of employers
      this.getEmployers();

      // clear the form
      this.clearForm();
    })
  }

  clearForm(): void {
    this.name = undefined
    this.region = undefined
    this.description = undefined
  }

  // fetch data whenever this component is instantiated
  ngOnInit() {
    this.getEmployers();
  }
}
