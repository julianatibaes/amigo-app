import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoPageComponent } from './amigo-page.component';

describe('AmigoPageComponent', () => {
  let component: AmigoPageComponent;
  let fixture: ComponentFixture<AmigoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
