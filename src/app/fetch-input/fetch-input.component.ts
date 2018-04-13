import { Component, OnInit } from '@angular/core';

import { UserInput } from '../UserInput';

@Component({
  selector: 'app-fetch-input',
  templateUrl: './fetch-input.component.html',
  styleUrls: ['./fetch-input.component.css']
})
export class FetchInputComponent implements OnInit {

  userinput = UserInput;

  minimumsuperannuation: number = 9.5;

  constructor() { }

  ngOnInit() {
  }

  calculateSuperFromGross(superannuation: number, grossincome: number): number {
    if(superannuation >= this.minimumsuperannuation)
    {
      return (superannuation / 100) * grossincome;
    }

    return 0;
}
}
