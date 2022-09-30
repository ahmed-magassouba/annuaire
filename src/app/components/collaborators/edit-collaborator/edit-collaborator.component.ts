import { Collaborator } from 'src/app/class/collaborators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaboratorService } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-edit-collaborator',
  template: `
    <h2 class="center">Editer {{ collaborator?.name }}</h2>
    <p *ngIf="collaborator" class="center">
      <img src="" alt="">
    </p>
    <app-collaborator-form *ngIf="collaborator" [collaborator]="collaborator"></app-collaborator-form>
  `,
  styles: [],
})
export class EditCollaboratorComponent implements OnInit {

  collaborator:Collaborator|undefined;

  constructor(
    private collaboratorService: CollaboratorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const collaboratorId = this.route.snapshot.params['id'];
    // const collaboratorId = this.route.snapshot.paramMap.get('id');

    if(collaboratorId){
       this.collaboratorService.getCollaboratorById(+collaboratorId).subscribe((collaborator) => {
      this.collaborator = collaborator;
    });
    }else{
      this.collaborator=undefined;
    }
   
  }
}
