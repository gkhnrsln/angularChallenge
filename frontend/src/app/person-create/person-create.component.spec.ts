import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreateComponent } from './person-create.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('PersonCreateComponent', () => {
  let component: PersonCreateComponent;
  let fixture: ComponentFixture<PersonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonCreateComponent],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
