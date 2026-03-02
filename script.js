/* ============================================================
   WORLD TRAVELER — Tourism Flipbook Script
   ============================================================ */

'use strict';

/* ---- PAGE DATA ---- */
const pages = [
  /* 0 — COVER */
  {
    type: 'cover',
    img:  'images/cover.jpg',
    title: 'World Traveler',
    subtitle: 'The Ultimate Tourism Magazine',
    edition: 'Special Edition · 2025'
  },

  /* 1 — WELCOME */
  {
    type: 'welcome',
    title: 'Welcome to the World',
    body: `Every journey begins with a single step — and every great adventure starts with a dream. 
World Traveler Magazine invites you to explore the most breathtaking destinations on our planet, 
from the romantic streets of Paris to the mystical temples of Bali, from the sun-drenched cliffs 
of Santorini to the ancient wonders of Egypt.

In this special edition, we take you on an unforgettable journey across seven extraordinary 
destinations, each with its own unique charm, culture, and natural beauty. Pack your bags, 
open your heart, and let the world surprise you.`,
    quote: '"The world is a book, and those who do not travel read only one page." — Saint Augustine',
    stats: [
      { num: '195', lbl: 'Countries' },
      { num: '7', lbl: 'Wonders' },
      { num: '∞', lbl: 'Adventures' }
    ]
  },

  /* 2 — PARIS */
  {
    type: 'destination',
    img:  'images/paris.jpg',
    flag: '🇫🇷',
    country: 'France · Europe',
    title: 'Paris',
    subtitle: 'The City of Light',
    body: `Paris, the eternal city of romance, art, and gastronomy, has captivated travelers for centuries. 
Home to the iconic Eiffel Tower, the world-renowned Louvre Museum, and the charming Montmartre 
district, Paris offers an unparalleled cultural experience. Stroll along the Seine River, 
indulge in freshly baked croissants at a sidewalk café, and lose yourself in the city's 
timeless elegance. Every corner of Paris tells a story — a story of love, history, and 
extraordinary beauty.`,
    tags: ['Romance', 'Art & Culture', 'Gastronomy', 'History', 'Fashion'],
    rating: '★★★★★',
    ratingText: '4.9 / 5.0'
  },

  /* 3 — BALI */
  {
    type: 'destination',
    img:  'images/bali.jpg',
    flag: '🇮🇩',
    country: 'Indonesia · Asia',
    title: 'Bali',
    subtitle: 'Island of the Gods',
    body: `Bali is a place where spirituality meets natural paradise. This Indonesian island enchants 
visitors with its emerald-green rice terraces, ancient Hindu temples, and vibrant cultural 
ceremonies. From the artistic hub of Ubud to the surf beaches of Seminyak, Bali offers 
diverse experiences for every traveler. Watch traditional Kecak fire dances at sunset, 
explore the sacred Tanah Lot temple, or simply relax in a luxurious jungle villa surrounded 
by the sounds of tropical nature.`,
    tags: ['Spirituality', 'Beaches', 'Culture', 'Wellness', 'Surfing'],
    rating: '★★★★★',
    ratingText: '4.8 / 5.0'
  },

  /* 4 — SANTORINI */
  {
    type: 'destination',
    img:  'images/santorini.jpg',
    flag: '🇬🇷',
    country: 'Greece · Europe',
    title: 'Santorini',
    subtitle: 'A Greek Paradise',
    body: `Perched dramatically on the edge of a volcanic caldera, Santorini is arguably the most 
photogenic island in the world. The iconic blue-domed churches and whitewashed buildings of 
Oia create a picture-perfect backdrop against the deep blue Aegean Sea. Watch the world's 
most celebrated sunsets from the clifftops, explore ancient Minoan ruins at Akrotiri, 
taste exceptional local wines from volcanic soil, and swim in the unique red and black 
sand beaches formed by ancient volcanic eruptions.`,
    tags: ['Sunsets', 'Architecture', 'Wine', 'Beaches', 'Photography'],
    rating: '★★★★★',
    ratingText: '4.9 / 5.0'
  },

  /* 5 — MALDIVES */
  {
    type: 'destination',
    img:  'images/maldives.jpg',
    flag: '🇲🇻',
    country: 'Maldives · Indian Ocean',
    title: 'Maldives',
    subtitle: 'Ocean Dreams',
    body: `The Maldives is the ultimate tropical paradise — a nation of 1,200 coral islands scattered 
across the Indian Ocean like jewels on a turquoise carpet. Stay in iconic overwater bungalows 
with glass floors revealing the vibrant coral reef below. Snorkel alongside manta rays and 
whale sharks, dive into crystal-clear lagoons teeming with colorful marine life, or simply 
unwind on powdery white sand beaches. The Maldives offers an experience of pure, 
undisturbed luxury in harmony with nature.`,
    tags: ['Luxury', 'Diving', 'Snorkeling', 'Overwater Villas', 'Marine Life'],
    rating: '★★★★★',
    ratingText: '5.0 / 5.0'
  },

  /* 6 — JAPAN */
  {
    type: 'destination',
    img:  'images/japan.jpg',
    flag: '🇯🇵',
    country: 'Japan · Asia',
    title: 'Japan',
    subtitle: 'Land of Wonders',
    body: `Japan is a country of extraordinary contrasts — where ancient traditions coexist seamlessly 
with cutting-edge modernity. Witness the magical cherry blossom season when Mount Fuji is 
framed by clouds of pink sakura flowers. Explore the serene temples and bamboo groves of 
Kyoto, experience the electric energy of Tokyo's Shibuya crossing, and soak in natural hot 
springs (onsen) surrounded by snow. Japanese cuisine, from delicate sushi to hearty ramen, 
is a journey in itself. Japan is not just a destination — it's a transformation.`,
    tags: ['Cherry Blossoms', 'Temples', 'Cuisine', 'Technology', 'Nature'],
    rating: '★★★★★',
    ratingText: '4.9 / 5.0'
  },

  /* 7 — EGYPT */
  {
    type: 'destination',
    img:  'images/egypt.jpg',
    flag: '🇪🇬',
    country: 'Egypt · Africa',
    title: 'Egypt',
    subtitle: 'Ancient Mysteries',
    body: `Egypt is a living museum of human civilization — a land where history stretches back 
5,000 years and every stone tells a story. Stand in awe before the Great Pyramids of Giza, 
one of the Seven Wonders of the Ancient World, and gaze into the enigmatic eyes of the 
Sphinx. Cruise down the legendary Nile River past magnificent temples at Luxor and Karnak. 
Explore the Valley of the Kings, where pharaohs were buried with their treasures. Egypt 
offers an unparalleled journey through the origins of human civilization.`,
    tags: ['Ancient History', 'Pyramids', 'Nile Cruise', 'Archaeology', 'Desert'],
    rating: '★★★★☆',
    ratingText: '4.7 / 5.0'
  },

  /* 8 — NEW ZEALAND */
  {
    type: 'destination',
    img:  'images/new_zealand.jpg',
    flag: '🇳🇿',
    country: 'New Zealand · Pacific',
    title: 'New Zealand',
    subtitle: 'Pure Nature',
    body: `New Zealand is nature's masterpiece — a land of dramatic fjords, snow-capped mountains, 
pristine beaches, and glowing caves. Cruise through the majestic Milford Sound, where 
waterfalls cascade down sheer cliff faces into mirror-like waters. Explore the geothermal 
wonderland of Rotorua, hike through Lord of the Rings landscapes, and experience authentic 
Maori culture. Whether you're an adrenaline seeker or a nature lover, New Zealand delivers 
experiences of breathtaking beauty at every turn.`,
    tags: ['Fjords', 'Hiking', 'Adventure', 'Maori Culture', 'Wildlife'],
    rating: '★★★★★',
    ratingText: '4.8 / 5.0'
  },

  /* 9 — MOROCCO */
  {
    type: 'destination',
    img:  'images/morocco.jpg',
    flag: '🇲🇦',
    country: 'Morocco · Africa',
    title: 'Morocco',
    subtitle: 'Exotic Colors',
    body: `Morocco is a sensory feast — a kaleidoscope of colors, aromas, and sounds that transports 
you to another world. Wander through the labyrinthine medinas of Marrakech and Fez, where 
ancient souks overflow with hand-woven carpets, fragrant spices, and gleaming lanterns. 
Explore the blue-painted streets of Chefchaouen, ride camels across the Sahara Desert at 
sunset, and sleep under a canopy of stars in a Berber camp. Morocco's unique blend of 
Arab, Berber, and European influences creates a cultural tapestry unlike anywhere else.`,
    tags: ['Medina', 'Sahara Desert', 'Souks', 'Architecture', 'Culture'],
    rating: '★★★★☆',
    ratingText: '4.6 / 5.0'
  },

  /* 10 — TRAVEL TIPS */
  {
    type: 'tips',
    img:  'images/travel_tips.jpg',
    title: 'Travel Tips & Essentials',
    subtitle: 'Smart Traveler\'s Guide',
    tips: [
      { icon: '🛂', text: '<strong>Documents First:</strong> Always carry copies of your passport, visa, and travel insurance. Store digital copies in secure cloud storage.' },
      { icon: '💰', text: '<strong>Budget Wisely:</strong> Research local currency and exchange rates before departure. Notify your bank of travel plans to avoid card blocks.' },
      { icon: '🎒', text: '<strong>Pack Light:</strong> Use a carry-on when possible. Roll clothes to save space and always pack a universal adapter and portable charger.' },
      { icon: '🌐', text: '<strong>Stay Connected:</strong> Purchase a local SIM card or international data plan. Download offline maps and translation apps before arrival.' },
      { icon: '🏥', text: '<strong>Health & Safety:</strong> Check vaccination requirements, carry a basic first-aid kit, and always have travel insurance that covers medical emergencies.' }
    ]
  },

  /* 11 — BACK COVER */
  {
    type: 'backcover',
    title: 'World Traveler',
    tagline: 'The world is waiting for you...',
    body: 'Thank you for joining us on this extraordinary journey around the world. May your travels be filled with wonder, discovery, and unforgettable memories. Until next time — keep exploring, keep dreaming, and keep wandering.'
  }
];

/* ============================================================
   RENDER PAGES
   ============================================================ */
function buildPageHTML(p) {
  switch (p.type) {

    case 'cover':
      return `
        <div class="page-cover">
          <img class="cover-img" src="${p.img}" alt="Cover" loading="lazy" />
          <div class="cover-text-area">
            <div class="cover-title">${p.title}</div>
            <div class="cover-subtitle">${p.subtitle}</div>
            <div class="cover-edition">${p.edition}</div>
          </div>
        </div>`;

    case 'welcome':
      return `
        <div class="page-welcome">
          <div class="welcome-ornament">✈</div>
          <div class="welcome-title">${p.title}</div>
          <div class="welcome-divider"></div>
          <div class="welcome-body">${p.body.replace(/\n/g,'<br/>')}</div>
          <blockquote class="welcome-quote">${p.quote}</blockquote>
          <div class="welcome-stats">
            ${p.stats.map(s=>`<div class="stat-box"><div class="stat-num">${s.num}</div><div class="stat-lbl">${s.lbl}</div></div>`).join('')}
          </div>
        </div>`;

    case 'destination':
      return `
        <div class="page-destination">
          <img class="dest-hero" src="${p.img}" alt="${p.title}" loading="lazy" />
          <div class="dest-content">
            <div>
              <div class="dest-flag">${p.flag}</div>
              <div class="dest-country">${p.country}</div>
              <div class="dest-title">${p.title}</div>
              <div class="dest-divider"></div>
              <div class="dest-body">${p.body.replace(/\n/g,' ')}</div>
            </div>
            <div>
              <div class="dest-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
              <div class="dest-rating">${p.rating} <span style="color:#888;font-size:0.7rem">${p.ratingText}</span></div>
            </div>
          </div>
        </div>`;

    case 'tips':
      return `
        <div class="page-tips">
          <div class="tips-header">
            <div class="tips-icon">🗺️</div>
            <div class="tips-title">${p.title}</div>
            <div class="tips-subtitle">${p.subtitle}</div>
          </div>
          <img class="tips-img" src="${p.img}" alt="Travel Tips" loading="lazy" />
          ${p.tips.map(t=>`
            <div class="tip-item">
              <span class="tip-icon">${t.icon}</span>
              <span class="tip-text">${t.text}</span>
            </div>`).join('')}
        </div>`;

    case 'backcover':
      return `
        <div class="page-backcover">
          <div class="backcover-bg"></div>
          <div class="backcover-content">
            <div class="backcover-logo">🌍</div>
            <div class="backcover-title">${p.title}</div>
            <div class="backcover-tagline">${p.tagline}</div>
            <div class="backcover-divider"></div>
            <div class="backcover-body">${p.body}</div>
            <div class="backcover-social">
              <span class="social-pill">✈ Travel</span>
              <span class="social-pill">📸 Explore</span>
              <span class="social-pill">🌟 Dream</span>
            </div>
          </div>
        </div>`;

    default: return '';
  }
}

/* ============================================================
   FLIPBOOK ENGINE
   ============================================================ */
const TOTAL = pages.length;
let currentSpread = 0; // index of LEFT page in current spread (0-based, step 2)
let isAnimating   = false;

const bookEl       = document.getElementById('book');
const prevBtn      = document.getElementById('prev-btn');
const nextBtn      = document.getElementById('next-btn');
const progressFill = document.getElementById('progress-fill');
const currentNum   = document.getElementById('current-page-num');
const totalNum     = document.getElementById('total-pages');
const thumbStrip   = document.getElementById('thumb-strip');

totalNum.textContent = TOTAL;

/* ---- Build all page DOM elements ---- */
const pageEls = pages.map((p, i) => {
  const el = document.createElement('div');
  el.className = 'page';
  el.innerHTML = buildPageHTML(p);
  el.dataset.index = i;
  // Add page number badge
  const badge = document.createElement('div');
  badge.className = 'page-num-badge';
  badge.textContent = i + 1;
  el.appendChild(badge);
  bookEl.appendChild(el);
  return el;
});

/* ---- Build thumbnails ---- */
pages.forEach((p, i) => {
  const img = document.createElement('img');
  img.className = 'thumb';
  img.src = p.img || 'images/cover.jpg';
  img.alt = `Page ${i+1}`;
  img.title = p.title || `Page ${i+1}`;
  img.addEventListener('click', () => goToPage(i));
  thumbStrip.appendChild(img);
});
const thumbEls = thumbStrip.querySelectorAll('.thumb');

/* ---- Layout pages in spread ---- */
function layoutSpread() {
  const leftIdx  = currentSpread;
  const rightIdx = currentSpread + 1;

  pageEls.forEach((el, i) => {
    el.style.display = 'none';
    el.classList.remove('left','right','flip-left','flip-right');
  });

  // Left page
  if (leftIdx < TOTAL) {
    const lEl = pageEls[leftIdx];
    lEl.style.display = 'block';
    lEl.classList.add('left');
    lEl.style.left = '0';
    lEl.style.zIndex = 2;
  }

  // Right page
  if (rightIdx < TOTAL) {
    const rEl = pageEls[rightIdx];
    rEl.style.display = 'block';
    rEl.classList.add('right');
    rEl.style.left = 'var(--page-w)';
    rEl.style.zIndex = 2;
  }

  updateUI();
}

function updateUI() {
  const pageNum = currentSpread + 1;
  currentNum.textContent = pageNum;

  // Progress
  const pct = ((currentSpread) / (TOTAL - 1)) * 100;
  progressFill.style.width = pct + '%';

  // Thumbnails
  thumbEls.forEach((t, i) => {
    t.classList.toggle('active', i === currentSpread || i === currentSpread + 1);
  });

  // Buttons
  prevBtn.disabled = currentSpread <= 0;
  nextBtn.disabled = currentSpread + 2 >= TOTAL;
}

/* ---- Page flip animation ---- */
function flipForward() {
  if (isAnimating || currentSpread + 2 >= TOTAL) return;
  isAnimating = true;

  const outLeft  = pageEls[currentSpread];
  const outRight = currentSpread + 1 < TOTAL ? pageEls[currentSpread + 1] : null;

  // Animate outgoing right page flipping left
  if (outRight) {
    outRight.style.zIndex = 10;
    outRight.style.transformOrigin = 'left center';
    outRight.classList.add('flip-left');
  }
  if (outLeft) {
    outLeft.style.zIndex = 9;
    outLeft.style.transformOrigin = 'right center';
    outLeft.classList.add('flip-right');
  }

  setTimeout(() => {
    currentSpread += 2;
    layoutSpread();
    isAnimating = false;
  }, 700);
}

function flipBackward() {
  if (isAnimating || currentSpread <= 0) return;
  isAnimating = true;

  currentSpread -= 2;
  if (currentSpread < 0) currentSpread = 0;

  // Show incoming pages with reverse animation
  const inLeft  = pageEls[currentSpread];
  const inRight = currentSpread + 1 < TOTAL ? pageEls[currentSpread + 1] : null;

  if (inLeft) {
    inLeft.style.display = 'block';
    inLeft.classList.add('left');
    inLeft.style.left = '0';
    inLeft.style.zIndex = 10;
    inLeft.style.transformOrigin = 'right center';
    inLeft.style.transform = 'rotateY(180deg)';
    inLeft.style.transition = 'none';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        inLeft.style.transition = 'transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
        inLeft.style.transform = 'rotateY(0deg)';
      });
    });
  }
  if (inRight) {
    inRight.style.display = 'block';
    inRight.classList.add('right');
    inRight.style.left = 'var(--page-w)';
    inRight.style.zIndex = 9;
    inRight.style.transformOrigin = 'left center';
    inRight.style.transform = 'rotateY(-180deg)';
    inRight.style.transition = 'none';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        inRight.style.transition = 'transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
        inRight.style.transform = 'rotateY(0deg)';
      });
    });
  }

  setTimeout(() => {
    layoutSpread();
    isAnimating = false;
  }, 750);
}

function goToPage(idx) {
  // Snap to even spread
  const spread = idx % 2 === 0 ? idx : idx - 1;
  if (spread === currentSpread) return;
  currentSpread = Math.max(0, Math.min(spread, TOTAL - 1));
  layoutSpread();
  document.getElementById('toc-overlay').classList.add('hidden');
}

/* ---- Event Listeners ---- */
nextBtn.addEventListener('click', flipForward);
prevBtn.addEventListener('click', flipBackward);

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') flipForward();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   flipBackward();
});

// Touch / swipe support
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) flipForward();
    else         flipBackward();
  }
}, { passive: true });

// TOC
document.getElementById('btn-toc').addEventListener('click', () => {
  document.getElementById('toc-overlay').classList.toggle('hidden');
});
document.getElementById('toc-close').addEventListener('click', () => {
  document.getElementById('toc-overlay').classList.add('hidden');
});
document.querySelectorAll('.toc-list li').forEach(li => {
  li.addEventListener('click', () => goToPage(parseInt(li.dataset.page)));
});

// Fullscreen
document.getElementById('btn-fullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

/* ============================================================
   INIT — Loading screen
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
      layoutSpread();
    }, 650);
  }, 2200);
});
