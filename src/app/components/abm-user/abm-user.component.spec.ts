import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmUserComponent } from './abm-user.component';

describe('AbmUserComponent', () => {
  let component: AbmUserComponent;
  let fixture: ComponentFixture<AbmUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
