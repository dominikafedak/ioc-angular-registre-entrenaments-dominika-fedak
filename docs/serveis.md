# Configuració de serveis

## API Mock (desenvolupament)

### Arrencar el servidor

```bash
npm run api
```

### Endpoints disponibles

- `GET /entrenaments` - Retorna tots els elements


### Configuració

- **Port:** 4301
- **Fitxer de dades:** `tools/api/entrenaments.json`

El filtre de text es pot aplicar al servei Angular després d'adaptar les dades. Així no depeneu d'un paràmetre de cerca específic del servidor.

## Canviar a API real

Per utilitzar una API real, modifiqueu `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.exemple.com',
  apiKey: 'LA_VOSTRA_CLAU_API' // Si cal autenticació
};
```