import {Injectable} from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {filter, share} from 'rxjs/operators';
/**
 * An utility class to manage RX events
 */
@Injectable({ providedIn: 'root' })
export class EventManager {
  private observable: Observable<any>;
  private observer: Observer<any>;
  constructor() {
    this.observable = Observable.create(observer => { this.observer = observer; }).pipe(share());
  }
  /**
   * Method to broadcast the event to observer
   */
  broadcast(event) {
    if (this.observer != null) {
      this.observer.next(event);
    }
  }
  /**
   * Method to subscribe to an event with callback
   */
  subscribe(eventName, callback) {

    return this.observable
      .pipe(filter(event => event.name === eventName))
      .subscribe(callback);
  }
  /**
   * Method to unsubscribe the subscription
   */
  destroy(subscriber) {
    subscriber.unsubscribe();
  }
}
