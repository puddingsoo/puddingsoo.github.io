/* index.html 렌더링 */

function renderHero() {
  document.getElementById('heroLead').innerHTML = PROFILE.heroLead;
  document.getElementById('heroSub').textContent = PROFILE.heroSub;
}

function renderAbout() {
  document.getElementById('aboutLead').innerHTML = PROFILE.aboutTitle;
  document.getElementById('aboutTags').innerHTML = PROFILE.aboutTags.map((t) => `<span class="tag">#${t}</span>`).join('');
  document.getElementById('aboutBody').textContent = PROFILE.aboutBody;

  document.getElementById('principles').innerHTML = PROFILE.principles
    .map((p) => `<div class="principle reveal"><h3>${p.title}</h3><p>${p.body}</p></div>`)
    .join('');

  // 케이스스터디가 실제로 있는 프로젝트만 링크로 걸어요 (없으면 텍스트로 표시)
  const tlTitle = (t) => {
    const id = t.link && new URLSearchParams(t.link.split('?')[1]).get('id');
    return id && PROJECTS.some((p) => p.id === id) ? `<a href="${t.link}">${t.title}</a>` : t.title;
  };
  const tlChildren = (list) => `
    <ul class="tl-children">${list.map((c) => `
      <li class="tl-child">
        <div class="tl-child-date">${c.date}</div>
        <div>
          <div class="tl-child-title">${tlTitle(c)}</div>
          <div class="tl-meta">${c.meta}</div>
        </div>
      </li>`).join('')}
    </ul>`;
  const groups = [
    { label: 'Work', kinds: ['work', 'project'] },
    { label: 'Education', kinds: ['edu'] },
    { label: 'Activity · License', kinds: ['activity'] },
  ];
  document.getElementById('timeline').innerHTML = groups
    .map((g) => ({ ...g, items: TIMELINE.filter((t) => g.kinds.includes(t.kind)) }))
    .filter((g) => g.items.length)
    .map((g) => `
    <div class="tl-group">
      <h4 class="tl-group-title reveal">${g.label}</h4>
      <ol class="timeline">${g.items.map((t) => `
        <li class="tl-item kind-${t.kind} reveal">
          <div class="tl-date">${t.date}</div>
          <div class="tl-body">
            <div class="tl-title">${tlTitle(t)}</div>
            <div class="tl-meta">${t.meta}</div>
            ${t.children && t.children.length ? tlChildren(t.children) : ''}
          </div>
        </li>`).join('')}
      </ol>
    </div>`)
    .join('');

  document.getElementById('skills').innerHTML = SKILLS.map(
    (s) => `
    <div class="skill reveal">
      <h4>${s.area}</h4>
      <div>
        <ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul>
        ${s.tools ? `<p class="tools">${s.tools}</p>` : ''}
      </div>
    </div>`
  ).join('');
}

const arrowIcon = ICON.arrow.replace('<svg', '<svg class="arrow"');

/* 대표 프로젝트 카드 — lead: true면 이미지와 글을 나란히 크게 */
const tagList = (tags) =>
  tags && tags.length ? `<div class="card-tags">${tags.map((t) => `<span class="tag">#${t}</span>`).join('')}</div>` : '';

/* 기기 목업 — phone: 휴대폰 프레임, browser: 상단 바가 있는 브라우저 창 */
function mockMedia(mock, alt, loading) {
  const img = `<img src="${mock.src}" alt="${alt}" loading="${loading}">`;
  if (mock.type === 'browser') {
    return `<div class="device browser"><div class="browser-bar"><i></i><i></i><i></i></div><div class="screen">${img}</div></div>`;
  }
  return `<div class="device phone"><div class="screen">${img}</div></div>`;
}

function projectCard({ id, desc, tags, mock, category }, lead = false) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return '';
  const loading = lead ? 'eager' : 'lazy';
  const alt = `${p.title} 화면`;
  const media = mock
    ? mockMedia(mock, alt, loading)
    : p.thumb
      ? `<img src="${p.thumb}" alt="${p.title} 대표 이미지" loading="${loading}">`
      : `<div class="ph"><span class="todo">대표 이미지 작성 필요</span></div>`;
  return `
    <a class="card${lead ? ' card-lead' : ''} reveal" href="project.html?id=${p.id}">
      <div class="card-media${mock ? ` card-mock mock-${mock.type}` : ''}">${media}</div>
      <div class="card-body">
        <div class="card-meta"><span class="cat">${category || p.category}</span></div>
        <h3>${p.title} ${arrowIcon}</h3>
        <p>${desc || p.summary}</p>
        ${tagList(tags)}
      </div>
    </a>`;
}

/* 추가 프로젝트 한 줄 — 케이스스터디/외부 자료가 있으면 링크, 없으면 텍스트 */
function moreRow(m) {
  const internal = m.link && !/^https?:/.test(m.link);
  const action = m.link ? `자세히 보기 ${arrowIcon}` : '';
  const inner = `
    <span class="more-label">${m.label}</span>
    <span class="more-main">
      <strong>${m.title}</strong>
      <span class="more-desc">${m.desc || '<span class="todo">설명 작성 필요</span>'}</span>
      ${tagList(m.tags)}
    </span>
    <span class="more-action">${action}</span>`;
  if (!m.link) return `<li class="more-row reveal"><div class="more-inner">${inner}</div></li>`;
  const ext = internal ? '' : ' target="_blank" rel="noopener"';
  return `<li class="more-row reveal"><a class="more-inner" href="${m.link}"${ext}>${inner}</a></li>`;
}

function groupHead(g) {
  return `
    <div class="pgroup-head reveal">
      <span class="pgroup-no">${g.no}</span>
      <div>
        <h3>${g.title}${g.badge ? ` <span class="pgroup-badge">${g.badge}</span>` : ''}</h3>
        ${g.sub ? `<p>${g.sub}</p>` : ''}
      </div>
    </div>`;
}

function renderProjects() {
  const { featured, more } = PROJECT_GROUPS;
  document.getElementById('projectGroups').innerHTML = `
    <div class="pgroup">
      ${groupHead(featured)}
      ${projectCard(featured.lead, true)}
      <div class="grid">${featured.items.map((it) => projectCard(it)).join('')}</div>
      ${featured.extras ? `<ul class="more-list more-extras">${featured.extras.map(moreRow).join('')}</ul>` : ''}
    </div>
    <div class="pgroup">
      ${groupHead(more)}
      <ul class="more-list">${more.items.map(moreRow).join('')}</ul>
    </div>`;
}

function renderPapers() {
  document.getElementById('papers').innerHTML = PAPERS.map((p) => {
    const links = [];
    if (p.caseId) links.push(`<a class="chip solid" href="project.html?id=${p.caseId}">자세히 보기</a>`);
    if (p.url) links.push(`<a class="chip" href="${p.url}" target="_blank" rel="noopener">논문 보기 ${ICON.out}</a>`);
    if (p.extra) links.push(`<a class="chip" href="${p.extra.url}" target="_blank" rel="noopener">${p.extra.label} ${ICON.out}</a>`);
    return `
      <article class="paper reveal">
        <div class="paper-date">${p.date}</div>
        <div>
          <h3>${p.title}</h3>
          <p class="paper-venue">${p.venue}</p>
        </div>
        <div class="paper-links">${links.join('')}</div>
      </article>`;
  }).join('');
}

function renderContact() {
  document.getElementById('closing').textContent = PROFILE.closing;
  const mail = document.getElementById('mail');
  mail.href = `mailto:${PROFILE.email}`;
  document.getElementById('mailText').textContent = PROFILE.email;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderProjects();
  renderPapers();
  renderContact();
  initReveal();
  initScrollSpy([...document.querySelectorAll('.nav-links a')]);
});
