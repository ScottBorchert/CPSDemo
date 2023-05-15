import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-portal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: AuthService, private router: Router, public userService: UserService) { }
  
  ngOnInit(): void { }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
  
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
