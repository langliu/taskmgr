import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  public options: any[] = [
    {
      id: 1,
      name: 'Allen'
    },
    {
      id: 2,
      name: 'Youngor'
    },
    {
      id: 3,
      name: 'Jack'
    }
  ];

  constructor() {}

  ngOnInit() {}

  // Autocomplete显示
  displayUser(user: { id: string; name: string }): string {
    return user ? user.name : '';
  }
}
