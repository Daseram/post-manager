import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  route = new BehaviorSubject('/');

  constructor() { }

  setCurrentRoute(route: string) {
    this.route.next(route);
  }
}
