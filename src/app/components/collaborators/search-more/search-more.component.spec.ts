import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoreComponent } from './search-more.component';

describe('SearchMoreComponent', () => {
  let component: SearchMoreComponent;
  let fixture: ComponentFixture<SearchMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
