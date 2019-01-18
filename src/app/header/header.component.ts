import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute = '/';
  createRoute = 'create-post';

  constructor(private router: Router, private navService: NavbarService) { }

  ngOnInit() {
    this.navService.route.subscribe( newRoute => this.currentRoute = newRoute );
  }

  goToCreatePost() {
    this.router.navigate(['/create-post']);
  }
}
