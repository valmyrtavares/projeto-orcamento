import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CheckBoxList } from './model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}
