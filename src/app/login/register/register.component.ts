import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public avatars: string[] = [];
  public form: FormGroup;
  private readonly avatarName = 'avatars';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const img = `${this.avatarName}:svg-${Math.floor(
      Math.random() * 16
    ).toFixed(0)}`;
    for (let index = 1; index <= 16; index++) {
      this.avatars.push(`avatars:svg-${index}`);
    }
    this.form = this.fb.group({
      email: [],
      username: [],
      password: [],
      repeat: [],
      avatar: [img]
    });
  }
}
