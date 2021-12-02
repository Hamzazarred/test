
import { Component, OnInit } from '@angular/core';
import { User } from '../modal/Modal';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './Password.component.html',
  styleUrls: ['./Password.component.scss']
})
export class PasswordComponent implements OnInit {
  progressBar = false;
  user: User = {} as User;
  username: string;
  password: string;

  constructor(private userService: UserService) {

  }

  
  ngOnInit(): void {

  }

  addUser() {
    this.progressBar = true;
    console.log(this.username)
    this.userService.addUser(this.user).subscribe(user => {
      this.user = user;
      this.userService.saveUsername(user.username);
      window.location.replace("/")
    });
  }

}
