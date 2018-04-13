import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchInputComponent } from './fetch-input.component';

describe('FetchInputComponent', () => {
  let component: FetchInputComponent;
  let fixture: ComponentFixture<FetchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
