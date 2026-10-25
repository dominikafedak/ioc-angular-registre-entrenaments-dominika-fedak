import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Entrenament } from '../../models/entrenament.model';
import { EtiquetaCategoria } from '../etiqueta-categoria/etiqueta-categoria.component';

@Component({
  imports: [DatePipe, EtiquetaCategoria],
  selector: 'app-targeta-entrenament',
  styleUrl: './targeta-entrenament.component.scss',
  templateUrl: './targeta-entrenament.component.html',
})

export class TargetaEntrenament {
  @Input({ required: true }) entrenament!: Entrenament;
  @Input() seleccionada = false;
  @Output() selecciona = new EventEmitter<Entrenament>();

  avisaSeleccio(): void {
    this.selecciona.emit(this.entrenament);
  }
}
