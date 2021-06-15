import { Injectable } from '@angular/core';
import { Passenger } from './containers/models/passenger.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const PASSENGER_API: string = '/assets/db.json';

@Injectable()
export class PassengerDashboardService {
    
    constructor(private http: HttpClient){
       
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get<Passenger[]>(PASSENGER_API);
    }

}