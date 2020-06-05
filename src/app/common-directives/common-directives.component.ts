import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-common-directives',
  templateUrl: './common-directives.component.html',
  styleUrls: [
    './common-directives.component.scss',
    '../app.component.scss']
})
export class CommonDirectivesComponent implements OnInit {
  users: User[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.users.push(new User('Pit', 25));
    this.users.push(new User('Bob', 33));
    console.log(this.users);
  }

}
