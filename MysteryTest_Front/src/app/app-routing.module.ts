import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/home.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';
import { FormComponent } from './formPage/form/form.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { ModalPageComponent } from './Modal-html/modal-page/modal-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, pathMatch: 'full' },
  { path: 'Form', component: FormComponent, pathMatch: 'full' },
  { path: 'Training', component: ParentComponent, pathMatch: 'full' },
  { path: 'Modal', component: ModalPageComponent, pathMatch: 'full' },
  { path: '**', component: WrongPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
