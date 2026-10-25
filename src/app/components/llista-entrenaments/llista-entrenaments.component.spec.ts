import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaEntrenaments } from './llista-entrenaments.component';

describe('LlistaEntrenaments', () => {
  let component: LlistaEntrenaments;
  let fixture: ComponentFixture<LlistaEntrenaments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaEntrenaments],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaEntrenaments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
