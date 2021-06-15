import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from "@angular/core";

import { Passenger } from "../models/passenger.interface";

@Component({
    selector:'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
    
})

export class PassengerDashboardComponent implements OnInit{

    passengers: Passenger[] = [{
        id: -1,
        fullname: 'n/a',
        checkedIn: false,
        checkInDate: null,
        children: null
    }];
    constructor(private passengerService: PassengerDashboardService){
        this.passengerService.getPassengers()
            .subscribe(data => this.passengers = data);
    }

    handleRemove(event: any){
        this.passengers = this.passengers.filter((passenger) => passenger.id !== event.id);
    }

    ngOnInit(){}
    
}