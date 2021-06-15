import { Passenger } from './../../containers/models/passenger.interface';
import { Component, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss']
})

export class PassengerDetailComponent{
    @Input()
    detail: Passenger = {
        id: -1,
        fullname: 'n/a',
        checkedIn: false,
        checkInDate: null,
        children: null
    };


    @Output()
    remove: EventEmitter<any> = new EventEmitter;

    onEdit: boolean = false;

    changeName(name: string){
        this.detail.fullname = name;
    }

    changeEdit(){
        this.onEdit = !this.onEdit;
        
    }

    onRemove(){
        this.remove.emit(this.detail);
    }

    constructor(){}
}