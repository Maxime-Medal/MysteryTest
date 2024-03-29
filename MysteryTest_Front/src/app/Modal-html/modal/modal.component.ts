import { Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    standalone: true
})
export class ModalComponent {

  close() {
    const dialog = document.querySelector("dialog");
    dialog.close();
  }

}
