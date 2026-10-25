export type Nivell = 'Principiant' | 'Intermedi' | 'Avançat';
export type Categoria = 'Push' | 'Pull' | 'Legs' | 'Core' | 'Skills';

export interface Entrenament {
    id: number;
    nom: string;
    descripcio: string;
    nivell: Nivell;
    categoria: Categoria;
    data: Date;
    durada: number; // en minuts
    destacat?: boolean;
}
