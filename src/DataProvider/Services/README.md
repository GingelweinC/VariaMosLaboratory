# DataProvider Services - VariaMosLaboratory 📡

Ce dossier contient tous les services de communication avec le backend pour VariaMosLaboratory.

## Architecture 🏗️

```
Frontend (React)
    ↓
DataProvider Services
    ↓
Backend API (Axios Clients)
    ↓
Database / External Services
```

## Services Actuels ✅

### Services Communs (Partagés avec VariaMosPLE/VariaMosLanguages)
- **`authService.ts`** — Authentification utilisateur (login, logout, session)
- **`configService.ts`** — Configuration application basée sur l'environnement
- **`externalFunctionService.tsx`** — Appels aux services externes (simulation, analyse, validation)
- **`restrictionService.tsx`** — Validations métier (structure produit line, config simulation)
- **`visitsService.ts`** — Tracking analytique (accès expériences, durées simulations)

### Services Spécifiques VariaMosLaboratory
- **`experimentService.ts`** — CRUD expériences (create, read, update, delete)
- **`simulationService.ts`** — Exécution simulations (start, pause, resume, stop, status)
- **`resultsService.ts`** — Résultats et analyse (métriques, rapports, export, comparaison)

## Évolution Future 

### À implémenter 

1. **`collaborationService.ts`** — Collaboration temps réel (si requis)
   - Synchronisation des modifications d'expériences
   - Awareness (qui travaille sur quelle expérience)
   - Merge strategies pour conflits

2. **`experimentPersistenceService.ts`** — Sauvegarde incremental
   - Versioning des expériences
   - Sauvegarde locale (offline-first)
   - Sync automatique quand online

3. **WebSocket Support** — Pour updates temps réel
   - Streaming résultats simulation
   - Real-time metrics updates
   - Live collaboration events

### Raison du délai
- La collaboration sera ajoutée **après** validation du MVP
- Basée sur pattern VariaMosPLE (collab/)
- Requiert architecture backend WebSocket

## Clients Axios Utilisés 🔌

```typescript
// À configurer dans src/Infraestructure/AxiosConfig.ts
export const AUTH_CLIENT = axios.create({ ... });
export const EXPERIMENTS_CLIENT = axios.create({ ... });
export const SIMULATIONS_CLIENT = axios.create({ ... });
export const RESULTS_CLIENT = axios.create({ ... });
export const EXTERNAL_CLIENT = axios.create({ ... });
export const ANALYTICS_CLIENT = axios.create({ ... });
```

## Convention de Nommage 📝

- **Methods qui retournent Promise** → `async/await`
- **Error handling** → try/catch avec console.error
- **Type des données** → `any` (à typer avec les entités Domain)
- **Suffixe Service** → Pour toutes les classes (`AuthService`, `ExperimentService`)

## Exemple d'Utilisation 💡

```tsx
// Dans ProjectService ou un composant
import experimentService from "../../DataProvider/Services/experimentService";

// Récupérer les expériences
const experiments = await experimentService.getExperimentsByUser(userId);

// Créer une expérience
const newExp = await experimentService.createExperiment({
  name: "My Experiment",
  productLineId: "pl-123",
  configuration: { ... }
});

// Lancer une simulation
const run = await simulationService.startSimulation(experimentId, config);
```

## Notes 📌

- Services utilisent `@variamosple/variamos-components` pour types communs
- Pattern ServiceClass (singleton) pour chaque service
- Clients Axios factorisés pour DRY (Dont Repeat Yourself)
- Collaboration marquée comme "future" pour respecter MVP
