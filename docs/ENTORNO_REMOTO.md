# Entorno remoto de desarrollo

El objetivo es editar y ejecutar Formalizate desde un entorno en la nube, sin instalar dependencias de desarrollo en la computadora personal.

## Opción preparada: GitHub Codespaces

Se agregó una configuración en `.devcontainer/devcontainer.json` basada en Node.js 22 y con el puerto 8081 preparado para Expo.

La disponibilidad y las cuotas gratuitas de Codespaces dependen del tipo de cuenta y del consumo. Revisar la cuota mostrada por GitHub antes de crear un entorno.

## Cómo abrir el proyecto

1. Iniciar sesión en GitHub.
2. Abrir el repositorio Formalizate.
3. Cambiar a la rama `chore/mobile-app-foundation` o abrir el pull request correspondiente.
4. Abrir el menú **Code**.
5. Seleccionar **Codespaces**.
6. Elegir **Create codespace on chore/mobile-app-foundation**.
7. Esperar a que se prepare el entorno y termine `npm install`.

## Comprobar el entorno

En la terminal integrada del Codespace, ejecutar:

```bash
node -v
npm -v
npm run typecheck
npx expo install --check
```

Los comandos de validación deben finalizar sin errores antes de considerar que la base técnica está lista.

## Iniciar Expo

```bash
npx expo start --tunnel
```

El modo tunnel permite conectar el teléfono a un servidor que está ejecutándose en Codespaces. Puede requerir autenticación o tener limitaciones de red. Si no funciona, revisar los mensajes de Expo y la configuración de red antes de cambiar dependencias.

En Android, abrir Expo Go y escanear el QR que muestra la terminal o la interfaz web del Codespace.

## Importante

- No compartir públicamente enlaces de Codespaces que contengan información sensible.
- No guardar secretos ni claves en el repositorio.
- No se debe fusionar el pull request hasta que la instalación, las verificaciones y la prueba en Android hayan sido revisadas.
- Codespaces es un entorno de desarrollo remoto, no un servicio de alojamiento permanente para la aplicación.
