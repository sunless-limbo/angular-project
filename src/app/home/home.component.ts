import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedComponent } from './featured/featured.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent, NavbarComponent, FeaturedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
