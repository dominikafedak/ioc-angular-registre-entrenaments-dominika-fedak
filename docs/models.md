# Models i adaptadors

## Interfícies principals

### Entrenament (model intern)

Model utilitzat dins l'aplicació Angular:

```typescript
export type Nivell = "Principiant" | "Intermedi" | "Avançat";
export type Categoria = "Push" | "Pull" | "Legs" | "Core" | "Skills";

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
```

### EntrenamentApi (resposta API)

Format de les dades que retorna l'API:

```typescript
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
```

## Adaptadors

### adaptarEntrenamentAPI()

Transforma un entrenament de l'API al model intern:

- Converteix id i durada a number amb numeroSegur().
- Elimina espais innecessaris de nom i descripcio amb trim().
- Normalitza nivell als valors definits a Nivell.
- Normalitza categoria als valors definits a Categoria.
- Converteix data de string a Date.
- Canvia `esDestacat` → `destacat`.

### adaptarEntrenamentsApi()

Aplica `adaptarEntrenamentAPI()` a un array d'entrenaments.

### entrenamentBuit()

Retorna un element amb valors per defecte per inicialitzar formularis.

## Mapeig de camps

| Camp API     | Camp intern  | Transformació                                       |
| ------------ | ------------ | --------------------------------------------------- |
| `id`         | `id`         | `numeroSegur()` per convertir de string a number    |
| `nom`        | `nom`        | `trim()`                                            |
| `descripcio` | `descripcio` | `trim()`                                            |
| `nivell`     | `nivell`     | `trim()` + normalització a Nivell                   |
| `categoria`  | `categoria`  | `trim()` + normalització a Categoria                |
| `data`       | `data`       | Conversió de string a `Date`                        |
| `durada`     | `durada`     | `numeroSegur()` (0 si no és vàlid)                  |
| `esDestacat` | `destacat`   | Renombrat, per defecte `false`                      |

