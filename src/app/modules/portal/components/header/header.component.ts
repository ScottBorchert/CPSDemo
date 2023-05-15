import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-portal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCollapsed = true;
  constructor(private auth: AuthService, private router: Router) { }
  
  ngOnInit(): void { }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
  

}
