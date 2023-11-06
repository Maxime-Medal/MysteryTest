import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homePage/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WrongPageComponent } from './wrong-page/wrong-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FormComponent } from './formPage/form/form.component';
import { FormEditorComponent } from './formPage/form-editor/form-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ParentComponent } from './input-output/parent/parent.component';
import { InputComponent } from './input-output/input/input.component';
import { OutputComponent } from './input-output/output/output.component';
import { DisplayQuestionComponent } from './input-output/display-question/display-question.component';
import { ModalPageComponent } from './Modal-html/modal-page/modal-page.component';
import { ModalComponent } from './Modal-html/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrongPageComponent,
    NavigationBarComponent,
    FormComponent,
    FormEditorComponent,
    ParentComponent,
    OutputComponent,
    InputComponent,
    DisplayQuestionComponent,
    ModalPageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
