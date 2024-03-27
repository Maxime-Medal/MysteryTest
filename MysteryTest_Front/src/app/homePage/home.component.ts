import { Component } from '@angular/core';
import { DisplayDatalistComponent } from "../datalist-odd-component/display-datalist/display-datalist.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [DisplayDatalistComponent]
})
export class HomeComponent {

}
