import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonWithDjangoComponent } from './python-with-django.component';

describe('PythonWithDjangoComponent', () => {
  let component: PythonWithDjangoComponent;
  let fixture: ComponentFixture<PythonWithDjangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonWithDjangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonWithDjangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
