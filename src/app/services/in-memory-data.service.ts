import { COLLABORATORS } from './../components/collaborators/mock-collaborator-list';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const collaborators = COLLABORATORS;
    return {collaborators};
  }
}
