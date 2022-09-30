import { Collaborator } from 'src/app/class/collaborators';
import { Router } from '@angular/router';
import { CollaboratorService } from './../../../services/collaborator.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';


@Component({
  selector: 'app-search-collaborator',
  templateUrl: './search-collaborator.component.html',
  styleUrls: ['./search-collaborator.component.css']
})
export class SearchCollaboratorComponent implements OnInit {
  
  searchTerms= new Subject<string>();
  collaborators$: Observable<Collaborator[]>;


  constructor( private collaboratorService: CollaboratorService, private router:Router) { }

  ngOnInit(): void {
    this.collaborators$ = this.searchTerms.pipe(

      // attendre 300ms de pause entre chaque requête
      debounceTime(300),

      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      
      // on retourne la liste des collaborateurs correspondant à la recherche
      switchMap((term: string) => this.collaboratorService.searchCollaborator(term)),
     
    );

  }


  search(term: string): void {
    this.searchTerms.next(term);
  }


  goToCollaboratorDetails(collaborator: Collaborator): void {
    this.router.navigate(['/collaborator',collaborator.id]);
  }


}
