import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output()
  public newItemEvent = new EventEmitter<string>()


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
