# Arquitectura técnica — Formalizate

**Estado:** propuesta inicial, no aprobada como arquitectura definitiva.

## 1. Objetivo

Diseñar una aplicación móvil mantenible, segura y escalable por etapas, con una primera versión de costo operativo mínimo.

El desarrollo debe seguir especificaciones, revisiones y pruebas. No se adoptará un flujo de generación improvisada de código.

## 2. Plataformas objetivo

- Android como primer dispositivo de prueba.
- iOS como plataforma objetivo posterior.
- La publicación en tiendas es una etapa posterior al desarrollo y las pruebas.

## 3. Tecnologías consideradas

| Componente | Propuesta | Estado |
|---|---|---|
| Aplicación móvil | React Native | Recomendada, pendiente de confirmación técnica |
| Framework móvil | Expo | Recomendado, pendiente de confirmación técnica |
| Lenguaje | TypeScript | Recomendado |
| Editor | Visual Studio Code | Herramienta sugerida |
| Control de versiones | Git y GitHub | Repositorio existente |
| Pruebas iniciales en Android | Expo Go o build de desarrollo | A validar según necesidades nativas |

La elección definitiva debe considerar requisitos de autenticación, cámara, carga de medios, notificaciones, enlaces profundos, permisos y distribución.

## 4. Principios de arquitectura

- Separar interfaz, lógica de negocio y acceso a datos.
- Evitar que las reglas de negocio queden dispersas en componentes visuales.
- Validar entradas tanto en cliente como en servidor.
- Aplicar autorización en el servidor; ocultar botones en la interfaz no es una medida de seguridad.
- Mantener trazabilidad de verificaciones, referencias y cambios sensibles.
- Diseñar el sistema para que una cuenta pueda tener varios roles.
- Separar la identidad personal de las organizaciones institucionales.
- No almacenar secretos ni credenciales en el repositorio.
- Mantener entornos separados para desarrollo, pruebas y producción.

## 5. Componentes lógicos previstos

1. Aplicación móvil.
2. API o capa de servicios de backend.
3. Base de datos relacional.
4. Almacenamiento de imágenes y videos.
5. Servicio de autenticación.
6. Servicio de notificaciones.
7. Herramientas de monitoreo y registro de errores.

La tecnología concreta de backend, base de datos, almacenamiento y autenticación todavía no está elegida.

## 6. Dominios funcionales

- Identidad y cuentas.
- Roles y permisos.
- Perfiles personales.
- Organizaciones y membresías.
- Experiencias.
- Oficios y habilidades.
- Publicaciones y archivos multimedia.
- Referencias y verificaciones.
- Formación.
- Búsquedas laborales.
- Contratación de obras y servicios.
- Postulaciones y comunicaciones.

## 7. Estrategia de implementación

- Definir requisitos y criterios de aceptación antes de implementar cada módulo.
- Implementar un dominio por vez.
- Revisar el diseño de datos antes de crear migraciones.
- Agregar pruebas unitarias para reglas de negocio y pruebas de integración para flujos críticos.
- Revisar permisos y seguridad antes de habilitar datos públicos.
- Usar pull requests o revisiones equivalentes para cambios significativos.
- Documentar decisiones técnicas relevantes.

## 8. Restricción de costos

Durante la etapa inicial se priorizarán herramientas gratuitas y ejecución local o con cuotas gratuitas. Ningún servicio pago deberá contratarse sin comparar alternativas, límites, costos futuros y aprobación explícita del responsable del proyecto.

La publicación en tiendas, servicios de infraestructura y crecimiento de almacenamiento pueden generar costos posteriores.
