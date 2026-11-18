export type Nivell = 'Principiant' | 'Intermedi' | 'Avançat';
export type Categoria = 'Push' | 'Pull' | 'Legs' | 'Core' | 'Skills';
export type EstatServei = 'inicial' | 'carregant' | 'exit' | 'error';

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

export interface EntrenamentApi {
    id: string; // utilitzo string perque el navegador el mostra com string i no com number
    nom: string;
    descripcio: string;
    nivell: string; // 'Principiant' | 'Intermedi' | 'Avançat'
    categoria: string; // 'Push' | 'Pull' | 'Legs' | 'Core' | 'Skills'
    data: string; 
    durada: number; // en minuts
    esDestacat?: boolean;
}

export interface EstatElements {
  estat: EstatServei;
  elements: Entrenament[];
  error?: string;
}
