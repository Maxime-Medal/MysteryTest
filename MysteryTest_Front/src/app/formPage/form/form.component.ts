import { Component, OnInit } from '@angular/core';
import { Salarie } from 'src/app/Models/salarie';
import { SalarieService } from 'src/app/Services/salarie.service';
import { NgFor } from '@angular/common';
import { FormEditorComponent } from '../form-editor/form-editor.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    standalone: true,
    imports: [FormEditorComponent, NgFor]
})
export class FormComponent implements OnInit {
  salaries: Salarie[] = [];
  constructor(private _salarieService: SalarieService) {
  }

  ngOnInit() {
    this._salarieService.salaries$.subscribe(p => this.salaries = p);
  }
}
