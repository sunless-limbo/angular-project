import { Component, Input } from '@angular/core';
import { ArticleContent } from '../../interfaces/article-content';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
})
export class FeaturedComponent {
  @Input() articleContent!: ArticleContent;
}
