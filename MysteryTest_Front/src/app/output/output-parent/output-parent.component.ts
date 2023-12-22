import { Component } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent {
  public items: string[] = ["Chocolat", "Chips", "Fromage"] // ne pas mettre dans le codinGame
  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
