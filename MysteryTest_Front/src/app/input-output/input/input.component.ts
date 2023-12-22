import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    standalone: true
})
export class InputComponent {
  @Input()
  public item: string;

}
