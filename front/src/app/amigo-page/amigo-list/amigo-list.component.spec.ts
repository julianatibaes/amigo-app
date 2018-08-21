import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoListComponent } from './amigo-list.component';

describe('AmigoListComponent', () => {
  let component: AmigoListComponent;
  let fixture: ComponentFixture<AmigoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
