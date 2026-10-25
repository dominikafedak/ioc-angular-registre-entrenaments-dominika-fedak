import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Entrenament } from './models/entrenament.model';
import { DADES_ENTRENAMENTS } from './mocks/dades.mock';
import { LlistaEntrenaments } from './components/llista-entrenaments/llista-entrenaments.component';
import {
  FiltresEntrenaments,
  FiltresEntrenament,
} from './components/filtres-entrenaments/filtres-entrenaments.component';

@Component({
  imports: [RouterOutlet, DatePipe, LlistaEntrenaments, FiltresEntrenaments],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('ioc-angular-registre-entrenaments-dominika-fedak');
  public nomApp = 'EntrenaLog';

  entrenaments: Entrenament[] = DADES_ENTRENAMENTS;
  entrenamentsFiltrats: Entrenament[] = DADES_ENTRENAMENTS;
  entrenamentSeleccionat: Entrenament | undefined = undefined;

  filtresActuals: FiltresEntrenament = {
    text: '',
    categoria: 'Totes',
    nivell: 'Tots',
  };

  actualitzaFiltres(filtres: FiltresEntrenament): void {
    this.filtresActuals = filtres;
    const text = filtres.text.trim().toLocaleLowerCase('ca');

    this.entrenamentsFiltrats = this.entrenaments.filter((entrenament) => {
      const categoriaCoincideix =
        filtres.categoria === 'Totes' || entrenament.categoria === filtres.categoria;

      const nivellCoincideix = filtres.nivell === 'Tots' || entrenament.nivell === filtres.nivell;

      const textCoincideix = text === '' || this.conteText(entrenament, text);

      return categoriaCoincideix && nivellCoincideix && textCoincideix;
    });

    // Si l'entrenament seleccionat queda fora del filtre, tanquem el detall
    if (
      this.entrenamentSeleccionat &&
      !this.entrenamentsFiltrats.includes(this.entrenamentSeleccionat)
    ) {
      this.entrenamentSeleccionat = undefined;
    }
  }

  seleccionaEntrenament(entrenament: Entrenament): void {
    this.entrenamentSeleccionat = entrenament;
  }

  tancaDetall(): void {
    this.entrenamentSeleccionat = undefined;
  }

  private conteText(entrenament: Entrenament, text: string): boolean {
    const contingut = `${entrenament.nom} ${entrenament.descripcio}`.toLocaleLowerCase('ca');

    return contingut.includes(text);
  }
}
