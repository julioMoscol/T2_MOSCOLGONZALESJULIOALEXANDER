import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlanteriaComponent } from './llanteria.component';

describe('LlanteriaComponent', () => {
  let component: LlanteriaComponent;
  let fixture: ComponentFixture<LlanteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlanteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LlanteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
