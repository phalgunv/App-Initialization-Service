import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('my-component1')
  }

}