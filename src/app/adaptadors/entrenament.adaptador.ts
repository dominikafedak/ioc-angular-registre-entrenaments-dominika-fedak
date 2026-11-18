import { Entrenament, EntrenamentApi, Nivell, Categoria } from '../models/entrenament.model';

// Normalitzem les categories i nivells amb els inicialment definits
const CATEGORIES_NORMALITZADES: Record<string, Categoria> = {
  push: 'Push',
  pull: 'Pull',
  legs: 'Legs',
  core: 'Core',
  skills: 'Skills',
};

function normalitzaCategoria(categoria: string | undefined): Categoria {
  const neta = (categoria ?? '').trim();
  return CATEGORIES_NORMALITZADES[neta.toLowerCase()] ?? 'Push';
}

const NIVELLS_NORMALITZATS: Record<string, Nivell> = {
  principiant: 'Principiant',
  intermedi: 'Intermedi',
  avançat: 'Avançat',
};

function normalitzaNivell(nivell: string): Nivell {
  const net = (nivell ?? '').trim();
  return NIVELLS_NORMALITZATS[net.toLocaleLowerCase()] ?? 'Principiant';
}

// Funció per convertir un valor a un número segur
function numeroSegur(valor: unknown, perDefecte = 0): number {
  const n = Number(valor);
  return Number.isFinite(n) ? n : perDefecte;
}

// Funció per adaptar un objecte EntrenamentApi (extern) a Entrenament (intern)
export function adaptarEntrenamentAPI(extern: EntrenamentApi): Entrenament {
  return {
    id: numeroSegur(extern.id),
    nom: extern.nom.trim(),
    descripcio: extern.descripcio.trim(),
    nivell: normalitzaNivell(extern.nivell),
    categoria: normalitzaCategoria(extern.categoria),
    data: new Date(extern.data),
    durada: numeroSegur(extern.durada),
    destacat: extern.esDestacat ?? false,
  };
}

// Funció per adaptar un array d'objectes EntrenamentApi a Entrenament
export function adaptarEntrenamentsAPI(apiEntrenaments: EntrenamentApi[]): Entrenament[] {
  return apiEntrenaments.map(adaptarEntrenamentAPI);
}

// Retorna un entrenament amb valors per defecte, ja que per nivell i categoria només hi ha certs valors definits
export function entrenamentBuit(): Entrenament {
  return {
    id: 0,
    nom: '',
    descripcio: '',
    nivell: 'Principiant',
    categoria: 'Push',
    data: new Date(),
    durada: 0,
    destacat: false,
  };
}
