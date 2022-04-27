import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsejobComponent } from './browsejob.component';

describe('BrowsejobComponent', () => {
  let component: BrowsejobComponent;
  let fixture: ComponentFixture<BrowsejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
