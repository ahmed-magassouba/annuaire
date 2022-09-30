import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCollaboratorComponent } from './search-collaborator.component';

describe('SearchCollaboratorComponent', () => {
  let component: SearchCollaboratorComponent;
  let fixture: ComponentFixture<SearchCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCollaboratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
