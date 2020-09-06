import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { Article } from './models/article';

@Component({
  templateUrl: './article-create.component.html'
})
export class ArticleCreateComponent {

  article: Article = new Article();    // добавляемый объект
  constructor(private dataService: DataService, private router: Router) { }
  save() {
    this.dataService.createArticle(this.article).subscribe(data => this.router.navigateByUrl("/"));
  }
}
