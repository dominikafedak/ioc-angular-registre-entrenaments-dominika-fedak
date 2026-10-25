import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaEntrenament } from './targeta-entrenament.component';

describe('TargetaEntrenament', () => {
  let component: TargetaEntrenament;
  let fixture: ComponentFixture<TargetaEntrenament>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaEntrenament],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaEntrenament);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
