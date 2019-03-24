import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PistaPage } from './pista.page';

describe('PistaPage', () => {
  let component: PistaPage;
  let fixture: ComponentFixture<PistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
