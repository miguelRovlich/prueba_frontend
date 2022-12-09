<div align="center">
  <img src="./docs/img/justice.png" alt="icon" width="200">
</div>

<div align="center">

# Prueba Front-End 

[![Vite](https://img.shields.io/badge/Vite-3.2.2-ff69b4.svg?logo=Vite)](https://vitejs.dev/)
[![Vue3](https://img.shields.io/badge/Vue-3.2.41-3eaf7c.svg?logo=vue.js)](https://vuejs.org/)
[![Bulma](https://img.shields.io/badge/bulma-0.9.4-00d1b2.svg)](https://bulma.io/)


</div>

<div align="center">

[![localhost](https://img.shields.io/badge/%F0%9F%94%97-localhost-yellow.svg)](http://127.0.0.1:3000/)

</div>

<div align="center">
  Front-End del proyecto escrito con Vite/Vue3.
</div>


## ¿Qué debo instalar?
Primero hay que clonar el repo:

```
git clone https://github.com/miguelRovlich/prueba_frontend.git
```

<br />

Una vez clonado se debe ingresar a la carpeta

```
cd prueba_frontend
```

<br />

Antes de ejecutar el proyecto, instalar las dependencias externas.

```
npm install
```

<br />

Ahora puedes levantar el front.

```
npm run dev
```

<br />

**Nota**: Es posible que los últimos cambios aún no se hayan fusionado con la rama principal, se recomienda siempre darle un vistazo a la rama *dev*.

```
git switch dev
```

<br />

Para volver a la rama master se puede usar el comando `git checkout master`, también se puede usar el siguiente comando.

## ¿Cómo puedo ver la página?

Una vez levantado el servidor de desarrollo, el sitio estará disponible de manera local en [http://localhost:3000/](http://localhost:3000/)

## ¿Cómo puedo contribuir?
Todas las contribuciones son bienvenidas, se recomienda usar [_pull requests_](https://github.com/miguelRovlich/prueba_frontend/pulls) o ramas paralelas a la rama principal.

### Convenciones usadas para los commits

Después de agregar cambios con el comando `git add .`, se sugiere seguir una convención para tener claridad de los cambios realizados, además de ayudar a los demás a estar al tanto del avance actual del proyecto.

La convención fijada es escribir tres letras en **mayúsculas** que indiquen la acción realizada, seguido de la descripción de lo que se realizó, se sugiere usar inglés pero no es obligatorio.

- `ADD` Se agregó o se creó algo que no estaba antes.
- `CHG` Se modificó / refactorizó algo que ya existía.
- `FIX` Se solucionó un problema / error / bug.
- `UPD` Se actualizó algo que quedó obsoleto.
- `DEL` Se borró parte del código o se eliminó algún archivo.

Es **opcional** especificar el ámbito afectado, en sólo una palabra e ir dentro de corchetes, por ejemplo `[Router]`

#### Ejemplos útiles

- ADD

```
git commit -m "ADD: Agregaar logo de Sidebar."
```

<br />

- CHG

```
git commit -m "CHG: [Dashboard] Resize logo."
```

<br />

- FIX

```
git commit -m "FIX: [Login] Cerrar correctamente modal al iniciar sesión."
```

<br />

- DEL

```
git commit -m "DEL: Remove unused jQuery dependencies."
```

<br />

- UPD

```
git commit -m "UPD: Actualizar versión del Vite a 7.7.7"
```

## Referencias

- Ícono por [Flat Icon](https://www.flaticon.com/free-icons/libra)
- Fondo animado [página 404](https://bgjar.com/animated-shape)
- Imagen [página 404](https://error404.fun/)
- [Crop SVG](https://svgcrop.com/)