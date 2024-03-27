import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-datalist',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div *ngIf="inputData; else noData">
    <div id="dataList" *ngFor="let data of inputData; index as i">
      <div [style.color]="data.length % 2===0 ? 'green' : 'red'">{{data}}</div>
    </div>
</div>
    <ng-template #noData>
      <div  id="noData">No data</div>
    </ng-template>
`,
  styleUrls: ['./datalist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatalistComponent { 
  @Input()
  public inputData: string[];

}
