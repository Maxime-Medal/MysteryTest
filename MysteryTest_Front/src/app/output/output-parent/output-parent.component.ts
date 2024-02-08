import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css'],
  standalone: true,
  imports: [OutputComponent, NgFor]
})
export class OutputParentComponent {
  public items: string[] = ["Chocolat", "Chips", "Fromage"] // ne pas mettre dans le codinGame

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
