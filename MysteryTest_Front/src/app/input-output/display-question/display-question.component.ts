import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent {
  @Input()
  public question: string;
  @Input()
  public yesAnswer: string;
  @Input()
  public noAnswer: string;
  @Output()
  public output = new EventEmitter<boolean>();

  public vote(vote: boolean): void {
    this.output.emit(vote);
  }
}
