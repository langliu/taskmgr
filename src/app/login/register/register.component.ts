import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public avatars: string[] = [];

  constructor() {}

  ngOnInit() {
    for (let index = 1; index <= 16; index++) {
      this.avatars.push(`avatars:svg-${index}`);
    }
  }
}
