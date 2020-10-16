## Crear nuevo proyecto

```bash
npm run dev
# or
yarn dev
```
[`create-next-app`]

## Ejecutar proyecto localhost

```bash
npm run dev
# or
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver los resultados.

## Arquitectura Aplicacion

 `pages/`            -> Se encuentran todoas las pages de la aplicacion
 `pages/index.js`    -> Ruta principal, Home.
 `pages/genero`      -> Page para elegir un genero y continuar a la siguiente page.
 `pages/datos`       -> Page donde se ingresan los datos, nombre, email y fecha de nacimiento.
 `pages/horoscopo`   -> Page donde se muestra el resultado del horoscopo en base a los datos     ingresados.
 `components/`       -> Componentes de la aplicacion.
 `utils/`            -> Utilidades, por ej: parsear fecha a string, etc.
 `public/material`   -> Imagenes.
 `services/`         -> Se consume la data del endpoint con axios.
 `styles/`           -> Estilos de la aplicacion (CSS)

 ## Deploy Aplicacion 
 
  https://app-zodiaco.vercel.app/







  
 




