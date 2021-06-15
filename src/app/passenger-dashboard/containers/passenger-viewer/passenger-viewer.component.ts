import { Passenger } from './../models/passenger.interface';

import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
    //passenger: Passenger;

    constructor(private passengerService: PassengerDashboardService) {}

    ngOnInit(){
        //this.passenger = this.passengerService.getPassenger(1);
    }
}