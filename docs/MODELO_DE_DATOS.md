# Modelo de datos preliminar — Formalizate

**Estado:** borrador conceptual. No usar todavía como esquema definitivo de base de datos.

## 1. Principios

- Una persona tendrá una cuenta de acceso.
- Una cuenta podrá activar varios roles.
- Los perfiles personales y las organizaciones tendrán identidades diferenciadas.
- La información declarada, corroborada y acreditada debe distinguirse.
- Las referencias y verificaciones deben conservar autoría, estado y trazabilidad.
- La visibilidad pública debe controlarse sin perder el registro interno necesario.

## 2. Entidades candidatas

| Entidad | Propósito |
|---|---|
| Cuenta | Identidad de acceso y autenticación |
| Persona | Datos personales básicos |
| Rol de cuenta | Roles activos: trabajador, contratista, contratante |
| Perfil profesional | Presentación pública y datos profesionales |
| Organización | Empresa, organización, equipo o emprendimiento |
| Membresía de organización | Relación entre personas y organizaciones |
| Rol de organización | Administrador principal, administrador, colaborador; permisos por definir |
| Experiencia | Trabajo, actividad o trayectoria declarada |
| Habilidad | Definición de una capacidad del catálogo |
| Habilidad de perfil | Relación entre persona y habilidad, con nivel y estado de respaldo |
| Oficio | Sector o especialidad que agrupa habilidades |
| Publicación | Contenido de actividad profesional |
| Archivo multimedia | Foto o video asociado a una publicación u otro registro |
| Referencia | Recomendación emitida por una persona |
| Solicitud de referencia | Invitación enviada a un referente |
| Verificación | Registro de identidad, relación u otra comprobación |
| Formación | Curso, estudio o capacitación declarada |
| Certificación | Acreditación documental de una formación o competencia |
| Evaluación | Entrevista o test de capacidad |
| Pregunta de evaluación | Pregunta específica asociada a una habilidad |
| Respuesta de evaluación | Respuesta aportada por el trabajador |
| Publicación de oportunidad | Búsqueda de empleo u oferta de obra/servicio |
| Postulación | Expresión de interés de un trabajador |
| Contacto | Registro del intercambio inicial, sujeto a definición |

## 3. Relaciones conceptuales

- Una cuenta pertenece a una persona.
- Una persona puede tener varios roles activos.
- Una persona puede administrar o integrar varias organizaciones.
- Una organización puede tener varios integrantes con permisos diferenciados.
- Un perfil profesional pertenece a una persona.
- Un perfil puede declarar varias habilidades.
- Una habilidad puede pertenecer a un oficio y aparecer en muchos perfiles.
- Una experiencia puede asociarse a habilidades y, cuando corresponda, a una organización.
- Una publicación pertenece a una persona o a una organización según el tipo de publicación.
- Una referencia se emite por un referente sobre un trabajador y puede estar vinculada a una experiencia o habilidad.
- Una oportunidad pertenece a una persona contratante o a una organización.
- Una postulación vincula a una persona con una oportunidad.
- Una evaluación puede generar resultados orientativos por habilidad.

## 4. Estados que deberán modelarse

Los estados exactos requieren diseño, pero como mínimo se deberán considerar:

- Roles activos o inactivos.
- Organizaciones registradas o equipos independientes.
- Referencias: invitada, respondida, aceptada para publicación, no aceptada para publicación.
- Verificaciones: pendiente, confirmada, no confirmada.
- Habilidades: declarada, respaldada por evidencia, acreditada.
- Oportunidades: borrador, publicada, pausada, finalizada o vencida; confirmar reglas antes de implementar.
- Postulaciones: estados del proceso, todavía por definir.

## 5. Auditoría y trazabilidad

Para datos sensibles o verificables se deberá registrar:
- quién creó o aportó la información;
- quién la confirmó;
- cuándo ocurrió;
- qué fuente o evidencia se utilizó;
- si el dato es visible públicamente;
- cambios de estado relevantes.

## 6. Decisiones pendientes antes de crear el esquema

- Definir si Persona y Cuenta serán tablas separadas o una relación equivalente en la tecnología elegida.
- Definir el modelo de autenticación.
- Definir campos y restricciones de cada entidad.
- Definir borrado lógico frente a eliminación definitiva.
- Definir políticas de retención y privacidad.
- Definir las relaciones entre publicaciones, experiencias y habilidades.
- Definir el modelo de archivos multimedia.
- Definir los estados y transiciones de oportunidades y postulaciones.
- Definir el mecanismo de niveles por habilidad y sus evidencias.

Este documento es un mapa de dominio, no una migración ni un esquema SQL listo para producción.
