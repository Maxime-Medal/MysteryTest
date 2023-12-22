import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
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
