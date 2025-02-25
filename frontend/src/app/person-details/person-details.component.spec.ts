import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsComponent } from './person-details.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('PersonDetailsComponent', () => {
  let component: PersonDetailsComponent;
  let fixture: ComponentFixture<PersonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDetailsComponent],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

