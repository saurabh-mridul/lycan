import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private messageSource = new BehaviorSubject(undefined);
  currentMessage$ = this.messageSource.asObservable();

  constructor() { }

  updateInteraction(message: string) {
    this.messageSource.next(message)
  }
}
