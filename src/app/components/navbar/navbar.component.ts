import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public userService: UserService) { }

  logout() {
    // Call the logout method or perform any necessary logout logic
    this.userService.logout();
  }
}
