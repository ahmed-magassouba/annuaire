import { Router } from '@angular/router';
import { Collaborator } from 'src/app/class/collaborators';
import { Component, Input, OnInit } from '@angular/core';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { AddCollaboratorComponent } from '../add-collaborator/add-collaborator.component';

@Component({
  selector: 'app-collaborator-form',
  templateUrl: './collaborator-form.component.html',
  styleUrls: ['./collaborator-form.component.css']
})
export class CollaboratorFormComponent implements OnInit {
  @Input() collaborator: Collaborator;

  /**
   * un boolean pour savoir si on est en mode ajout ou édition
   */
  isAddFormMode: boolean;

  constructor(private collaboratorService: CollaboratorService, private router: Router) {}

  collaboratorList: Collaborator[];

  ngOnInit(): void {
    // this.collaboratorList = this.collaboratorService.getcollaboratorList();
    this.collaboratorService
      .getCollaborators()
      .subscribe((response) => (this.collaboratorList = response));
   
    this.isAddFormMode = this.router.url.includes("add");
    // this.sections = this.collaboratorService.getcollaboratorSectionList();
  }




 /**
  * Ajoute un collaborateur ou le met à jour
  */
  onSubmit(): void {
    if (this.isAddFormMode) {
      this.collaboratorService
        .createCollaborator(this.collaborator)
        .subscribe((collaborator:Collaborator) => this.router.navigate(["/collaborator", collaborator.id]));
    } else {
      this.collaboratorService
        .updateCollaborator(this.collaborator)
        .subscribe(() => this.router.navigate(["/collaborator", this.collaborator.id]));
    }
  }

}
