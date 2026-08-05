# Cabañas Los Coihues — Demo comercial

Demo de sitio web para un complejo de cabañas en Bariloche. Pensada para
**mostrarle a clientes**, no como MVP funcional.

- HTML + CSS + JavaScript vanilla. **Sin frameworks, sin build, sin npm.**
- Se abre con **doble click en `index.html`**.
- Multi-idioma **ES / EN / PT-BR** (se cambia sin recargar).
- Mobile-first. Todos los botones de contacto abren **WhatsApp** con mensaje pre-cargado.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | Estructura de la página. **No hace falta tocarlo** para rebrandear. |
| `styles.css` | Diseño. La **paleta** está arriba de todo (`:root`). |
| `app.js` | Lógica (render, idiomas, modal, buscador). **No se toca** para rebrandear. |
| `data.js` | **TODO el contenido editable.** Es el único archivo que tocás para un cliente nuevo. |

---

## Adaptar a un cliente nuevo en 5 minutos → `data.js`

Todo vive en un solo objeto `CONFIG`, bien comentado. Editá en este orden:

1. **`negocio`** — nombre, `slogan`, `whatsapp`, `telefonoVisible`, `email`,
   `direccion`, `redes`.
   - `whatsapp`: **solo números**, con país y área, sin `+` ni espacios.
     Ej. Argentina móvil: `5491100000000`.
   - `mapaEmbed` y `mapaLink`: pegá el mapa de Google Maps
     (*Compartir → Insertar un mapa* → copiá la URL del `src`).

2. **`confianza`** — los 3 argumentos de "reservá directo".

3. **`cabanas`** — cada cabaña: `nombre`, `precioDesde` (por noche),
   `capacidad`, `m2`, `amenities`, descripciones y las semillas de fotos
   (`fotoSeed`, `galeriaSeeds`). *(Para hostería/hotel, tratá cada ítem como
   una habitación o tipo de unidad.)*

4. **`zona`** — 4 tarjetas de qué hay cerca, con distancia en minutos.

5. **`resenas`** — 3 testimonios (`nombre`, `pais`, `bandera`, `estrellas`, `texto`).

6. **`faq`** — preguntas y respuestas del acordeón.

7. **`i18n`** — textos de la **interfaz** (botones, títulos, mensajes de WhatsApp)
   para los 3 idiomas. Para desactivar un idioma, borrá su botón en `index.html`.

### Campos traducibles
Los textos que cambian por idioma son objetos `{ es, en, pt }`. Traducí los tres;
si dejás uno vacío, cae a español automáticamente. El idioma que abre por defecto
se define en `CONFIG.idiomaInicial`.

---

## Cambiar la paleta → `styles.css`

Arriba de todo, en `:root`, hay **6 líneas** para cambiar los colores:

```css
--color-primary: #2f4a3c;   /* verde profundo (bosque) */
--color-accent:  #7d8c53;   /* verde salvia / musgo */
--color-wood:    #a5713f;   /* madera / roble */
--color-cream:   #f6f1e7;   /* crema (fondos suaves) */
--color-ink:     #26261f;   /* texto principal */
--color-bg:      #fbf8f2;   /* fondo general */
```

Las **fuentes** (serif para títulos, sans para el cuerpo), los **radios** y las
**sombras** también son variables en `:root`, un par de líneas más abajo. Si cambiás
la fuente, actualizá también el `<link>` de Google Fonts en `index.html`.

---

## Imágenes

Son fotos reales de [Unsplash](https://unsplash.com) (libres para uso web),
elegidas para que **coincidan con Bariloche**: lago Nahuel Huapi, cabañas de
madera, interiores con estufa a leña y los lugares de la zona (Campanario,
Llao Llao, Colonia Suiza, centro). Se cargan con el helper `IMG("photo-...")`
definido arriba de `data.js`.

Para usar las **fotos reales del cliente**, en `data.js` reemplazá cada
`IMG("photo-...")` por la URL de tu foto entre comillas. Ejemplos:

```js
foto: "fotos/cabana-coihue.jpg",          // archivo local en la carpeta fotos/
heroFoto: "https://misitio.com/lago.jpg", // o una URL propia
```

Campos de imagen: `negocio.heroFoto`, y en cada cabaña `foto` (portada) y
`galeria` (4 fotos del modal); en cada tarjeta de `zona`, `foto`.

## Publicar

Al ser estático, se sube tal cual a **GitHub Pages**, **Netlify** o cualquier
hosting. No requiere build. (Las fotos, fuentes y el mapa necesitan conexión a
internet.)
