import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-display-account',
  standalone: true,
  imports: [
    CommonModule,
    AccountComponent
  ],
  template: `
  <app-account></app-account>
  `,
  styleUrls: ['./display-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayAccountComponent { }
