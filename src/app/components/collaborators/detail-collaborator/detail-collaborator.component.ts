import { Collaborator } from 'src/app/class/collaborators';
import { CollaboratorService } from './../../../services/collaborator.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-collaborator',
  templateUrl: './detail-collaborator.component.html',
  styleUrls: ['./detail-collaborator.component.css'],
})
export class DetailCollaboratorComponent implements OnInit {
  collaborator: Collaborator | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private collaboratorService: CollaboratorService
  ) {}

  ngOnInit(): void {
    const collaboratorId: string | null =
      this.route.snapshot.paramMap.get('id');
    if (collaboratorId) {
      this.collaboratorService
        .getCollaboratorById(+collaboratorId)
        .subscribe((collaborator) => {
          this.collaborator = collaborator;
        });
    }
  }


  deleteCollaborator(collaborator: Collaborator): void {
    this.collaboratorService
      .deleteCollaborator(collaborator.id)
      .subscribe(() => this.goBack());
  }

  /**
   * Retourne à la page de la liste des pokemons
   */
  goBack(): void {
    // window.history.back();
    this.router.navigate(["/collaborators"]);
  }

  goToEditCollaborator(collaborator: Collaborator): void {
    this.router.navigate(["/edit/collaborator", collaborator?.id]);
  }



}
