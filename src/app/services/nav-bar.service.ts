import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private showNavbarSubject = new BehaviorSubject<boolean>(true);
  public showNavbar: Observable<boolean> = this.showNavbarSubject.asObservable();

  constructor() { }

  setShowNavbar(show: boolean) {
    this.showNavbarSubject.next(show);
  }
}
