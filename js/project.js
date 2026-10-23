/* project.html — 케이스스터디 상세 렌더링 (?id=프로젝트ID) */

function renderBlock(b) {
  switch (b.type) {
    case 'text':
      return `<div class="blk${b.label || b.topic ? ' blk-topic' : ''}">${b.label ? `<span class="blk-label">${b.label}</span>` : ''}${b.title ? `<h3>${b.title}</h3>` : ''}${b.body ? `<p class="blk-text">${b.body}</p>` : ''}</div>`;

    case 'list':
      return `<div class="blk">${b.title ? `<h3>${b.title}</h3>` : ''}<ul class="blk-list">${b.items.map((i) => `<li>${i}</li>`).join('')}</ul></div>`;

    case 'steps':
      return `<div class="blk">${b.title ? `<h3>${b.title}</h3>` : ''}<ol class="blk-steps">${b.items.map((i) => `<li><span>${i}</span></li>`).join('')}</ol></div>`;

    case 'stats':
      return `<div class="blk blk-stats">${b.items.map((s) => `<div class="stat"><div class="v">${s.value}</div><div class="l">${s.label}</div></div>`).join('')}</div>`;

    case 'cards':
      return `<div class="blk blk-cards${b.layout ? ` is-${b.layout}` : ''}${b.cols ? ` is-cols${b.cols}` : ''}${b.group ? ' is-grouped' : ''}">${b.group ? `<p class="group-title">${b.group}</p>` : ''}${b.items.map((c) => `
        <div class="c">
          ${c.img ? `<img class="c-img" src="${c.img}" alt="${String(c.title).replace(/<[^>]+>/g, ' ')}" loading="lazy"${b.ratio || c.pos || b.fit ? ` style="${b.ratio ? `aspect-ratio:${c.ratio || b.ratio};max-height:none;` : ''}${c.pos ? `object-position:${c.pos};` : ''}${b.fit ? `object-fit:${b.fit};` : ''}${b.bg ? `background:${b.bg};` : ''}"` : ''}>` : ''}
          <div class="c-text">
            <b>${c.title}</b>
            ${c.body ? `<span>${c.body}</span>` : ''}
            ${c.points ? `<ul class="c-points">${c.points.map((pt) => Array.isArray(pt) ? `<li><strong>${pt[0]}</strong>${pt[1]}</li>` : `<li class="dot">${pt}</li>`).join('')}</ul>` : ''}
          </div>
        </div>`).join('')}</div>`;

    case 'compare':
      return `<div class="blk blk-compare"><table>
        <thead><tr>${b.head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
        <tbody>${b.rows.map((r) => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;

    case 'figure':
      return `<figure class="blk blk-figure">
        <div class="frame"><img src="${b.src}" alt="${b.caption || ''}" loading="lazy"></div>
        ${b.caption ? `<figcaption>${b.caption}</figcaption>` : ''}
      </figure>`;

    case 'tabs':
      return `<div class="blk blk-tabs">
        ${b.title ? `<h3>${b.title}</h3>` : ''}
        <div class="tab-list" role="tablist">${b.items.map((t, i) => `<button type="button" role="tab" class="tab-btn" aria-selected="${i === 0}">${t.label}</button>`).join('')}</div>
        ${b.items.map((t, i) => `<div class="tab-panel" role="tabpanel"${i === 0 ? '' : ' hidden'}>${t.blocks.map(renderBlock).join('')}</div>`).join('')}
      </div>`;

    case 'details':
      return `<details class="blk blk-details"><summary>${b.summary}</summary><div class="details-body">${b.blocks.map(renderBlock).join('')}</div></details>`;

    case 'todo':
      return `<div class="blk">${todoBlock(b.text)}</div>`;

    default:
      return '';
  }
}

function metaList(items) {
  if (!items || !items.length) return withTodo('');
  return `<ul>${items.map((i) => `<li>${withTodo(i)}</li>`).join('')}</ul>`;
}

function renderCase(p) {
  // 이전/다음은 같은 묶음(프로젝트끼리, 논문끼리) 안에서만, 처음·끝에서는 넘어가지 않음
  const isPaper = (x) => x.group === 'Research Paper';
  const siblings = PROJECTS.filter((x) => isPaper(x) === isPaper(p));
  const idx = siblings.indexOf(p);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];
  const unit = isPaper(p) ? '연구' : '프로젝트';

  document.title = `${p.title} · 안수진`;

  const coverMock = p.cover && `
    <div class="cs-cover cs-cover-mock card-mock reveal" style="background:${p.cover.bg || 'var(--blue-soft)'}">
      <div class="device browser"><div class="browser-bar"><i></i><i></i><i></i></div><div class="screen"><img src="${p.cover.src}" alt="${p.title} 화면"></div></div>
    </div>
    ${p.cover.caption ? `<p class="cs-cover-caption reveal">${p.cover.caption}</p>` : ''}`;
  const cover = coverMock
    || (p.thumb ? `<div class="cs-cover reveal"><img src="${p.thumb}" alt="${p.title} 대표 이미지"></div>` : '');

  // 데이터에 없는 섹션은 건너뛰고, 번호는 보이는 순서대로 다시 매김
  const order = SECTION_ORDER.filter((s) => p.sections[s.key]).map((s, i) => ({ ...s, ...(p.sectionLabels || {})[s.key], no: String(i + 1).padStart(2, '0') }));

  const sections = order.map(
    (s) => `
    <section class="cs-section" id="${s.key}">
      <div class="cs-section-head reveal">
        <span class="no">${s.no}</span><h2>${s.label}</h2><span class="en">${s.en}</span>
      </div>
      ${p.sections[s.key].map(renderBlock).join('')}
    </section>`
  ).join('');

  document.getElementById('case').innerHTML = `
    <div class="wrap">
      <div class="cs-hero">
        ${p.group === 'Research Paper'
          ? `<a class="back" href="index.html#research">${ICON.back} 리서치 목록</a>`
          : `<a class="back" href="index.html#projects">${ICON.back} 프로젝트 목록</a>`}
        ${p.group ? `<p class="cs-group reveal">${p.showName ? `${p.groupShort || p.group} - ${p.shortName || p.title}` : p.group}</p>` : ''}
        <h1 class="reveal">${p.headline}</h1>
        <p class="cs-summary reveal">${withTodo(p.summary)}</p>
        <div class="cs-tags reveal">${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
      </div>

      ${cover}

      <dl class="cs-meta reveal">
        ${p.period ? `<div><dt>Period</dt><dd>${withTodo(p.period)}</dd></div>` : ''}
        <div><dt>Type</dt><dd>${withTodo(p.type)}</dd></div>
        <div><dt>Role</dt><dd>${withTodo(p.role)}</dd></div>
        <div><dt>Team</dt><dd>${p.team === '' ? '—' : withTodo(p.team)}</dd></div>
        <div class="wide"><dt>Contribution</dt><dd>${metaList(p.contribution)}</dd></div>
        ${p.link ? `<div class="wide"><dt>Link</dt><dd><a class="chip" href="${p.link.url}" target="_blank" rel="noopener">${p.link.label} ${ICON.out}</a></dd></div>` : ''}
      </dl>

      <nav class="cs-tabs" aria-label="케이스스터디 목차">
        ${order.map((s) => `<a href="#${s.key}">${s.label}</a>`).join('')}
      </nav>

      <div class="cs-layout">
        <aside class="cs-toc" aria-label="케이스스터디 목차">
          <ol>${order.map((s) => `<li><a href="#${s.key}"><span>${s.no}</span>${s.label}</a></li>`).join('')}</ol>
        </aside>
        <article>${sections}</article>
      </div>

      <nav class="cs-pager" aria-label="다른 프로젝트">
        ${prev ? `<a class="pager-prev" href="project.html?id=${prev.id}"><small>← 이전 ${unit}</small><strong>${prev.title}</strong></a>` : ''}
        ${next ? `<a class="pager-next" href="project.html?id=${next.id}"><small>다음 ${unit} →</small><strong>${next.title}</strong></a>` : ''}
      </nav>
    </div>`;

  const blocks = document.querySelectorAll('.cs-section > .blk');
  blocks.forEach((el) => el.classList.add('reveal'));
  initReveal();
  initScrollSpy([...document.querySelectorAll('.cs-toc a'), ...document.querySelectorAll('.cs-tabs a')], 160);
  initLightbox();
  // 탭 블록 전환
  document.querySelectorAll('.blk-tabs').forEach((box) => {
    const btns = [...box.querySelectorAll('.tab-btn')];
    const panels = [...box.querySelectorAll('.tab-panel')];
    btns.forEach((btn, i) => btn.addEventListener('click', () => {
      btns.forEach((b, j) => b.setAttribute('aria-selected', String(j === i)));
      panels.forEach((p, j) => (p.hidden = j !== i));
    }));
  });

  // 해시(#research 등)로 들어온 경우 렌더 후 해당 섹션으로 이동
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('img');
  const close = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('.blk-figure .frame img, .blk-cards .c-img').forEach((el) => {
    el.addEventListener('click', () => {
      img.src = el.src;
      img.alt = el.alt;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  lb.addEventListener('click', close);
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

function renderNotFound() {
  document.getElementById('case').innerHTML = `
    <div class="wrap" style="padding:160px 24px">
      <h1 style="font-size:32px">프로젝트를 찾을 수 없어요.</h1>
      <p style="margin-top:16px;color:var(--text-2)"><a class="em" href="index.html#projects">프로젝트 목록으로 돌아가기 →</a></p>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(location.search).get('id');
  const p = PROJECTS.find((x) => x.id === id);
  p ? renderCase(p) : renderNotFound();
});
