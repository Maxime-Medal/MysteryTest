import { Component, OnInit } from '@angular/core';
import { Salarie } from 'src/app/Models/salarie';
import { SalarieService } from 'src/app/Services/salarie.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  salaries: Salarie[] = [];
  constructor(private _salarieService: SalarieService) {
  }

  ngOnInit() {
    this._salarieService.salaries$.subscribe(p => this.salaries = p);
  }
}
