import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SalarieService } from '../../Services/salarie.service';
import { Salarie } from 'src/app/Models/salarie';


@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent {
  get firstName() { return this.salarieForm.get('firstName'); }
  get lastName() { return this.salarieForm.get('lastName'); }
  get email() { return this.salarieForm.get('email'); }
  get birthDate() { return this.salarieForm.get('birthDate'); }


  salarieForm = this._fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    birthDate: ['', Validators.required]

  });

  constructor(
    private _fb: FormBuilder,
    private _salarieSarvice: SalarieService) { }

  onSubmit() {
    const newSalarie: Salarie = {
      prenom: this.firstName.value,
      nom: this.lastName.value,
      email: this.email.value,
      dateDeNaissance: this.birthDate.value,
      client: {
        nom: "",
        siret: "",
      }
    }
    this._salarieSarvice.sendSalarie(newSalarie).subscribe(p => {
      if (p) {
        this._salarieSarvice.getSalaries().subscribe();
      }
    })
  }
}
