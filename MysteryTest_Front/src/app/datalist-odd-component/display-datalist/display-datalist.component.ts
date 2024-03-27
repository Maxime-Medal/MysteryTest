import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatalistComponent } from "../datalist/datalist.component";

@Component({
    selector: 'app-display-datalist',
    standalone: true,
    template: `
        <app-datalist></app-datalist>
      <app-datalist [inputData]="['Odd','Even']"></app-datalist>
`,
    styleUrls: ['./display-datalist.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        DatalistComponent
    ]
})
export class DisplayDatalistComponent { }
