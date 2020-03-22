import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstatComponent } from './appstat.component';

describe('AppstatComponent', () => {
  let component: AppstatComponent;
  let fixture: ComponentFixture<AppstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
