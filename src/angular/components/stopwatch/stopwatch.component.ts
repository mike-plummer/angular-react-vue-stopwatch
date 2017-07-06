import { Component, OnDestroy } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subscription } from 'rxjs/Subscription';
import { Constants } from '../../../common';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnDestroy {

  time: number = 0.0;
  private subscription: Subscription;

  get isRunning(): boolean {
    return Boolean(this.subscription);
  }

  start(): void {
    if (this.isRunning) {
      return;
    }

    this.subscription = IntervalObservable.create(Constants.PERIOD).subscribe(() => this.time += Constants.INCREMENT);
  }

  stop(): void {
    if (!this.isRunning) {
      return;
    }

    this.subscription.unsubscribe();
    this.subscription = null;
  }

  reset(): void {
    if (this.isRunning) {
      this.stop();
    }
    this.time = 0.0;
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
