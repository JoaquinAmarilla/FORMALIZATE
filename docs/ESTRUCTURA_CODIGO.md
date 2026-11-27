# Estructura inicial del código

**Estado:** estructura técnica inicial en una rama de trabajo. No representa todavía la arquitectura definitiva de todos los módulos.

## Tecnologías base

- React Native.
- Expo SDK 58.
- TypeScript con modo estricto.
- npm como gestor de paquetes.

## Organización

```text
FORMALIZATE/
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
├── src/
│   ├── app/
│   │   └── AppRoot.tsx
│   ├── components/
│   ├── features/
│   ├── services/
│   ├── shared/
│   └── theme/
│       └── index.ts
└── docs/
```

### Responsabilidades

- `src/app`: composición y punto de entrada de la aplicación.
- `src/components`: componentes visuales reutilizables.
- `src/features`: módulos funcionales, a crear después de definir sus requisitos.
- `src/services`: comunicación con backend e integraciones.
- `src/shared`: tipos y utilidades compartidas.
- `src/theme`: tokens visuales globales.

## Criterios

- Mantener TypeScript estricto.
- Separar interfaz, reglas de negocio y acceso a datos.
- No incorporar backend, autenticación ni librerías adicionales hasta definir sus necesidades.
- No incluir secretos ni credenciales en el repositorio.
- Mantener los módulos funcionales fuera de esta estructura base hasta que tengan criterios de aceptación.

## Compatibilidad de herramientas

La base utiliza Expo SDK 58. La documentación oficial de Expo indica React Native 0.88, React 19.3 y compatibilidad con Node.js 26 y posteriores para esta versión del SDK.

Fuentes:
- https://docs.expo.dev/versions/latest/
- https://docs.expo.dev/get-started/create-a-project/
