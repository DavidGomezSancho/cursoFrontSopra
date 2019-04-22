import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpEjercicio01MemeComponent } from './cmp-ejercicio01-meme.component';

describe('CmpEjercicio01MemeComponent', () => {
  let component: CmpEjercicio01MemeComponent;
  let fixture: ComponentFixture<CmpEjercicio01MemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpEjercicio01MemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpEjercicio01MemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
