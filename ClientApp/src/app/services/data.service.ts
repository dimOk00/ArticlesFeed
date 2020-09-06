import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable()
export class DataService {

  private url = "/api/articles";

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get(this.url);
  }

  getArticle(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createArticle(article: Article) {
    return this.http.post(this.url, article, { observe: 'response' });
  }
  updateArticle(article: Article) {

    return this.http.put(this.url, article);
  }
  deleteArticle(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
