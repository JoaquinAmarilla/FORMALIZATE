# Formalizate

Plataforma móvil orientada a hacer visible y verificable la capacidad de trabajo de las personas, democratizando el acceso a oportunidades laborales mediante la conexión directa entre trabajadores, contratistas y contratantes.

> **Principio rector:** *El trabajador no tiene que demostrar que tuvo un empleo formal; tiene que poder demostrar que sabe trabajar.*

---

## Propuesta de valor

El mercado laboral tradicional suele excluir a personas con trayectorias informales, independientes o mixtas por falta de certificaciones formales. **Formalizate** resuelve esta brecha permitiendo construir una identidad profesional basada en evidencia real: habilidades comprobables, trabajos realizados, formación práctica y referencias verificables.

## Roles del ecosistema

El sistema opera bajo un modelo de **identidad única multi-rol**: un mismo usuario puede operar con uno o varios perfiles desde una sola cuenta según su necesidad del momento.

| Rol | Objetivo principal | Acciones clave |
| :--- | :--- | :--- |
| **Trabajador** | Buscar empleo y validar su oficio. | Construye su perfil profesional, carga evidencia de trabajos, recibe referencias y se postula a oportunidades. |
| **Contratista** | Ofrecer servicios y gestionar cuadrillas/equipos. | Publica servicios integrales, arma equipos de trabajo e incorpora trabajadores para ejecutar proyectos. |
| **Contratante** | Resolver una necesidad puntual o continua. | Publica búsquedas, evalúa perfiles verificados y contrata trabajadores o servicios. |

---

## Estado del proyecto y alcance (MVP)

**Estado actual:** `Definición funcional y diseño de arquitectura` *(sin código productivo implementado aún)*.

### Alcance de la Versión 1 (MVP)
La primera entrega prioriza un núcleo funcional acotado para validar el flujo principal de punta a punta:
1. Gestión de cuentas y activación multi-rol.
2. Creación y visualización de perfiles profesionales y portafolio de habilidades.
3. Publicación y búsqueda de oportunidades / servicios.
4. Flujo básico de postulación y modalidades de contratación.

*Funcionalidades avanzadas (ej. pagos integrados, reputación algorítmica compleja o geolocalización en tiempo real) quedan fuera del alcance inicial y se abordarán en iteraciones posteriores.*

---

## Documentación del proyecto

La especificación completa se encuentra en el directorio `/docs`:

* [Requisitos Funcionales](docs/REQUISITOS_FUNCIONALES.md) — Historias de usuario, reglas de negocio y flujos principales.
* [Arquitectura Propuesta](docs/ARQUITECTURA.md) — Stack tecnológico, estructura de servicios y decisiones técnicas.
* [Modelo de Datos Preliminar](docs/MODELO_DE_DATOS.md) — Entidades principales, relaciones y esquema base.
* [Seguridad y Permisos](docs/SEGURIDAD_Y_PERMISOS.md) — Autenticación, control de acceso basado en roles (RBAC) y privacidad.
* [Hoja de Ruta](docs/HOJA_DE_RUTA.md) — Fases de desarrollo, hitos y prioridades de entrega.

---

## Gobernanza y convenciones

### Criterio de desarrollo
* **Trazabilidad de definiciones:** Toda documentación debe distinguir explícitamente entre decisiones **confirmadas**, **propuestas** y **pendientes**.
* **Cero desarrollo especulativo:** No se implementará ninguna funcionalidad en código que no cuente previamente con sus reglas de negocio y criterios de aceptación definidos en `/docs`.

### Idioma y nomenclatura
* **Documentación y negocio:** Español (incluyendo nombres de roles y conceptos de dominio en las explicaciones).
* **Código e infraestructura:** Inglés (nombres de variables, funciones, endpoints, tablas/colecciones y commits) siguiendo los estándares del ecosistema de desarrollo.
