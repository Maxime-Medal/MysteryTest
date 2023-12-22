import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-wrong-page',
    templateUrl: './wrong-page.component.html',
    styleUrls: ['./wrong-page.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class WrongPageComponent {

}
