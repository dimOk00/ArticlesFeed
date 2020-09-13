import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Article } from './models/article';
import { Filter } from './models/filter';

@Component({
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  filter: Filter;

  constructor(private dataService: DataService) {
    this.filter = new Filter();
  }

  ngOnInit() {
    this.load();
  }
  load() {
    this.dataService.getArticles(this.filter).subscribe((data: Article[]) => this.articles = data);
  }
  delete(id: number) {
    this.dataService.deleteArticle(id).subscribe(data => this.load());
  }
  filterSearch() {
    this.load();
  }
}
