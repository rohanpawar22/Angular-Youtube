import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrignalsComponent } from './orignals.component';

describe('OrignalsComponent', () => {
  let component: OrignalsComponent;
  let fixture: ComponentFixture<OrignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrignalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
