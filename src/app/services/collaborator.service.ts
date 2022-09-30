import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Collaborator } from '../class/collaborators';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor(private http: HttpClient) { }

  private log(response:any):void{
    console.log(response);
  }

  private handleError(error: Error, errorMessage:any) {
    console.error('An error occurred', error);
    return of(errorMessage);
  }


  /**
   * Retourne la liste des collaborateurs
   * @returns 
   */
  getCollaborators(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>('api/collaborators')
      .pipe(
        tap((response)=>this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }


getCollaboratorByTable(table: string,term:string): Observable<Collaborator[]> {
  return this.http.get<Collaborator[]>(`api/collaborators`)
    .pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
}
   


/**
 * Méthode de recherche d'un collaborateur par son nom
 * @param term 
 * @returns 
 */
searchCollaborator(term: string): Observable<Collaborator[]> {
  if (term.length <= 1) {
    return of([]);
  }

  return this.http.get<Collaborator[]>(`api/collaborators/?name=${term}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, []))
  );
}


 /**
  * retourne une page avec le profil d'un collaborateur
  * @param collaboratorId 
  * @returns 
  */
   getCollaboratorById(collaboratorId: number): Observable<Collaborator | undefined> {
    return this.http.get<Collaborator>(`api/collaborators/${collaboratorId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }



  /**
   * Met a jour un les informations d'un collaborateur
   * @param collaborator
   * @returns
   */
  updateCollaborator(collaborator: Collaborator): Observable<Collaborator | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.http
      .put(`api/collaborators/${collaborator.id}`, collaborator, httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

 

  /**
   * supprime un collaborateur de la base de données
   * @param collaboratorId 
   * @returns 
   */
  deleteCollaborator(collaboratorId: number): Observable<{}> {
    return this.http.delete(`api/collaborators/${collaboratorId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }



  /**
   * Ajoute un collaborator
   * @param collaborator
   * @returns
   */
  createCollaborator(collaborator: Collaborator): Observable<Collaborator> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.http.post<Collaborator>(`api/collaborators`, collaborator, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

}