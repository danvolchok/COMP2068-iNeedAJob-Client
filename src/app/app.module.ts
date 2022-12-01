import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployerComponent } from './components/employer/employer.component';

// our service which talks to the server API
import { EmployerService } from './services/employer.service';

// HttpClientModule is required to make HTTP requests to server API
import { HttpClientModule } from '@angular/common/http';

// forms for input binding
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployerService],
  bootstrap: [EmployerComponent]
})
export class AppModule { }
