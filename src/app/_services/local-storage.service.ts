import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  usrModel = new User();
  private readonly sidebarKey = 'sidebarVisible';
  private sidebarState: BehaviorSubject<boolean>;

  constructor() {
    const storedState = localStorage.getItem(this.sidebarKey);
    const initialState = storedState === 'true';
    this.sidebarState = new BehaviorSubject<boolean>(initialState);
  }

  setSidebarState(state: boolean): void {
    localStorage.setItem(this.sidebarKey, state.toString());
    this.sidebarState.next(state);
  }

  getSidebarState(): boolean {
    return this.sidebarState.value;
  }

  toggleSidebarState(): void {
    const newState = !this.sidebarState.value;
    this.setSidebarState(newState);
    // console.log(`Toggled sidebar state: ${newState}`);
  }

  sidebarStateChanges() {
    return this.sidebarState.asObservable();
  }
}
