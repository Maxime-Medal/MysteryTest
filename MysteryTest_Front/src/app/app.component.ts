import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './homePage/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HomeComponent, NavigationBarComponent]
})
export class AppComponent {
}
