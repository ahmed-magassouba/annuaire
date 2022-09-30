import { Collaborator } from 'src/app/class/collaborators';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-more',
  templateUrl: './search-more.component.html',
  styleUrls: ['./search-more.component.css']
})
export class SearchMoreComponent implements OnInit {

  constructor(private collaboratorService: CollaboratorService) { }
colaboratorList : Collaborator[]= [];


  ngOnInit(): void {
    this.collaboratorService.getCollaborators().subscribe((response) => {
      this.colaboratorList = response;})
      console.log(this.colaboratorList);
  }

}
