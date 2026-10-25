import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria, Nivell } from '../../models/entrenament.model';

export interface FiltresEntrenament {
  text: string;
  categoria: Categoria | 'Totes';
  nivell: Nivell | 'Tots';
}

@Component({
  imports: [FormsModule],
  selector: 'app-filtres-entrenaments',
  styleUrl: './filtres-entrenaments.component.scss',
  templateUrl: './filtres-entrenaments.component.html',
})
export class FiltresEntrenaments {
  @Output() filtresCanviats = new EventEmitter<FiltresEntrenament>();

  categories: Array<Categoria | 'Totes'> = ['Totes', 'Push', 'Pull', 'Core', 'Legs', 'Skills'];
  nivells: Array<Nivell | 'Tots'> = ['Tots', 'Principiant', 'Intermedi', 'Avançat'];

  filtres: FiltresEntrenament = {
    text: '',
    categoria: 'Totes',
    nivell: 'Tots',
  };

  aplicaFiltres(): void {
    this.filtresCanviats.emit({...this.filtres});
  }

  reestableixFiltres(): void {
    this.filtres = { text:'', categoria: 'Totes', nivell: 'Tots'};
    this.aplicaFiltres();
  }
}