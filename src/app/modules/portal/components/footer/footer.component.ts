import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: Number = new Date().getFullYear();
}
