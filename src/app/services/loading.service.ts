import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public homeLoading:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
