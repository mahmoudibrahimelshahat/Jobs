import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthCompComponent } from './forth-comp.component';

describe('ForthCompComponent', () => {
  let component: ForthCompComponent;
  let fixture: ComponentFixture<ForthCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
