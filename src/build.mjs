// Genera el sitio estático (ES en la raíz, EN en /en). Sin dependencias: node src/build.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync, openSync, readSync, closeSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, ui, hero, sections as S, projects, wall } from './content.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const missing = new Set();
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const hash = (p) => createHash('md5').update(read(p)).digest('hex').slice(0, 8);
const V = Object.fromEntries(['css/site.css', 'js/site.js'].map((p) => [p, `/${p}?v=${hash(p)}`]));

function webpSize(path) {
  const b = Buffer.alloc(32), fd = openSync(path, 'r');
  readSync(fd, b, 0, 32, 0); closeSync(fd);
  const t = b.toString('latin1', 12, 16);
  if (t === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  if (t === 'VP8L') { const n = b.readUInt32LE(21); return [(n & 0x3fff) + 1, ((n >> 14) & 0x3fff) + 1]; }
  return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
}
function has(name, ext = 'webp') {
  const ok = existsSync(join(ROOT, 'media', `${name}.${ext}`));
  if (!ok) missing.add(`${name}.${ext}`);
  return ok;
}
function img(name, alt, { eager, cls, sizes } = {}) {
  if (!name || !has(name)) return '';
  const [w, h] = webpSize(join(ROOT, 'media', `${name}.webp`));
  return `<img src="/media/${name}.webp" alt="${esc(alt)}" width="${w}" height="${h}"${cls ? ` class="${cls}"` : ''}${sizes ? ` sizes="${sizes}"` : ''} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}
function vid(name, alt) {
  if (!has(name, 'mp4')) return '';
  let dim = '';
  if (has(name)) { const [w, h] = webpSize(join(ROOT, 'media', `${name}.webp`)); dim = ` poster="/media/${name}.webp" width="${w}" height="${h}"`; }
  return `<video src="/media/${name}.mp4"${dim} muted loop playsinline preload="none" data-auto aria-label="${esc(alt)}"></video>`;
}

const home = (l) => (l === 'es' ? '/' : '/en/');
const caseUrl = (p, l) => (l === 'es' ? `/proyectos/${p.slug}/` : `/en/projects/${p.slug}/`);
const wa = (m) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m)}`;

function page({ l, title, description, path, alt, og, body, cls = '', jsonld, theme = '#5e1b5d' }) {
  const other = l === 'es' ? 'en' : 'es';
  return `<!doctype html>
<html lang="${l}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${site.url}${path}">
<link rel="alternate" hreflang="${l}" href="${site.url}${path}">
<link rel="alternate" hreflang="${other}" href="${site.url}${alt}">
<link rel="alternate" hreflang="x-default" href="${site.url}${l === 'es' ? path : alt}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${site.url}${path}">
<meta property="og:image" content="${site.url}${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="${theme}">
<link rel="icon" href="/media/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/gabarito.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${V['css/site.css']}">
<script>document.documentElement.classList.add('js')</script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>` : ''}
</head>
<body class="${cls}">
<a class="skip" href="#contenido">${ui.skip[l]}</a>
<header class="top" data-top>
  <a class="top__name" href="${home(l)}">${site.name}</a>
  <nav class="top__nav" id="nav" aria-label="${l === 'es' ? 'Principal' : 'Main'}">
    ${Object.entries(ui.nav).map(([id, t]) => `<a href="${home(l)}#${id}">${t[l]}</a>`).join('\n    ')}
    <a href="${alt}" hreflang="${other}" lang="${other}">${ui.langName[l]}</a>
  </nav>
  <button class="top__menu" type="button" data-menu aria-expanded="false" aria-controls="nav">${ui.menu[l]}</button>
  <a class="btn btn--top" href="${home(l)}#contacto">${ui.contactCta[l]}</a>
</header>
${body}
<footer class="foot">
  <p>${site.name}, Medellín</p>
  <ul>${Object.entries(site.social).map(([n, u]) => `<li><a href="${u}" rel="me noopener">${n}</a></li>`).join('')}</ul>
</footer>
<script src="/js/gsap.min.js" defer></script>
<script src="/js/ScrollTrigger.min.js" defer></script>
<script src="${V['js/site.js']}" defer></script>
</body>
</html>
`;
}

const heroHtml = (l) => `
<section class="hero" data-hero style="--bg:${hero[0].bg}" aria-labelledby="h1">
  <div class="hero__text">
    <h1 id="h1"><span class="vh">${ui.makes[l]} ${hero.map((h) => h.word[l].toLowerCase()).join(', ')}</span><span class="hero__makes" aria-hidden="true">${ui.makes[l]}</span></h1>
    <div class="hero__menu" role="tablist" aria-orientation="vertical" aria-label="${ui.menuLabel[l]}">
      ${hero.map((h, i) => `<button role="tab" type="button" id="tab-${h.id}" aria-controls="pan-${h.id}" aria-selected="${!i}" tabindex="${i ? -1 : 0}" data-bg="${h.bg}" data-animal="${h.animal}">${h.word[l]}</button>`).join('\n      ')}
    </div>
    <button class="hero__auto" type="button" data-auto-toggle data-pause="${ui.pause[l]}" data-resume="${ui.resume[l]}" aria-label="${ui.pause[l]}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path class="i-pause" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/><path class="i-play" d="M8 5l11 7-11 7z"/></svg></button>
    ${hero.map((h, i) => `<div class="hero__pan" role="tabpanel" id="pan-${h.id}" aria-labelledby="tab-${h.id}"${i ? ' hidden' : ''}>
      <p>${h.text[l]}</p>
      <a class="btn btn--light" href="#${h.id}">${h.cta[l]}</a>
    </div>`).join('\n    ')}
  </div>
  <div class="hero__art" aria-hidden="true">
    ${hero.map((h, i) => `<div class="animal" data-animal="${h.animal}"${i ? ' hidden' : ''}>${read(`media/animales/${h.animal}.svg`)}</div>`).join('\n    ')}
  </div>
</section>`;

function gamePanel(p, l) {
  const media = p.panelVideo || p.video ? vid(p.panelVideo || p.video, p.name) : img(p.panel || p.cover, p.name);
  return `<article class="game game--${p.slug}" style="--c:${p.color};--d:${p.dark}">
  <div class="game__in">
    <div class="game__media">${media}</div>
    <div class="game__text">
      <h3>${p.name}</h3>
      <p class="game__status">${p.status[l]}</p>
      <p>${p.sum[l]}</p>
      <div class="acts">
        ${p.link ? `<a class="btn btn--light" href="${p.link.u}" rel="noopener">${p.link.l[l]}</a>` : ''}
        <a class="btn btn--line" href="${caseUrl(p, l)}">${ui.viewCase[l]}<span class="vh"> ${p.name}</span></a>
      </div>
    </div>
  </div>
</article>`;
}

const frame = (p, l) => `<a class="site" href="${caseUrl(p, l)}" style="--c:${p.color}">
  <span class="site__shot">${img(p.cover, `${p.name}: ${l === 'es' ? 'pantalla principal' : 'main screen'}`)}</span>
  ${p.mobile && has(p.mobile) ? `<span class="site__phone">${img(p.mobile, '')}</span>` : ''}
  <span class="site__text"><strong>${p.name}</strong><span>${p.sum[l]}</span></span>
</a>`;

function homeBody(l) {
  const by = (t) => projects.filter((p) => p.tipo === t);
  const viv = by('marca')[0];
  return `<main id="contenido">
${heroHtml(l)}

<section id="juegos" class="games" aria-labelledby="h-juegos">
  <div class="wrap head"><h2 id="h-juegos">${S.juegos.h[l]}</h2><p>${S.juegos.p[l]}</p></div>
  <div class="stack">
  ${by('juego').map((p) => gamePanel(p, l)).join('\n  ')}
  </div>
</section>

<section class="more wrap" aria-labelledby="h-proceso">
  <h2 id="h-proceso">${S.proceso.h[l]}</h2>
  <div class="wip">
  ${by('proceso').map((p) => {
    const tag = p.sinPagina ? 'div' : 'a';
    return `<${tag} class="wip__card"${p.sinPagina ? '' : ` href="${caseUrl(p, l)}"`} style="--c:${p.dark};--a:${p.accent}">
    ${p.cover ? img(p.cover, p.name) : ''}
    <strong>${p.name}</strong><span>${p.sum[l]}</span><em>${p.status[l]}</em>
  </${tag}>`;
  }).join('\n  ')}
  </div>
  <h2>${S.navegador.h[l]}</h2>
  <p class="lead">${S.navegador.p[l]}</p>
  <div class="play">
  ${by('navegador').map((p) => `<article class="play__card" style="--c:${p.color}">
    <a class="play__screen" href="${p.link.u}" rel="noopener" aria-label="${p.link.l[l]}">${vid(p.video, p.name)}</a>
    <div><h3>${p.name}</h3><p>${p.sum[l]}</p>
    <div class="acts"><a class="btn btn--dark" href="${p.link.u}" rel="noopener">${p.link.l[l]}</a><a class="btn btn--ink" href="${caseUrl(p, l)}">${ui.viewCase[l]}<span class="vh"> ${p.name}</span></a></div></div>
  </article>`).join('\n  ')}
  </div>
</section>

<section id="web" class="web" aria-labelledby="h-web">
  <div class="wrap">
    <h2 id="h-web">${S.web.h[l]}</h2>
    <div class="web__main">${by('web').map((p) => `${frame(p, l)}<div class="thumbs">${(p.thumbs || []).map((n) => `<a href="${caseUrl(p, l)}#${n.split('/')[1]}">${img(n, p.screens.find((s) => s[0] === n)[1][l])}<span>${p.screens.find((s) => s[0] === n)[1][l]}</span></a>`).join('')}</div><div class="acts"><a class="btn btn--dark" href="${caseUrl(p, l)}">${ui.viewCase[l]}<span class="vh"> ${p.name}</span></a></div>`).join('')}</div>
    <h3 class="web__sub">${S.gvc.h[l]}</h3>
    <p class="lead">${S.gvc.p[l]}</p>
    <div class="web__trio">${by('gvc').map((p) => frame(p, l)).join('')}</div>
  </div>
</section>

<section id="marca" class="brand" aria-labelledby="h-marca">
  <div class="wrap head"><h2 id="h-marca">${S.marca.h[l]}</h2><p>${S.marca.p[l]}</p></div>
  <div class="bento wrap">${viv.bento.filter((n) => has(n)).map((n) => `<figure class="b-${n.split('/')[1]}">${img(n, `Vívolo, ${n.split('/')[1]}`)}</figure>`).join('')}</div>
  <div class="wrap"><a class="btn btn--light" href="${caseUrl(viv, l)}">${ui.viewCase[l]}<span class="vh"> Vívolo</span></a></div>
  <div class="wrap"><h3 class="brand__sub">${S.ilustracion.h[l]}</h3></div>
  <div class="wall" data-wall tabindex="0" role="region" aria-label="${S.ilustracion.hint[l]}">
    ${wall.filter(([n]) => has(n)).map(([n, t]) => `<figure>${img(n, t[l])}<figcaption>${t[l]}</figcaption></figure>`).join('\n    ')}
  </div>
</section>

<section id="ia" class="ai wrap" aria-labelledby="h-ia">
  <h2 id="h-ia">${S.ia.h[l]}</h2>
  <div class="ai__list">${S.ia.items.map((i) => `<div><h3>${i.h[l]}</h3><p>${i.p[l]}</p></div>`).join('')}</div>
</section>

<section id="sobre" class="about" aria-labelledby="h-sobre">
  <div class="wrap about__grid">
    <div class="about__photo">${img('perfil', l === 'es' ? 'Retrato de Brian Rodríguez' : 'Portrait of Brian Rodríguez')}</div>
    <div><h2 id="h-sobre">${S.sobre.h[l]}</h2>${S.sobre.p[l].map((x) => `<p>${x}</p>`).join('')}</div>
  </div>
  <div class="wrap about__more">
    <div><h3>${S.sobre.jobsH[l]}</h3><ul class="jobs">${S.sobre.jobs.map((j) => `<li><div><strong>${j.who}</strong>${j.when ? `<span>${j.when[l] || j.when}</span>` : ''}</div><div><b>${j.role[l]}</b><p>${j.p[l]}</p></div></li>`).join('')}</ul></div>
    <div><h3>${S.sobre.toolsH[l]}</h3><dl class="tools">${S.sobre.tools[l].map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl></div>
  </div>
</section>

<section id="contacto" class="contact" aria-labelledby="h-contacto">
  <div class="wrap">
    <h2 id="h-contacto">${S.contacto.h[l]}</h2>
    <p class="lead">${S.contacto.p[l]}</p>
    <fieldset class="ask" data-ask><legend class="vh">${S.contacto.h[l]}</legend>
      ${S.contacto.options.map((o, i) => `<label><input type="radio" name="que" value="${esc(wa(o.m[l]))}"${i ? '' : ' checked'}><span>${o.l[l]}</span></label>`).join('\n      ')}
    </fieldset>
    <div class="acts"><a class="btn btn--sun" data-wa href="${esc(wa(S.contacto.options[0].m[l]))}" rel="noopener">${S.contacto.go[l]}</a>
    <p>${S.contacto.mail[l]} <a href="mailto:${site.email}">${site.email}</a></p></div>
  </div>
  ${img('animales/mariposa', '', { cls: 'contact__art' })}
</section>
</main>`;
}

function caseBody(p, l, next) {
  const shots = (p.gallery || []).map((n) => {
    if (n.startsWith('v:')) return vid(n.slice(2), p.name);
    return img(n, `${p.name}, ${n.split('/')[1]}`);
  }).filter(Boolean);
  const facts = [[ui.role[l], p.role?.[l]], [ui.status[l], p.status[l]], [ui.tools[l], l === 'en' ? p.tools?.replace(' y ', ' and ') : p.tools], [ui.team[l], p.team?.[l]]].filter(([, v]) => v);
  const coverHtml = p.video ? vid(p.video, p.name) : img(p.cover, p.name, { eager: true });
  const tall = !p.video && p.cover && has(p.cover) && (([w, h]) => h > w)(webpSize(join(ROOT, 'media', `${p.cover}.webp`)));
  return `<main id="contenido" class="case" style="--c:${p.color};--d:${p.dark}">
<div class="case__hero${tall ? ' case__hero--tall' : ''}"><div class="wrap">
  <a class="case__back" href="${home(l)}">${ui.back[l]}</a>
  <h1>${p.name}</h1>
  <p class="case__sum">${p.sum[l]}</p>
  ${p.link ? `<a class="btn btn--light" href="${p.link.u}" rel="noopener">${p.link.l[l]}</a>` : ''}
  </div>${coverHtml ? `<div class="wrap case__cover">${coverHtml}</div>` : ''}</div>
<div class="wrap case__body">
  <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
  <div class="case__text"><h2>${ui.what[l]}</h2><p>${p.what[l]}</p>${p.did ? `<h2>${ui.did[l]}</h2><ul>${p.did[l].map((d) => `<li>${d}</li>`).join('')}</ul>` : ''}</div>
</div>
${p.screens ? `<div class="wrap screens">${p.screens.map(([n, h, t]) => `<figure id="${n.split('/')[1]}">${img(n, `${p.name}: ${h[l]}`)}<figcaption><h2>${h[l]}</h2><p>${t[l]}</p></figcaption></figure>`).join('')}${p.note ? `<p class="screens__note">${p.note[l]}</p>` : ''}</div>` : ''}
${shots.length ? `<div class="wrap shots">${shots.map((s) => `<figure>${s}</figure>`).join('')}</div>` : ''}
<a class="case__next" href="${caseUrl(next, l)}" style="--c:${next.color}"><span>${ui.next[l]}</span><strong>${next.name}</strong></a>
</main>`;
}

const out = (path, html) => { const f = join(ROOT, path); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, html); };
const pages = projects.filter((p) => !p.sinPagina);
const urls = [];
for (const l of ['es', 'en']) {
  out(l === 'es' ? 'index.html' : 'en/index.html', page({
    l, title: ui.title[l], description: ui.description[l], path: home(l), alt: home(l === 'es' ? 'en' : 'es'), og: '/media/og.jpg', body: homeBody(l), cls: 'is-home',
    jsonld: { '@context': 'https://schema.org', '@type': 'Person', name: site.name, url: site.url, image: `${site.url}/media/perfil.webp`, jobTitle: l === 'es' ? 'Diseñador y desarrollador de videojuegos' : 'Game designer and developer', address: { '@type': 'PostalAddress', addressLocality: 'Medellín', addressCountry: 'CO' }, knowsLanguage: ['es', 'en', 'pt'], sameAs: Object.values(site.social) },
  }));
  urls.push(home(l));
  pages.forEach((p, i) => {
    const path = caseUrl(p, l), next = pages[(i + 1) % pages.length];
    out(`${path}index.html`, page({ l, title: `${p.name}, ${site.name}`, description: p.sum[l], path, alt: caseUrl(p, l === 'es' ? 'en' : 'es'), og: p.cover && has(p.cover) ? `/media/${p.cover}.webp` : '/media/og.jpg', body: caseBody(p, l, next), cls: 'is-case', theme: p.color }));
    urls.push(path);
  });
}
out('404.html', page({ l: 'es', title: `Página no encontrada, ${site.name}`, description: ui.description.es, path: '/404.html', alt: '/en/', og: '/media/og.jpg', cls: 'is-case', body: `<main id="contenido" class="case" style="--c:#5e1b5d;--d:#3a0f3c"><div class="case__hero"><div class="wrap"><h1>Esta página no existe</h1><p class="case__sum">Puede que el enlace sea viejo. Los proyectos están en la portada.</p><a class="btn btn--light" href="/">Ir a la portada</a></div></div></main>` }));
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site.url}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
out('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
console.log(`${urls.length} páginas`);
if (missing.size) console.log('Faltan medios:\n  ' + [...missing].join('\n  '));
