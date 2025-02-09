import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleCreateComponent } from './article-create.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ArticleCreateComponent,
    ArticleListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ArticleListComponent },
      { path: 'create', component: ArticleCreateComponent },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
