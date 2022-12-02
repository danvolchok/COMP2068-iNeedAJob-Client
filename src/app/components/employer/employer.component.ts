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
  _id: string | undefined
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
    // create & populate a new employer object
    let employer = {
      name: this.name,
      region: this.region,
      description: this.description
    }
    // send the new employer to the service
    this.employerService.addEmployer(employer).subscribe(response => {
      
      // update list of employers
      this.getEmployers();

      // clear the form
      this.clearForm();
    })
  }

  deleteEmployer(_id: string): void {
    if (confirm('Are you sure?')) {
    this.employerService.deleteEmployer(_id).subscribe(response => {
      this.getEmployers();
      this.clearForm();
    })
  }
}

  selectEmployer(_id: string, name: string, region: string, description: string): void{
    this._id = _id
    this.name = name
    this.region = region
    this.description = description
  }

  updateEmployer(): void {
    let employer = {
      _id: this._id,
      name: this.name,
      region: this.region,
      description: this.description
    }
    this.employerService.updateEmployer(employer).subscribe(response => {
      this.getEmployers();
      this.clearForm();
    })
  }

  clearForm(): void {
    this._id = undefined
    this.name = undefined
    this.region = undefined
    this.description = undefined
  }

  // fetch data whenever this component is instantiated
  ngOnInit() {
    this.getEmployers();
  }
}
