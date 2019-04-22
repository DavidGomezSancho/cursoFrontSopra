import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMiPropioTwoWayBindingComponent } from './cmp-mi-propio-two-way-binding.component';

describe('CmpMiPropioTwoWayBindingComponent', () => {
  let component: CmpMiPropioTwoWayBindingComponent;
  let fixture: ComponentFixture<CmpMiPropioTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpMiPropioTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMiPropioTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
