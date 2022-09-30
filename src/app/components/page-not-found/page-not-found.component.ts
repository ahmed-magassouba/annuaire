import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div>
    <h1>Hey, cette page n'existe pas !</h1>
    <a routerLink="/collaborator">
      Retourner à l' accueil
    </a>
  </div>
`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
