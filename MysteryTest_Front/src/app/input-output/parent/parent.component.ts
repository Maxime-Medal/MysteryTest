import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { DisplayQuestionComponent } from '../display-question/display-question.component';
import { InputComponent } from '../input/input.component';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
    standalone: true,
    imports: [InputComponent, DisplayQuestionComponent, NgIf]
})
export class ParentComponent {
  public curentItem: string = "Brancher l'écran" // not for codinGame

  public question: string = "Est tu à l'aise avec Angular ?";
  public yesAnswer: string = "Yes";
  public noAnswer: string = "No";
  public childAnswer: boolean;


  handleVote(event: any): void {
    this.childAnswer = event;
  }
}
