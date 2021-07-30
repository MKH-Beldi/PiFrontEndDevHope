import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-dr-list',
  templateUrl: './dr-list.component.html',
  styleUrls: ['./dr-list.component.css']
})
export class DrListComponent implements OnInit {

  listDr: User[];
  searchValue: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (data: User[]) => {
        this.listDr = data.filter(
          o => o.roles.includes('ROLE_DR'));
      }
    );
  }
}
