import { Collaborator } from 'src/app/class/collaborators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-collaborator',
  template: `
  <h2 >Ajouter un nouveau collaborateur</h2>
  <app-collaborator-form [collaborator]="collaborator"></app-collaborator-form>
  `,
  styles: [],
})
export class AddCollaboratorComponent implements OnInit {

  collaborator:Collaborator;

  constructor() { }

  ngOnInit(): void {
    this.collaborator = new Collaborator();
    console.log(this.collaborator);
  }

}
