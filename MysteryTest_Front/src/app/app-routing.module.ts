import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/home.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';
import { FormComponent } from './formPage/form/form.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { ModalPageComponent } from './Modal-html/modal-page/modal-page.component';
import { OutputParentComponent } from './output/output-parent/output-parent.component';
import { DisplayCounterComponent } from './counter-component/display-counter/display-counter.component';
import { DisplayAccountComponent } from './account-topUp/display-account/display-account.component';
import { DotifierComponent } from './dotifier-pipe/dotifier/dotifier.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, pathMatch: 'full' },
  { path: 'Form', component: FormComponent, pathMatch: 'full' },
  { path: 'voter-component', component: ParentComponent, pathMatch: 'full' },
  { path: 'Output', component: OutputParentComponent, pathMatch: 'full' },
  { path: 'Modal', component: ModalPageComponent, pathMatch: 'full' },
  { path: 'Counter', component: DisplayCounterComponent, pathMatch: 'full' },
  { path: 'TopUp-Account', component: DisplayAccountComponent, pathMatch: 'full' },
  { path: 'Dotifier-pipe', component: DotifierComponent, pathMatch: 'full' },
  { path: '**', component: WrongPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
