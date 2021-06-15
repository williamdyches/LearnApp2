import { Passenger } from './../../containers/models/passenger.interface';
import { Component, Input } from "@angular/core";


@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html'

})

export class PassengerCountComponent {
    @Input()
    items: Passenger[] = [{
        id: -1,
        fullname: 'n/a',
        checkedIn: false,
        checkInDate: null,
        children: null
    }];

    constructor(){}
    CheckedInCount(){
        if (!this.items) return;
        return this.items.filter((value) => value.checkedIn).length;
    }

}