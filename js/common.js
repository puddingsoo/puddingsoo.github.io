/* 공통: 네비게이션, 등장 모션, 아이콘, [작성 필요] 표시 */

const ICON = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  out: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
};

/* 문자열 안의 '[작성 필요]'를 배지로 바꿔줍니다 */
function withTodo(str) {
  if (str == null || str === '') return '<span class="todo">작성 필요</span>';
  return String(str).replaceAll('[작성 필요]', '<span class="todo">작성 필요</span>');
}

function todoBlock(text) {
  return `<div class="todo-block"><b>[작성 필요]</b>${text || ''}</div>`;
}

function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-links a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }
}

function initReveal(root = document) {
  const els = root.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );
  els.forEach((el) => io.observe(el));
}

/* 스크롤 위치에 따라 메뉴 활성화 */
function initScrollSpy(links, offset = 120) {
  const items = links
    .map((a) => ({ a, el: document.getElementById(a.getAttribute('href').split('#')[1]) }))
    .filter((x) => x.el);
  if (!items.length) return;

  const update = () => {
    const y = window.scrollY + offset;
    let current = null;
    items.forEach((x) => {
      if (x.el.offsetTop <= y) current = x;
    });
    items.forEach((x) => x.a.classList.toggle('active', x === current));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

document.addEventListener('DOMContentLoaded', initNav);
