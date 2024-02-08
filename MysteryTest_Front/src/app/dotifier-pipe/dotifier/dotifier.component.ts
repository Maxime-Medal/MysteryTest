import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'name'
})
export class Name implements PipeTransform {
  transform(value: Person, arg?: boolean) {
    return arg ? `${value.lastName} ${value.firstName}` : `${value.firstName} ${value.lastName}`;
  }
}

@Pipe({
  standalone: true,
  name: 'dotifier'
})
export class Dotifier implements PipeTransform {
  transform(value: string, arg?: string) {
    if (arg === 'same') {
      return value;

    } else {
      return value.split("").join('.').concat('.');
    }
  }
}

export type Person = {
  firstName: string,
  lastName: string
}


@Component({
  selector: 'app-dotifier',
  standalone: true,
  template: `<div id="nameTest">{{ person | name | dotifier }}</div>`,
  styleUrls: ['./dotifier.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    Name,
    Dotifier
  ]
})
export class DotifierComponent {
  public person = { firstName: 'First', lastName: 'Last' };


}


// // Angular 15.x​​​​​​‌​‌​‌​‌‌‌​​‌​​‌​​​‌‌​​‌​‌ code
// import { Component, NgModule, Pipe, PipeTransform } from '@angular/core';

// // Fix classes Name and Dotifier

// @Pipe({
//     name: 'name'
//   })
//   export class Name implements PipeTransform {
//     transform(value: Person, arg?: boolean) {
//       return arg ? `${value.lastName} ${value.firstName}` : `${value.firstName} ${value.lastName}`;
//     }
//   }
  
//   @Pipe({
//     name: 'dotifier'
//   })
//   export class Dotifier implements PipeTransform {
//     transform(value: string, arg?: string) {
//       if (arg === 'same') {
//         return value;
  
//       } else {
//         return value.split("").join('.').concat('.');
//       }
//     }
//   }
  
//   export type Person = {
//     firstName: string,
//     lastName: string
//   }
  
// // #region Preview
// @Component({
//     template: `<div id="nameTest">{{ person | name: true | dotifier: 'same' }}</div>`
// })
// export class PreviewComponent {
//   public person = {firstName: 'First', lastName:'Last'};
//  }
// // #endregion Preview

// // #region Module declaration - Do not Change
// @NgModule({
//     declarations: [PreviewComponent, Name, Dotifier],
//     entryComponents: [PreviewComponent]
// })
// export class PreviewModule { }
// // #endregion Module declaration