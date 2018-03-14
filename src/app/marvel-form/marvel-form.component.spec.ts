import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelFormComponent } from './marvel-form.component';

describe('MarvelFormComponent', () => {
  let component: MarvelFormComponent;
  let fixture: ComponentFixture<MarvelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
