import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  public homeLoading:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public homeSubMenu:BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor() { }
}
