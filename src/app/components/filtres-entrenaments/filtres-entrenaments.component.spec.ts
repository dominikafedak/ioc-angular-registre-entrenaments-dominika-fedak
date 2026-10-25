import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltresEntrenaments } from './filtres-entrenaments.component';

describe('FiltresEntrenaments', () => {
  let component: FiltresEntrenaments;
  let fixture: ComponentFixture<FiltresEntrenaments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltresEntrenaments],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltresEntrenaments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
