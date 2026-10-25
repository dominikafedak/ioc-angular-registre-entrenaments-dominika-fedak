import { Component, Input } from '@angular/core';
import { Categoria } from '../../models/entrenament.model';

@Component({
  imports: [],
  selector: 'app-etiqueta-categoria',
  styleUrl: './etiqueta-categoria.component.scss',
  templateUrl: './etiqueta-categoria.component.html',
})
export class EtiquetaCategoria {
  @Input({ required: true }) categoria!: Categoria;
  @Input() destacat = false;
}