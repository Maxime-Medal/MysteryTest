import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CounterComponentComponent } from '../counter-component/counter-component.component';

@Component({
  selector: 'app-display-counter',
  standalone: true,
  imports: [
    CommonModule, CounterComponentComponent
  ],
  template: `
  <app-counter-component [message]="'Hello world'" (tick)=counterTick($event)></app-counter-component>
    <div>{{message}} {{counter}}</div>

  `,
  styleUrls: ['./display-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayCounterComponent implements OnInit {
  public counter: number = 0;
  public message: string;

  ngOnInit(): void {
  }

  public counterTick(message: string): void {
    this.message = message;
    this.counter++;
  }

  // for Test
  timer() {
    setInterval(() => {
      console.log("coucou");

    }, 500)
  }

}
