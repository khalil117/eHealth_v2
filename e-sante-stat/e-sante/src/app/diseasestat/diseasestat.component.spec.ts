import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasestatComponent } from './diseasestat.component';

describe('DiseasestatComponent', () => {
  let component: DiseasestatComponent;
  let fixture: ComponentFixture<DiseasestatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasestatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
