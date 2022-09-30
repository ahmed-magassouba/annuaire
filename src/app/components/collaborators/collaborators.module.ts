import { GridModule } from '@progress/kendo-angular-grid';
import { CollaboratorService } from './../../services/collaborator.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCollaboratorComponent } from './list-collaborator/list-collaborator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchCollaboratorComponent } from './search-collaborator/search-collaborator.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailCollaboratorComponent } from './detail-collaborator/detail-collaborator.component';
import { LoaderComponent } from '../loader/loader.component';
import { CollaboratorSectionPipe } from './collaborator-section.pipe';
import { EditCollaboratorComponent } from './edit-collaborator/edit-collaborator.component';
import { CollaboratorFormComponent } from './collaborator-form/collaborator-form.component';
import { AddCollaboratorComponent } from './add-collaborator/add-collaborator.component';
import { AuthGuard } from 'src/app/auth.guard';
import { SearchMoreComponent } from './search-more/search-more.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const collaboratorRoutes: Routes = [
  { path: 'edit/collaborator/:id', component:EditCollaboratorComponent, canActivate: [AuthGuard] },
  { path: 'collaborators', component: ListCollaboratorComponent, canActivate: [AuthGuard] },
  { path: 'collaborator/add', component: AddCollaboratorComponent, canActivate: [AuthGuard] },
  { path: 'collaborator/:id', component: DetailCollaboratorComponent, canActivate: [AuthGuard] },
  { path: 'advancedsearch', component: SearchMoreComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    ListCollaboratorComponent,
    DetailCollaboratorComponent, 
    BorderCardDirective,
   SearchCollaboratorComponent,
   CollaboratorFormComponent,
    CollaboratorSectionPipe,
    EditCollaboratorComponent,
    AddCollaboratorComponent,
    LoaderComponent,
    SearchMoreComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(collaboratorRoutes),
  ],
  providers: [CollaboratorService],
})
export class CollaboratorsModule {}
