import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from '../models/article';
import { Filter } from '../models/filter';


@Injectable()
export class DataService {

  private url = "/api/articles";

  constructor(private http: HttpClient) {
  }

  getArticles(filter: Filter = null) {
    if (filter != null) {
      let params = new HttpParams().set("text", filter.text);
      return this.http.get(this.url, { params: params});
    } else {
      return this.http.get(this.url);
    }
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
