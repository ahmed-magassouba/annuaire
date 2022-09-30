import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ` <div>En chargement...</div> `,
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
