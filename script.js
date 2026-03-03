'use strict';

/* ══════════════════════════════════════════
   PAGE DATA — Tourist Journey & Guided Tour
   12 pages matching the reference PDF exactly
══════════════════════════════════════════ */
const PAGES = [

  /* ── PAGE 1: COVER ── */
  {
    type: 'cover',
    title: 'Tourist Journey',
    titleLine2: 'and Guided Tour',
    subtitle: 'A Story About the Art of Tour Guiding',
    img: 'images/page-01.jpg',
    imgIsDiamond: true
  },

  /* ── PAGE 2: Introduction to Tour Guiding ── */
  {
    type: 'content',
    chapter: 'Chapter 1',
    title: 'Introduction to Tour Guiding',
    text: 'Tour guiding is considered one of the most important professions in the tourism sector. It plays a vital role in presenting a country\'s image and introducing visitors to its history, culture, and landmarks. Tourists do not simply visit places; they seek meaningful experiences and deeper understanding.',
    img: 'images/page-02.jpg',
    dotsPos: 'top-center',
    imgStyle: 'polaroid'
  },

  /* ── PAGE 3: The Tour Guide's Character ── */
  {
    type: 'content',
    chapter: 'Chapter 2',
    title: "The Tour Guide's Character",
    text: "On a bright morning, Khalid, a young tour guide, woke up early to prepare for a new working day. He did not view his job as just a source of income, but as a mission and responsibility. He believed that he represented his country to visitors from around the world.",
    img: 'images/page-03.jpg',
    dotsPos: 'top-center',
    imgStyle: 'rounded'
  },

  /* ── PAGE 4: Welcoming the Tourists ── */
  {
    type: 'content',
    chapter: 'Chapter 3',
    title: 'Welcoming the Tourists',
    text: "When the tourist bus arrived, Khalid greeted the group with a warm smile. He introduced himself and explained the tour program clearly. His friendly attitude helped create a comfortable and welcoming atmosphere, making the tourists feel at ease from the very beginning.",
    img: 'images/page-04.jpg',
    dotsPos: 'top-center',
    imgStyle: 'plain'
  },

  /* ── PAGE 5: Beginning of the Tour ── */
  {
    type: 'content',
    chapter: 'Chapter 4',
    title: 'Beginning of the Tour',
    text: "As the tour began, Khalid avoided giving dry, routine information. Instead, he used an engaging storytelling approach, connecting historical facts with interesting narratives. This made the sites feel alive and captured the tourists' attention.",
    img: 'images/page-05.jpg',
    dotsPos: 'top-center',
    imgStyle: 'polaroid'
  },

  /* ── PAGE 6: Cultural Awareness and Knowledge ── */
  {
    type: 'content',
    chapter: 'Chapter 5',
    title: 'Cultural Awareness and Knowledge',
    text: "The tourists showed great curiosity and asked many questions about local traditions and history. Khalid realized that tour guiding involves more than providing facts; it includes explaining cultural aspects, correcting misconceptions, and promoting mutual understanding.",
    img: 'images/page-06.jpg',
    dotsPos: 'none',
    imgStyle: 'plain'
  },

  /* ── PAGE 7: An Unexpected Situation ── */
  {
    type: 'content',
    chapter: 'Chapter 6',
    title: 'An Unexpected Situation',
    text: "During the tour, one of the tourists lost their bag, causing concern within the group. Despite the tension, Khalid remained calm and handled the situation professionally. He quickly took the necessary steps to resolve the issue.",
    img: 'images/page-07.jpg',
    dotsPos: 'bottom-right',
    imgStyle: 'polaroid'
  },

  /* ── PAGE 8: Crisis Management Skills ── */
  {
    type: 'content',
    chapter: 'Chapter 7',
    title: 'Crisis Management Skills',
    text: "Khalid successfully helped locate the missing bag. His composed behavior and problem-solving skills impressed the tourists. They recognized that a tour guide's role also involves ensuring safety, comfort, and assistance in unexpected situations.",
    img: 'images/page-08.jpg',
    dotsPos: 'top-center',
    imgStyle: 'plain'
  },

  /* ── PAGE 9: End of the Tour ── */
  {
    type: 'content',
    chapter: 'Chapter 8',
    title: 'End of the Tour',
    text: "At the end of the day, the tourists expressed their appreciation for the experience. They explained that the tour was not just a visit to landmarks, but an educational and enjoyable journey filled with valuable insights.",
    img: 'images/page-09.jpg',
    dotsPos: 'top-center',
    imgStyle: 'rounded'
  },

  /* ── PAGE 10: The Message of Tour Guiding ── */
  {
    type: 'content',
    chapter: 'Chapter 9',
    title: 'The Message of Tour Guiding',
    text: "This experience highlights that tour guiding is not merely a job. It is a profession that builds bridges between cultures, enhances visitors' experiences, and contributes to creating a positive image of the country.",
    img: 'images/page-10.jpg',
    dotsPos: 'top-left-and-bottom-right',
    imgStyle: 'polaroid'
  },

  /* ── PAGE 11: Conclusion ── */
  {
    type: 'content',
    chapter: 'Conclusion',
    title: 'Conclusion',
    text: "Khalid returned home tired but satisfied. He felt proud knowing that his work made a difference. Tour guiding requires knowledge, communication skills, patience, and professionalism to transform trips into unforgettable experiences.",
    img: 'images/page-11.jpg',
    dotsPos: 'none',
    imgStyle: 'plain'
  },

  /* ── PAGE 12: BACK COVER ── */
  {
    type: 'back-cover',
    title: 'THANK YOU',
    img: 'images/page-12.jpg',
    imgIsDiamond: true
  }
];

/* ══════════════════════════════════════════
   DOTS HELPER
══════════════════════════════════════════ */
function makeDots(pos) {
  if (!pos || pos === 'none') return '';
  const rows = [
    [1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1]
  ];
  const html = rows.map(r =>
    `<div class="dots-row">${r.map(v => `<span class="dot${v ? '' : ' sm'}"></span>`).join('')}</div>`
  ).join('');

  let cls = 'dots';
  if (pos === 'top-center')   cls += ' dots-top-center';
  if (pos === 'top-left')     cls += ' dots-top-left';
  if (pos === 'bottom-right') cls += ' dots-bottom-right';
  if (pos === 'top-left-and-bottom-right') cls += ' dots-top-left';

  let extra = '';
  if (pos === 'top-left-and-bottom-right') {
    extra = `<div class="dots dots-bottom-right">${html}</div>`;
  }

  return `<div class="${cls}">${html}</div>${extra}`;
}

/* ══════════════════════════════════════════
   BUILD PAGE HTML
══════════════════════════════════════════ */
function buildPageHTML(p, idx) {
  if (p.type === 'cover') {
    return `
      <div class="page-bg"></div>
      ${makeDots('top-center')}
      <div class="cover-content">
        <div class="cover-text">
          <div class="cover-title">${p.title}<br>${p.titleLine2}</div>
          <div class="cover-subtitle">${p.subtitle}</div>
        </div>
        <div class="cover-img-wrap">
          <div class="diamond-frame">
            <img src="${p.img}" alt="Cover">
          </div>
        </div>
      </div>
      ${makeDots('bottom-right')}
    `;
  }

  if (p.type === 'back-cover') {
    return `
      <div class="page-bg"></div>
      ${makeDots('top-center')}
      <div class="back-cover-content">
        <div class="back-cover-text">
          <div class="back-title">${p.title}</div>
          <div class="back-lines">
            <div class="back-line"></div>
            <div class="back-line"></div>
          </div>
        </div>
        <div class="cover-img-wrap">
          <div class="diamond-frame">
            <img src="${p.img}" alt="Back Cover">
          </div>
        </div>
      </div>
      ${makeDots('bottom-right')}
    `;
  }

  // Content page
  let imgClass = 'img-frame';
  if (p.imgStyle === 'rounded') imgClass += ' img-frame-rounded';

  return `
    <div class="page-bg"></div>
    ${makeDots(p.dotsPos)}
    <div class="page-content">
      <div class="content-left">
        <div class="page-chapter">${p.chapter || ''}</div>
        <div class="page-title">${p.title}</div>
        <div class="page-text">${p.text}</div>
      </div>
      <div class="content-right">
        <div class="${imgClass}">
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let currentPage = 0;   // 0-indexed; shown in pairs: (0,1), (2,3), …
let isAnimating = false;
const TOTAL = PAGES.length;  // 12

/* ══════════════════════════════════════════
   DOM REFS
══════════════════════════════════════════ */
const book       = document.getElementById('book');
const pageInfo   = document.getElementById('pageInfo');
const slider     = document.getElementById('pageSlider');
const thumbsWrap = document.getElementById('thumbnails');
const tocList    = document.getElementById('tocList');
const tocPanel   = document.getElementById('tocPanel');

/* ══════════════════════════════════════════
   LAYOUT — compute page size from viewport
══════════════════════════════════════════ */
function layout() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const availH = vh - 60 - 70 - 20;  // toolbar + bottomBar + padding
  const availW = vw - 140;            // arrows + padding

  // Aspect ratio 16:9 per page, two pages side by side
  let pageH = availH;
  let pageW = pageH * (16 / 9);

  // Clamp so two pages fit width
  if (pageW * 2 > availW) {
    pageW = availW / 2;
    pageH = pageW * (9 / 16);
  }

  // Minimum size
  pageW = Math.max(Math.floor(pageW), 300);
  pageH = Math.max(Math.floor(pageH), 169);

  document.documentElement.style.setProperty('--page-w', pageW + 'px');
  document.documentElement.style.setProperty('--page-h', pageH + 'px');

  buildBook();
  buildThumbs();
  buildTOC();
  renderSpread(currentPage, false);
}

/* ══════════════════════════════════════════
   BUILD BOOK DOM
══════════════════════════════════════════ */
let pageEls = [];

function buildBook() {
  book.innerHTML = '';
  pageEls = [];

  PAGES.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'page';
    el.innerHTML = buildPageHTML(p, i);
    el.dataset.idx = i;
    el.style.display = 'none';
    book.appendChild(el);
    pageEls.push(el);
  });
}

/* ══════════════════════════════════════════
   RENDER SPREAD (two pages side by side)
══════════════════════════════════════════ */
function renderSpread(leftIdx, animate, direction) {
  // Hide all
  pageEls.forEach(el => {
    el.style.display = 'none';
    el.className = 'page';
  });

  const left  = pageEls[leftIdx];
  const right = pageEls[leftIdx + 1];

  if (left) {
    left.style.display = 'block';
    left.classList.add('page-left');
    if (animate) {
      left.classList.add(direction === 'next' ? 'page-flip-in-left' : 'page-flip-out-left');
    }
  }
  if (right) {
    right.style.display = 'block';
    right.classList.add('page-right');
    if (animate) {
      right.classList.add(direction === 'next' ? 'page-flip-in-right' : 'page-flip-out-right');
    }
  }

  // Update UI
  const displayPage = leftIdx + 1;
  pageInfo.textContent = `${displayPage} / ${TOTAL}`;
  slider.value = leftIdx;

  // Update thumbs
  document.querySelectorAll('.thumb').forEach((t, i) => {
    t.classList.toggle('active', i === leftIdx || i === leftIdx + 1);
  });

  // Update TOC
  document.querySelectorAll('#tocList li').forEach((li, i) => {
    li.classList.toggle('active', i * 2 === leftIdx);
  });
}

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
function goNext() {
  if (isAnimating) return;
  const next = currentPage + 2;
  if (next >= TOTAL) return;

  isAnimating = true;
  currentPage = next;
  renderSpread(currentPage, true, 'next');
  setTimeout(() => { isAnimating = false; }, 500);
}

function goPrev() {
  if (isAnimating) return;
  const prev = currentPage - 2;
  if (prev < 0) return;

  isAnimating = true;
  currentPage = prev;
  renderSpread(currentPage, true, 'prev');
  setTimeout(() => { isAnimating = false; }, 500);
}

function goTo(idx) {
  // Snap to even index
  const even = idx % 2 === 0 ? idx : idx - 1;
  if (even === currentPage) return;
  currentPage = Math.max(0, Math.min(even, TOTAL - 2));
  renderSpread(currentPage, true, currentPage > even ? 'prev' : 'next');
}

/* ══════════════════════════════════════════
   BUILD THUMBNAILS
══════════════════════════════════════════ */
function buildThumbs() {
  thumbsWrap.innerHTML = '';
  PAGES.forEach((p, i) => {
    const t = document.createElement('div');
    t.className = 'thumb';
    t.title = `Page ${i + 1}`;
    t.innerHTML = `<img src="${p.img}" alt="Page ${i + 1}" loading="lazy">`;
    t.addEventListener('click', () => goTo(i));
    thumbsWrap.appendChild(t);
  });
}

/* ══════════════════════════════════════════
   BUILD TABLE OF CONTENTS
══════════════════════════════════════════ */
function buildTOC() {
  tocList.innerHTML = '';
  PAGES.forEach((p, i) => {
    if (i % 2 !== 0) return; // only left pages
    const li = document.createElement('li');
    const num = document.createElement('span');
    num.className = 'toc-num';
    num.textContent = i + 1;
    const label = document.createElement('span');
    label.textContent = p.title || `Page ${i + 1}`;
    li.appendChild(num);
    li.appendChild(label);
    li.addEventListener('click', () => {
      goTo(i);
      closeTOC();
    });
    tocList.appendChild(li);
  });
}

/* ══════════════════════════════════════════
   TOC PANEL
══════════════════════════════════════════ */
function openTOC()  { tocPanel.classList.remove('toc-hidden'); }
function closeTOC() { tocPanel.classList.add('toc-hidden'); }

/* ══════════════════════════════════════════
   EVENT LISTENERS
══════════════════════════════════════════ */
document.getElementById('btnNext').addEventListener('click', goNext);
document.getElementById('btnPrev').addEventListener('click', goPrev);
document.getElementById('flipRight').addEventListener('click', goNext);
document.getElementById('flipLeft').addEventListener('click', goPrev);

document.getElementById('btnToc').addEventListener('click', () => {
  tocPanel.classList.contains('toc-hidden') ? openTOC() : closeTOC();
});
document.getElementById('btnCloseToc').addEventListener('click', closeTOC);

document.getElementById('btnFullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

document.getElementById('btnZoomIn').addEventListener('click', () => {
  const wrap = document.getElementById('bookWrap');
  const cur = parseFloat(wrap.style.transform?.replace('scale(', '') || '1');
  const next = cur >= 1.5 ? 1 : cur + 0.15;
  wrap.style.transform = `scale(${next.toFixed(2)})`;
  wrap.style.transition = 'transform 0.3s ease';
});

slider.addEventListener('input', () => {
  goTo(parseInt(slider.value));
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goPrev();
});

// Touch / swipe
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { dx < 0 ? goNext() : goPrev(); }
}, { passive: true });

// Resize
window.addEventListener('resize', () => layout());

// Fullscreen change
document.addEventListener('fullscreenchange', () => layout());

/* ══════════════════════════════════════════
   EXTRA CSS for dots positions & chapter
══════════════════════════════════════════ */
const extraCSS = document.createElement('style');
extraCSS.textContent = `
  .dots-top-center {
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
  }
  .dots-top-left {
    top: 14px;
    left: 20px;
  }
  .dots-bottom-right {
    bottom: 14px;
    right: 20px;
  }
  .page-chapter {
    font-size: 11px;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 6px;
    font-weight: 600;
  }
  .img-frame {
    height: auto;
    max-height: var(--page-h);
  }
  .img-frame img {
    max-height: calc(var(--page-h) * 0.7);
    object-fit: contain;
  }
  .img-frame-rounded img {
    border-radius: 50%;
    object-fit: cover;
  }
  /* Polaroid style */
  .img-frame.polaroid {
    background: #fff;
    padding: 8px 8px 24px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  }
  .img-frame.polaroid img {
    border-radius: 0;
    object-fit: cover;
    max-height: calc(var(--page-h) * 0.65);
  }
`;
document.head.appendChild(extraCSS);

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  layout();

  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('app').classList.remove('app-hidden');
    }, 500);
  }, 1800);
});
