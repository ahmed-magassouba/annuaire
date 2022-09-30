import { Collaborator } from 'src/app/class/collaborators';
import { CollaboratorService } from './../../../services/collaborator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.css'],
})
export class ListCollaboratorComponent implements OnInit {
  collaboratorList: Collaborator[];

  constructor(
    private router: Router,
    private collaboratorService: CollaboratorService
  ) {}

  ngOnInit(): void {
    this.collaboratorService.getCollaborators().subscribe((collaborators) => {
      this.collaboratorList = collaborators;
    });
  }


  /**
   * Renvoie vers les informations detaillés du collaborateur
   * @param collaborator 
   */
  goPokemonDetail(collaborator: Collaborator): void {
    this.router.navigate(["/collaborator", collaborator.id]);
  }
}
