import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from "@angular/core";

import { Passenger } from "../models/passenger.interface";

@Component({
    selector:'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
    
})

export class PassengerDashboardComponent implements OnInit{

    passengers$ = this.passengerService.getPassengers();  // Read up on "Async pipes" (See template changes) You want the template to handle observables as much as possible.  They end the subscriptions when its done with them --- no memory leaks

    
    constructor(private passengerService: PassengerDashboardService){
        
    }

    handleRemove(event: any){
        // this.passengers = this.passengers.filter((passenger) => passenger.id !== event.id);
        // this should just emit an event to parent component and let the parent component do the 'removal'
        
    }

    ngOnInit(){}
    
}