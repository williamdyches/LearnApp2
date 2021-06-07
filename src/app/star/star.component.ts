import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  starState: boolean;

  constructor() { 
    this.starState = false;
  }

  ngOnInit(): void {
  }

  onClick(){
    this.starState = !this.starState;
  }

}
