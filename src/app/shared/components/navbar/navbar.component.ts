import {Component} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgFor } from '@angular/common';
import { NavItem } from '../../models/navItems.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,

  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    RouterModule
  ],
})
export class NavbarComponent {
  navItems: NavItem[] = [
    {
      routerLink: '/create-job-ad',
      text: 'Create Job Ad'
    },
    {
      routerLink: '/job-ads',
      text: 'View Job Ads'
    }
  ]
}
