import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListItemComponent } from './person-list-item.component';
import { provideHttpClient } from '@angular/common/http';

describe('PersonListItemComponent', () => {
  let component: PersonListItemComponent;
  let fixture: ComponentFixture<PersonListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonListItemComponent],
      providers: [
        provideHttpClient(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
