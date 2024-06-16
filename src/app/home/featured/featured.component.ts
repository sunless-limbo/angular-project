import { Component, Input } from '@angular/core';
import { ArticleContent } from '../../article-content';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
})
export class FeaturedComponent {
  @Input() articleContent!: ArticleContent;
}
