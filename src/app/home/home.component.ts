import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FeaturedComponent } from './featured/featured.component';
import { ArticleContent } from '../article-content';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IntroComponent,
    NavbarComponent,
    FeaturedComponent,
    WeatherComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  articleContentList: ArticleContent[] = [
    {
      id: 0,
      image: 'images/code.jpg',
      topic: 'Tech',
      time: '13-1-2024',
      title: 'Programming Languages',
      summary:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.',
    },
    {
      id: 1,
      image: 'images/moon.jpg',
      topic: 'Space',
      time: '13-1-2024',
      title: 'Moon Facts',
      summary:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.',
    },
  ];
}
