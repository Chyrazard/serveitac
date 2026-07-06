# ServeiCat 24H Website

Landing de captación para desatascos de ServeiCat 24H, construida con Next.js.

## Desarrollo

```bash
npm install
npm run dev
```

## Variables importantes

Copiar `.env.example` a `.env.local` cuando estén los datos reales:

```bash
cp .env.example .env.local
```

Los valores por defecto son placeholders y deben sustituirse antes de lanzar campañas.

## VPS

Flujo previsto en el servidor:

```bash
git clone https://github.com/Chyrazard/serveitac.git /var/www/serveicat
cd /var/www/serveicat/website
cp .env.example .env.local
npm ci
npm run build
npm install -g pm2
pm2 start npm --name serveicat-website -- start -- -p 3000
pm2 save
```

Para actualizar despues de un push:

```bash
cd /var/www/serveicat
git pull
cd website
npm ci
npm run build
pm2 restart serveicat-website
```
