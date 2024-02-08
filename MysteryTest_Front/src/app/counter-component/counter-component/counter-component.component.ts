import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <input id="intervalInput" #intervalInput/>
     <button id="intervalSetButton" (click)="setCounter(intervalInput.value)">Set interval</button>
     <button (click)="stopCount()">stop</button>
  `,
  styleUrls: ['./counter-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponentComponent {
  @Input()
  public message = "";

  @Output()
  public tick = new EventEmitter<string>()

  public counter;

  setCounter(value: string) {
    const count = parseInt(value)
    console.log(count);
    this.counter = setInterval(() => {
      this.tick.emit(this.message)
      console.log('tata')
    }, count);
    console.log(typeof this.counter)
  }

  stopCount() {
    clearInterval(this.counter);
  }
}
