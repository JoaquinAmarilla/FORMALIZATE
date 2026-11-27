# Seguridad y permisos — Formalizate

**Estado:** principios iniciales; matriz de autorización pendiente.

## 1. Principios generales

- Aplicar el principio de mínimo privilegio.
- Verificar permisos en el backend para cada operación protegida.
- No confiar en que la interfaz oculte acciones para proteger datos.
- Separar autenticación (quién es la persona) de autorización (qué puede hacer).
- Separar verificación de identidad personal de verificación legal de una organización.
- Proteger datos personales y limitar su exposición pública.
- Registrar operaciones sensibles y cambios de verificación.
- No incluir contraseñas, tokens, claves privadas ni secretos en el repositorio.

## 2. Cuentas y roles

Una cuenta podrá tener uno o varios de estos roles:
- trabajador;
- contratista;
- contratante.

Los roles habilitan funciones distintas, pero no reemplazan la identidad de la persona.

## 3. Propiedad del perfil profesional

- El trabajador conserva el control de su perfil y de sus declaraciones.
- Una organización no puede modificar unilateralmente las experiencias o habilidades declaradas por el trabajador.
- Una organización puede confirmar una relación laboral y datos que le consten.
- El sistema debe identificar quién aportó y quién confirmó cada dato.

## 4. Referencias

- Un referente puede emitir una recomendación sin aprobación previa del trabajador.
- La recomendación no se publica en el perfil público hasta que el trabajador acepte su publicación.
- El trabajador no puede editar el contenido original del referente.
- El rechazo de publicación no debe implicar automáticamente borrar el registro interno.
- Se deben distinguir identidad confirmada, relación confirmada y referencia emitida.
- No se debe presentar una referencia individual como aval institucional si la organización no la confirmó.

## 5. Organizaciones

- Una organización puede tener varios administradores.
- Debe distinguirse empresa u organización registrada de equipo o emprendimiento independiente.
- La identidad de un administrador y la condición legal de la organización son verificaciones diferentes.
- Los permisos de administrador principal, administrador y colaborador son una propuesta inicial; las capacidades exactas siguen pendientes.

## 6. Visibilidad

Formalizate establecerá reglas de visibilidad pública para los perfiles. La vista privada permitirá administrar información y controlar las acciones habilitadas al usuario.

Antes de publicar cualquier campo se debe definir:
- finalidad;
- sensibilidad;
- quién puede verlo;
- quién puede modificarlo;
- si requiere consentimiento;
- si debe poder eliminarse o corregirse.

## 7. Requisitos de seguridad por definir

- Política de contraseñas o autenticación sin contraseña.
- Verificación de teléfono y correo.
- Recuperación de cuenta.
- Sesiones y cierre de sesión.
- Protección contra abuso, spam y automatización.
- Bloqueo y denuncia de usuarios.
- Moderación de publicaciones.
- Eliminación de cuenta y tratamiento de datos asociados.
- Cifrado en tránsito y en reposo.
- Copias de seguridad y recuperación.
- Retención y eliminación de datos.
- Protección de archivos multimedia y enlaces de acceso.
- Auditoría de accesos administrativos.

No se debe publicar la aplicación hasta que estos requisitos estén diseñados, implementados y probados en el alcance correspondiente.
