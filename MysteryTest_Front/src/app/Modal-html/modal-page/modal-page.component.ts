import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-modal-page',
    templateUrl: './modal-page.component.html',
    styleUrls: ['./modal-page.component.css'],
    standalone: true,
    imports: [ModalComponent]
})
export class ModalPageComponent {

}
