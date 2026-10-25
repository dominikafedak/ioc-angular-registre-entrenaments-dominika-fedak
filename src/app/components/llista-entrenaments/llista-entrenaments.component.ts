import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entrenament } from '../../models/entrenament.model';
import { TargetaEntrenament } from '../targeta-entrenament/targeta-entrenament.component';

@Component({
  imports: [TargetaEntrenament],
  selector: 'app-llista-entrenaments',
  styleUrl: './llista-entrenaments.component.scss',
  templateUrl: './llista-entrenaments.component.html',
})

export class LlistaEntrenaments {
  @Input({ required: true }) entrenaments: Entrenament[] = [];
  @Input() elementSeleccionatId?: number;
  @Output() selecciona = new EventEmitter<Entrenament>();

  propagaSeleccio(entrenament: Entrenament): void {
    this.selecciona.emit(entrenament);
  }
}