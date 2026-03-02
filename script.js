/* ═══════════════════════════════════════════════════════════
   Tourist Journey Flipbook  ·  HeyZine-style Script
   ═══════════════════════════════════════════════════════════ */
'use strict';

/* ══════════════════════════════════════════
   PAGE DATA
══════════════════════════════════════════ */
const PAGES = [

  /* 0 — COVER */
  { type: 'cover', img: 'images/cover.jpg',
    title: 'Tourist Journey', titleAccent: '& Guided Tour',
    sub: "Explore the World's Most Beautiful Destinations",
    edition: 'Special Edition · 2025' },

  /* 1 — INTRO */
  { type: 'intro', img: 'images/paris.jpg',
    title: 'Welcome to the World',
    text: `Every journey begins with a single step — and every great adventure starts with a dream. This special edition takes you on an unforgettable journey across the world's most breathtaking destinations, from the romantic streets of Paris to the mystical temples of Bali, from the sun-drenched cliffs of Santorini to the ancient wonders of Egypt. Pack your bags, open your heart, and let the world surprise you.`,
    quote: '"The world is a book, and those who do not travel read only one page." — Saint Augustine',
    stats: [{ num:'195', lbl:'Countries' }, { num:'7', lbl:'Wonders' }, { num:'∞', lbl:'Adventures' }] },

  /* 2 — PARIS */
  { type: 'dest', img: 'images/paris.jpg',
    flag:'🇫🇷', country:'France · Europe', name:'Paris', sub:'City of Light',
    text:`Paris, the eternal city of romance, art, and gastronomy, has captivated travelers for centuries. Home to the iconic Eiffel Tower, the Louvre Museum, and the charming Montmartre district, Paris offers an unparalleled cultural experience. Stroll along the Seine River, indulge in freshly baked croissants at a sidewalk café, and lose yourself in the city's timeless elegance.`,
    tags:['Romance','Art','Gastronomy','History'], rating:'★★★★★ 4.9' },

  /* 3 — BALI */
  { type: 'dest', img: 'images/bali.jpg',
    flag:'🇮🇩', country:'Indonesia · Asia', name:'Bali', sub:'Island of the Gods',
    text:`Bali enchants visitors with its emerald-green rice terraces, ancient Hindu temples, and vibrant cultural ceremonies. From the artistic hub of Ubud to the surf beaches of Seminyak, Bali offers diverse experiences for every traveler. Watch traditional Kecak fire dances at sunset, or relax in a luxurious jungle villa surrounded by tropical nature.`,
    tags:['Spirituality','Beaches','Culture','Wellness'], rating:'★★★★★ 4.8' },

  /* 4 — SANTORINI */
  { type: 'dest', img: 'images/santorini.jpg',
    flag:'🇬🇷', country:'Greece · Europe', name:'Santorini', sub:'A Greek Paradise',
    text:`Perched dramatically on the edge of a volcanic caldera, Santorini is arguably the most photogenic island in the world. The iconic blue-domed churches and whitewashed buildings of Oia create a picture-perfect backdrop against the deep blue Aegean Sea. Watch the world's most celebrated sunsets from the clifftops.`,
    tags:['Sunsets','Architecture','Wine','Beaches'], rating:'★★★★★ 4.9' },

  /* 5 — MALDIVES */
  { type: 'dest', img: 'images/maldives.jpg',
    flag:'🇲🇻', country:'Maldives · Indian Ocean', name:'Maldives', sub:'Ocean Dreams',
    text:`The Maldives is the ultimate tropical paradise — a nation of 1,200 coral islands scattered across the Indian Ocean. Stay in iconic overwater bungalows with glass floors revealing the vibrant coral reef below. Snorkel alongside manta rays and whale sharks, dive into crystal-clear lagoons teeming with colorful marine life.`,
    tags:['Luxury','Diving','Snorkeling','Marine Life'], rating:'★★★★★ 5.0' },

  /* 6 — JAPAN */
  { type: 'dest', img: 'images/japan.jpg',
    flag:'🇯🇵', country:'Japan · Asia', name:'Japan', sub:'Land of Wonders',
    text:`Japan is a country of extraordinary contrasts — where ancient traditions coexist seamlessly with cutting-edge modernity. Witness the magical cherry blossom season when Mount Fuji is framed by clouds of pink sakura flowers. Explore the serene temples and bamboo groves of Kyoto, and experience the electric energy of Tokyo's Shibuya crossing.`,
    tags:['Cherry Blossoms','Temples','Cuisine','Nature'], rating:'★★★★★ 4.9' },

  /* 7 — EGYPT */
  { type: 'dest', img: 'images/egypt.jpg',
    flag:'🇪🇬', country:'Egypt · Africa', name:'Egypt', sub:'Ancient Mysteries',
    text:`Egypt is a living museum of human civilization — a land where history stretches back 5,000 years. Stand in awe before the Great Pyramids of Giza, one of the Seven Wonders of the Ancient World. Cruise down the legendary Nile River past magnificent temples at Luxor and Karnak. Explore the Valley of the Kings.`,
    tags:['Pyramids','Nile Cruise','Archaeology','Desert'], rating:'★★★★☆ 4.7' },

  /* 8 — NEW ZEALAND */
  { type: 'dest', img: 'images/new_zealand.jpg',
    flag:'🇳🇿', country:'New Zealand · Pacific', name:'New Zealand', sub:'Pure Nature',
    text:`New Zealand is nature's masterpiece — a land of dramatic fjords, snow-capped mountains, pristine beaches, and glowing caves. Cruise through the majestic Milford Sound, where waterfalls cascade down sheer cliff faces into mirror-like waters. Hike through Lord of the Rings landscapes and experience authentic Maori culture.`,
    tags:['Fjords','Hiking','Adventure','Wildlife'], rating:'★★★★★ 4.8' },

  /* 9 — MOROCCO */
  { type: 'dest', img: 'images/morocco.jpg',
    flag:'🇲🇦', country:'Morocco · Africa', name:'Morocco', sub:'Exotic Colors',
    text:`Morocco is a sensory feast — a kaleidoscope of colors, aromas, and sounds. Wander through the labyrinthine medinas of Marrakech and Fez, where ancient souks overflow with hand-woven carpets and fragrant spices. Explore the blue-painted streets of Chefchaouen, ride camels across the Sahara Desert at sunset.`,
    tags:['Medina','Sahara','Souks','Architecture'], rating:'★★★★☆ 4.6' },

  /* 10 — TIPS */
  { type: 'tips', img: 'images/travel_tips.jpg',
    title: 'Travel Tips & Essentials',
    sub: "Smart Traveler's Guide",
    tips: [
      { icon:'🛂', text:'<strong>Documents First:</strong> Always carry copies of your passport, visa, and travel insurance. Store digital copies in secure cloud storage.' },
      { icon:'💰', text:'<strong>Budget Wisely:</strong> Research local currency and exchange rates before departure. Notify your bank of travel plans to avoid card blocks.' },
      { icon:'🎒', text:'<strong>Pack Light:</strong> Use a carry-on when possible. Roll clothes to save space and always pack a universal adapter and portable charger.' },
      { icon:'🌐', text:'<strong>Stay Connected:</strong> Purchase a local SIM card or international data plan. Download offline maps before arrival.' },
      { icon:'🏥', text:'<strong>Health & Safety:</strong> Check vaccination requirements and always have travel insurance that covers medical emergencies.' }
    ] },

  /* 11 — BACK COVER */
  { type: 'back',
    title: 'Tourist Journey', tagline: 'The world is waiting for you…',
    text: 'Thank you for joining us on this extraordinary journey around the world. May your travels be filled with wonder, discovery, and unforgettable memories. Keep exploring, keep dreaming, and keep wandering.' }
];

/* ══════════════════════════════════════════
   BUILD PAGE HTML
══════════════════════════════════════════ */
function buildPage(p) {
  switch (p.type) {

    case 'cover': return `
      <div class="pc-cover">
        <img class="pc-cover-img" src="${p.img}" alt="cover" />
        <div class="pc-cover-overlay"></div>
        <div class="pc-cover-body">
          <div class="pc-cover-tag">✈ Special Tourism Edition</div>
          <div class="pc-cover-title">${p.title}<br><span>${p.titleAccent}</span></div>
          <div class="pc-cover-sub">${p.sub}</div>
          <div class="pc-cover-divider"></div>
          <div class="pc-cover-edition">${p.edition}</div>
        </div>
        <div class="pc-cover-dots">
          <div class="pc-cover-dot active"></div>
          <div class="pc-cover-dot"></div>
          <div class="pc-cover-dot"></div>
        </div>
      </div>`;

    case 'intro': return `
      <div class="pc-intro">
        <div class="pc-intro-icon">✈</div>
        <div class="pc-intro-title">${p.title}</div>
        <div class="pc-intro-rule"></div>
        <div class="pc-intro-text">${p.text}</div>
        <blockquote class="pc-intro-quote">${p.quote}</blockquote>
        <div class="pc-intro-stats">
          ${p.stats.map(s=>`<div class="pc-stat"><div class="pc-stat-num">${s.num}</div><div class="pc-stat-lbl">${s.lbl}</div></div>`).join('')}
        </div>
      </div>`;

    case 'dest': return `
      <div class="pc-dest">
        <img class="pc-dest-img" src="${p.img}" alt="${p.name}" />
        <div class="pc-dest-body">
          <div>
            <div class="pc-dest-flag">${p.flag}</div>
            <div class="pc-dest-country">${p.country}</div>
            <div class="pc-dest-name">${p.name}</div>
            <div class="pc-dest-rule"></div>
            <div class="pc-dest-text">${p.text}</div>
          </div>
          <div class="pc-dest-footer">
            <div class="pc-dest-tags">${p.tags.map(t=>`<span class="pc-tag">${t}</span>`).join('')}</div>
            <div class="pc-dest-rating">${p.rating}</div>
          </div>
        </div>
      </div>`;

    case 'tips': return `
      <div class="pc-tips">
        <div class="pc-tips-header">
          <div class="pc-tips-icon">🗺️</div>
          <div class="pc-tips-title">${p.title}</div>
          <div class="pc-tips-sub">${p.sub}</div>
        </div>
        <img class="pc-tips-img" src="${p.img}" alt="tips" />
        ${p.tips.map(t=>`<div class="pc-tip"><span class="pc-tip-icon">${t.icon}</span><span class="pc-tip-text">${t.text}</span></div>`).join('')}
      </div>`;

    case 'back': return `
      <div class="pc-back">
        <div class="pc-back-bg"></div>
        <div class="pc-back-overlay"></div>
        <div class="pc-back-body">
          <div class="pc-back-icon">🌍</div>
          <div class="pc-back-title">${p.title}</div>
          <div class="pc-back-tagline">${p.tagline}</div>
          <div class="pc-back-rule"></div>
          <div class="pc-back-text">${p.text}</div>
          <div class="pc-back-pills">
            <span class="pc-pill">✈ Travel</span>
            <span class="pc-pill">📸 Explore</span>
            <span class="pc-pill">🌟 Dream</span>
          </div>
        </div>
      </div>`;

    default: return `<div class="pc-blank"></div>`;
  }
}

/* ══════════════════════════════════════════
   FLIPBOOK ENGINE
══════════════════════════════════════════ */
const TOTAL     = PAGES.length;
let   spread    = 0;   // index of the LEFT page in current spread (always even)
let   animating = false;

const bookEl    = document.getElementById('book');
const btnPrev   = document.getElementById('btnPrev');
const btnNext   = document.getElementById('btnNext');
const pageNum   = document.getElementById('pageNum');
const slider    = document.getElementById('pageSlider');
const bbLabel   = document.getElementById('bbLabel');
const bbTotal   = document.getElementById('bbTotal');
const tocList   = document.getElementById('tocList');

slider.max = TOTAL - 1;
bbTotal.textContent = TOTAL;

/* ── Create page elements ── */
const pageEls = PAGES.map((p, i) => {
  const el = document.createElement('div');
  el.className = 'page';
  el.innerHTML = buildPage(p);
  el.dataset.i = i;
  bookEl.appendChild(el);
  return el;
});

/* ── Build TOC ── */
PAGES.forEach((p, i) => {
  const li = document.createElement('li');
  li.dataset.i = i;
  const thumb = p.img ? `<img class="toc-thumb" src="${p.img}" alt="" />` : `<span class="toc-thumb" style="background:#eee;display:inline-block"></span>`;
  const label = p.title || p.name || (p.type === 'cover' ? 'Cover' : p.type === 'back' ? 'Back Cover' : `Page ${i+1}`);
  li.innerHTML = `<span class="toc-num">${String(i+1).padStart(2,'0')}</span>${thumb}<span>${label}</span>`;
  li.addEventListener('click', () => { goTo(i); closeToc(); });
  tocList.appendChild(li);
});

/* ══════════════════════════════════════════
   LAYOUT
══════════════════════════════════════════ */
function layout() {
  const L = spread;
  const R = spread + 1;

  pageEls.forEach((el, i) => {
    el.style.display  = 'none';
    el.style.zIndex   = '1';
    el.style.transform = '';
    el.className = 'page';
  });

  if (L < TOTAL) {
    const lEl = pageEls[L];
    lEl.style.display = 'block';
    lEl.classList.add('page-left');
    lEl.style.zIndex = '2';
  }
  if (R < TOTAL) {
    const rEl = pageEls[R];
    rEl.style.display = 'block';
    rEl.classList.add('page-right');
    rEl.style.zIndex = '2';
  }

  updateUI();
}

function updateUI() {
  const cur = spread + 1;
  pageNum.textContent = `${cur} / ${TOTAL}`;
  bbLabel.textContent = `Page ${cur}`;
  slider.value = spread;

  // Update slider fill
  const pct = (spread / (TOTAL - 1)) * 100;
  slider.style.background = `linear-gradient(to right, #1a6fc4 ${pct}%, #ccc ${pct}%)`;

  btnPrev.disabled = spread <= 0;
  btnNext.disabled = spread + 2 >= TOTAL;

  // TOC active
  document.querySelectorAll('#tocList li').forEach(li => {
    const i = parseInt(li.dataset.i);
    li.classList.toggle('active', i === spread || i === spread + 1);
  });
}

/* ══════════════════════════════════════════
   FLIP ANIMATIONS
══════════════════════════════════════════ */
function flipForward() {
  if (animating || spread + 2 >= TOTAL) return;
  animating = true;

  const outR = spread + 1 < TOTAL ? pageEls[spread + 1] : null;
  const outL = pageEls[spread];

  // Animate right page flipping to the left
  if (outR) {
    outR.style.zIndex = '10';
    outR.style.transformOrigin = 'left center';
    outR.style.transition = `transform ${getComputedStyle(document.documentElement).getPropertyValue('--flip-dur') || '0.65s'} cubic-bezier(0.645,0.045,0.355,1)`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { outR.style.transform = 'rotateY(-180deg)'; });
    });
  }
  // Animate left page flipping to the right (subtle)
  if (outL) {
    outL.style.zIndex = '9';
    outL.style.transformOrigin = 'right center';
    outL.style.transition = `transform ${getComputedStyle(document.documentElement).getPropertyValue('--flip-dur') || '0.65s'} cubic-bezier(0.645,0.045,0.355,1)`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { outL.style.transform = 'rotateY(10deg)'; });
    });
  }

  setTimeout(() => {
    spread += 2;
    layout();
    animating = false;
  }, 680);
}

function flipBackward() {
  if (animating || spread <= 0) return;
  animating = true;

  spread -= 2;
  if (spread < 0) spread = 0;

  const inL = pageEls[spread];
  const inR = spread + 1 < TOTAL ? pageEls[spread + 1] : null;

  // Show pages and animate them in from the flipped position
  if (inL) {
    inL.style.display = 'block';
    inL.classList.add('page-left');
    inL.style.zIndex = '10';
    inL.style.transformOrigin = 'right center';
    inL.style.transition = 'none';
    inL.style.transform = 'rotateY(180deg)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        inL.style.transition = `transform 0.65s cubic-bezier(0.645,0.045,0.355,1)`;
        inL.style.transform = 'rotateY(0deg)';
      });
    });
  }
  if (inR) {
    inR.style.display = 'block';
    inR.classList.add('page-right');
    inR.style.zIndex = '9';
    inR.style.transformOrigin = 'left center';
    inR.style.transition = 'none';
    inR.style.transform = 'rotateY(-180deg)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        inR.style.transition = `transform 0.65s cubic-bezier(0.645,0.045,0.355,1)`;
        inR.style.transform = 'rotateY(0deg)';
      });
    });
  }

  setTimeout(() => {
    layout();
    animating = false;
  }, 700);
}

function goTo(idx) {
  const s = idx % 2 === 0 ? idx : idx - 1;
  if (s === spread) return;
  spread = Math.max(0, Math.min(s, TOTAL - 2));
  layout();
}

/* ══════════════════════════════════════════
   EVENTS
══════════════════════════════════════════ */
btnNext.addEventListener('click', flipForward);
btnPrev.addEventListener('click', flipBackward);

// Keyboard
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') flipForward();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   flipBackward();
  if (e.key === 'Escape') { closeToc(); closeZoom(); }
});

// Touch swipe
let tx = 0;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 50) { dx < 0 ? flipForward() : flipBackward(); }
}, { passive: true });

// Click zones
document.getElementById('flipRight').addEventListener('click', flipForward);
document.getElementById('flipLeft').addEventListener('click',  flipBackward);

// Slider
slider.addEventListener('input', () => {
  const v = parseInt(slider.value);
  goTo(v % 2 === 0 ? v : v - 1);
});

// TOC
const tocPanel   = document.getElementById('tocPanel');
const tocOverlay = document.getElementById('tocOverlay');
document.getElementById('btnToc').addEventListener('click', () => {
  tocPanel.classList.toggle('toc-hidden');
  tocOverlay.classList.toggle('toc-hidden');
});
document.getElementById('btnTocClose').addEventListener('click', closeToc);
tocOverlay.addEventListener('click', closeToc);
function closeToc() {
  tocPanel.classList.add('toc-hidden');
  tocOverlay.classList.add('toc-hidden');
}

// Fullscreen
document.getElementById('btnFullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(()=>{});
  else document.exitFullscreen().catch(()=>{});
});

// Zoom
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomContent = document.getElementById('zoomContent');
document.getElementById('btnZoomIn').addEventListener('click', () => {
  const el = pageEls[spread];
  if (!el) return;
  zoomContent.innerHTML = '';
  const clone = el.cloneNode(true);
  clone.style.cssText = `position:relative;left:0;top:0;transform:none;width:600px;height:424px;display:block;`;
  zoomContent.appendChild(clone);
  zoomOverlay.classList.remove('zoom-hidden');
});
document.getElementById('zoomClose').addEventListener('click', closeZoom);
zoomOverlay.addEventListener('click', e => { if (e.target === zoomOverlay) closeZoom(); });
function closeZoom() { zoomOverlay.classList.add('zoom-hidden'); }

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
// Init on DOMContentLoaded for reliability
document.addEventListener('DOMContentLoaded', () => {
  // Pre-build all pages immediately
  layout();
  // Show loader for 1.8s then reveal app
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('app').classList.remove('app-hidden');
    }, 500);
  }, 1800);
});
