# Landing voltsaiapp.com

Landing estática para **voltsaiapp.com**. Contenido: hero, características, CTAs a Google Play y App Store, footer con enlaces legales.

**Repositorio público:** [github.com/SebastianArevalo87/voltsaiapp](https://github.com/SebastianArevalo87/voltsaiapp)

## Publicar en GitHub Pages con dominio personalizado

El sitio se publica desde el repo **voltsaiapp**. Sin dominio personalizado, la URL sería `https://sebastianarevalo87.github.io/voltsaiapp/`. Con el dominio `voltsaiapp.com` configurado, la landing se sirve en la raíz de ese dominio.

### Pasos

1. **Subir el contenido de esta carpeta** al repo [voltsaiapp](https://github.com/SebastianArevalo87/voltsaiapp) en la **raíz** de la rama `main` (o la rama por defecto):
   - Debe quedar en la raíz del repo: `index.html`, `styles.css`, `privacy.html`, `terms.html`, carpeta `img/`, y **CNAME**.
   - El archivo **CNAME** debe contener una sola línea: `voltsaiapp.com`.
   - Desde la raíz del proyecto Volts (donde está la carpeta `landing/`):
     ```bash
     cd landing
     git init
     git remote add origin https://github.com/SebastianArevalo87/voltsaiapp.git
     git add .
     git commit -m "Landing voltsaiapp.com"
     git branch -M main
     git push -u origin main
     ```
   - Si el repo ya tiene contenido, clona el repo, copia dentro los archivos de `landing/` en la raíz, haz commit y push.

2. **Activar GitHub Pages** en el repo:
   - En **Settings → Pages**
   - **Source**: "Deploy from a branch"
   - **Branch**: `main`, carpeta **/ (root)**.
   - Guardar. La página quedará en `https://sebastianarevalo87.github.io/voltsaiapp/`.

3. **Configurar el dominio** en el registrador de voltsaiapp.com:
   - **Registros A:** crear 4 registros A (nombre `@` o el subdominio raíz) apuntando a:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Para `www.voltsaiapp.com`: CNAME `www` → `sebastianarevalo87.github.io`.
   - [Documentación de GitHub: custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

4. **En el repo:** **Settings → Pages**, en "Custom domain" escribe `voltsaiapp.com` y guarda. Cuando el DNS resuelva, GitHub activará HTTPS para el dominio.

### Alternativa: mismo repo Volts con rama gh-pages

Si prefieres no usar el repo voltsaiapp y publicar desde el repo de la app:
1. Crear rama `gh-pages` y copiar en su raíz el contenido de `landing/`.
2. En **Settings → Pages** del repo Volts: Source = rama `gh-pages`, carpeta `/ (root)`.
3. Añadir CNAME con `voltsaiapp.com` y configurar DNS como arriba.

## Enlaces de la app

- En la landing se usan:
  - **Google Play:** `https://play.google.com/store/apps/details?id=com.volts.app`
  - **App Store:** sustituir `idXXXXXXXXX` en `index.html` por el ID real cuando tengas la app publicada en iOS.

## Imágenes

- `img/icon-192.png` e `img/icon-512.png` son copias del icono de la app (`assets/logo/app_icon_1024.png`). Para reducir peso en la web puedes generar versiones redimensionadas a 192px y 512px (con ImageMagick, GIMP o cualquier editor) y reemplazar los archivos.

## Páginas adicionales

Si añades **Política de privacidad** o **Términos de uso**, crea `privacy.html` y `terms.html` en la misma raíz que `index.html` y enlázalos desde el footer (ya están referenciados como `privacy.html` y `terms.html`).

## Referencia en la app

Opcional: en la app móvil, donde tengas enlaces a "Sitio web" o "Más información", puedes usar `https://voltsaiapp.com`.
