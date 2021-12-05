import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css'],
})
export class MyComponent2Component implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('my-component2');
  }
}
