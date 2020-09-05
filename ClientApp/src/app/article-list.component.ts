import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Article } from './models/article';

@Component({
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.load();
  }
  load() {
    this.dataService.getArticles().subscribe((data: Article[]) => this.articles = data);
  }
  delete(id: number) {
    this.dataService.deleteArticle(id).subscribe(data => this.load());
  }
}
