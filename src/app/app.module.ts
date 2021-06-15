//modules
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

//components
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { CommonModule } from '@angular/common';
import { TitlecasePipe } from './titlecase/titlecase.pipe';



@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    TitlecaseComponent,
    TitlecasePipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], 
  imports: [
    //angular modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,

    //custom modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
