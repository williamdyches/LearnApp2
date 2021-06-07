import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase',
  template: `<input type="text"  (keyup.enter)="logTitle()" />`,
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  title: string = "Title";
  constructor() { 
  }

  ngOnInit(): void {
  }

  logTitle(){
    console.log("it works");
  }
}
