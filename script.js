/* ==========================================================================
   EMBER & OAK — site configuration
   -------------------------------------------------------------------------
   EVERYTHING YOU NEED TO CHANGE TO CLONE THIS TEMPLATE FOR ANOTHER CAFÉ
   LIVES IN THIS OBJECT. Nothing below "CONFIG" needs touching.
   ========================================================================== */

const CONFIG = {
  name: "Ember & Oak",
  nameShort: "EO",
  tagline: "Roasted slowly. Poured with care.",
  founded: 2014,

  aboutText:
    "Ember & Oak grew out of a single obsession: that every cup should be poured on purpose. " +
    "We pick the beans by hand, roast them in small batches, and built the room to feel like " +
    "a living room for people who like the quiet after midnight.",

  address: "42 Redchurch Street, Shoreditch, London E2 7DP",
  // used for the Google Maps embed without an API key — just change the address above
  mapQuery: "42 Redchurch Street, Shoreditch, London E2 7DP",

  phone: "+442071234567",
  phoneDisplay: "+44 20 7123 4567",
  whatsapp: "https://wa.me/442071234567",
  // generic Instagram link until a real profile exists — swap for https://instagram.com/your.profile once you have one
  instagram: "https://www.instagram.com/",
  instagramHandle: "@emberandoak",
  // powers the "Send request" button in the booking form — replace with the café's real inbox
  email: "bookings@emberandoak.co.uk",

  rating: { score: "4.9", count: 312, source: "Google" },

  hours: [
    { days: "Monday — Friday", time: "7am – 10pm", dayIndexes: [1, 2, 3, 4, 5] },
    { days: "Saturday", time: "8am – 11pm", dayIndexes: [6] },
    { days: "Sunday", time: "9am – 9pm", dayIndexes: [0] },
  ],

  // structured schedule (0 = Sunday ... 6 = Saturday) — drives the live
  // "open/closed" badge in the header. Must match CONFIG.hours above.
  schedule: [
    { open: "09:00", close: "21:00" }, // Sunday
    { open: "07:00", close: "22:00" }, // Monday
    { open: "07:00", close: "22:00" }, // Tuesday
    { open: "07:00", close: "22:00" }, // Wednesday
    { open: "07:00", close: "22:00" }, // Thursday
    { open: "07:00", close: "22:00" }, // Friday
    { open: "08:00", close: "23:00" }, // Saturday
  ],

  // the numbers under the "About" section — `value: "years"` is derived from CONFIG.founded
  stats: [
    { value: "years", suffix: "", label: "years behind the bar" },
    { value: 3, suffix: "", label: "single origins in rotation" },
    { value: 240, suffix: "+", label: "cups poured every day" },
  ],

  process: [
    { icon: "bean",  title: "We source",     text: "Direct trade, small farms, always a fresh harvest. We taste before we buy." },
    { icon: "flame", title: "We roast",      text: "Batches up to 8 kg, with a profile dialled in for each bean. Never for stock." },
    { icon: "scale", title: "We measure",    text: "Dose, time, temperature. Espresso is recalibrated every morning before we open." },
    { icon: "cup",   title: "We pour",       text: "No rushing. If a cup isn't right, it doesn't leave the bar." },
  ],

  amenities: [
    { icon: "wifi",  label: "Free Wi-Fi" },
    { icon: "plug",  label: "Power at every table" },
    { icon: "paw",   label: "Dog friendly" },
    { icon: "leaf",  label: "Vegan options" },
    { icon: "sun",   label: "Heated terrace" },
    { icon: "cup",   label: "Coffee to take away" },
    { icon: "music", label: "Vinyl every evening" },
    { icon: "card",  label: "Card & contactless" },
  ],

  testimonials: [
    { quote: "The best flat white I've had in London. The staff remember your order after one visit.", author: "Hannah W.", meta: "Google review", rating: 5 },
    { quote: "A room where time runs slower. Perfect for working, or for a conversation that overruns.", author: "Daniel O.", meta: "Regular", rating: 5 },
    { quote: "You can taste the care — roasted well, poured better. I'm back every Sunday.", author: "Priya N.", meta: "Google review", rating: 5 },
  ],

  heroImage:
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80",

  menu: {
    "Coffee": [
      { name: "Espresso", desc: "Our house blend, roasted dark.", price: "2.80", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=60" },
      { name: "Espresso Lungo", desc: "Longer extraction, gentler profile.", price: "3.00", img: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?auto=format&fit=crop&w=500&q=60" },
      { name: "Flat White", desc: "Double shot, micro-foamed milk.", price: "3.80", tag: "Favourite", img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=500&q=60" },
      { name: "Cappuccino", desc: "The classic, done properly.", price: "3.60", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=60" },
      { name: "V60 Filter", desc: "Single origin, changes every month.", price: "4.50", tag: "Seasonal", img: "https://images.unsplash.com/photo-1523942839745-7848c839b661?auto=format&fit=crop&w=500&q=60" },
      { name: "Latte", desc: "Mellow, milky, easy going.", price: "3.80", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=60" },
    ],
    "Pastries": [
      { name: "Basque Cheesecake", desc: "Burnt on top, molten in the middle.", price: "5.50", tag: "Favourite", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=60" },
      { name: "Sea Salt Brownie", desc: "Studded with 70% dark chocolate.", price: "4.20", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=60" },
      { name: "Butter Croissant", desc: "Baked every morning, gone by eleven.", price: "3.40", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=60" },
    ],
    "Cold drinks": [
      { name: "Cold Brew", desc: "Steeped for 16 hours, served over ice.", price: "4.00", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=60" },
      { name: "Coconut Iced Latte", desc: "Espresso, coconut milk, plenty of ice.", price: "4.60", tag: "Vegan", img: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=500&q=60" },
      { name: "Ginger Lemonade", desc: "Freshly pressed, no added syrup.", price: "4.00", tag: "Vegan", img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&q=60" },
    ],
  },

  // prefixed to every price — use "£", "$", "€"; for a trailing symbol see renderMenu()
  currency: "£",

  gallery: [
    { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=70", alt: "The café interior" },
    { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200&q=70", alt: "The bar and espresso machine" },
    { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=70", alt: "Coffee beans up close" },
    { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=70", alt: "A cup of coffee on the table" },
    { src: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1200&q=70", alt: "Guests around a table" },
    { src: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=70", alt: "Coffee in low light" },
    { src: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=70", alt: "The espresso machine" },
    { src: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1200&q=70", alt: "Latte art" },
  ],

  marquee: [
    "★★★★★ “The best flat white in London”",
    "Roasted fifteen minutes from the bar",
    "★★★★★ “A room for long conversations”",
    "Open every day",
    "★★★★★ “Coffee you remember”",
    "Pastries baked fresh every morning",
  ],
};

/* ==========================================================================
   ENVIRONMENT & HELPERS
   ========================================================================== */

const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// a real mouse, not just a "wide screen" — a tablet in landscape has no hover
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const railMq = window.matchMedia("(max-width: 900px)");

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// CONFIG is edited by people who aren't programmers — everything going through innerHTML is escaped
function esc(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Unsplash takes a width through ?w= — we build a srcset so phones don't pull 1200px images
function srcset(url, widths) {
  if (!/[?&]w=\d+/.test(url)) return "";
  return widths.map((w) => `${url.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`).join(", ");
}

// 24h strings from CONFIG.schedule are stored for maths, but shown the way
// people actually read them here: "07:00" → "7am", "22:30" → "10:30pm".
function fmtTime(hhmm) {
  const [h, m] = String(hhmm).split(":").map(Number);
  if (!Number.isFinite(h)) return hhmm;
  const suffix = h < 12 ? "am" : "pm";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}

const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z"/></svg>';

function starsHtml(score) {
  const full = Math.round(Number(score) || 0);
  let out = "";
  for (let i = 1; i <= 5; i++) out += STAR.replace("<svg", i <= full ? "<svg" : '<svg class="is-dim"');
  return out;
}

function initials(name) {
  return String(name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("")
    .toUpperCase();
}

/* ==========================================================================
   RENDER — fills the DOM from CONFIG
   ========================================================================== */

function bindSimpleText() {
  $$("[data-cfg]").forEach((el) => {
    const key = el.getAttribute("data-cfg");
    if (CONFIG[key] !== undefined) el.textContent = CONFIG[key];
  });
}

const ICONS = {
  wifi:  '<path d="M4 9.5C9 5 15 5 20 9.5"/><path d="M7 13C10.5 10 13.5 10 17 13"/><circle cx="12" cy="17" r="1.4" fill="currentColor" stroke="none"/>',
  paw:   '<circle cx="7" cy="8.5" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="6" r="1.6" fill="currentColor" stroke="none"/><circle cx="17" cy="8.5" r="1.6" fill="currentColor" stroke="none"/><path d="M12 11c-3.5 0-6 2.4-6 5.2 0 1.7 1.4 2.8 3 2.8 1 0 1.6-.5 3-.5s2 .5 3 .5c1.6 0 3-1.1 3-2.8 0-2.8-2.5-5.2-6-5.2z"/>',
  leaf:  '<path d="M5 19C5 10 12 5 20 5c0 8-5 15-14 15z"/><path d="M5 19c3-5 7-8 12-10"/>',
  sun:   '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
  cup:   '<path d="M5 9h11v6.5c0 3-2.5 5.5-5.5 5.5S5 18.5 5 15.5z"/><path d="M16 10.5c2.5 0 2.5 5 0 5"/><path d="M8 3.5c-.8 1 .3 1.6-.4 2.6M12 3.5c-.8 1 .3 1.6-.4 2.6"/>',
  plug:  '<path d="M9 3.5v5M15 3.5v5"/><path d="M6.5 8.5h11v3a5.5 5.5 0 01-11 0z"/><path d="M12 17v3.5"/>',
  music: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.2"/><path d="M12 5.5a6.5 6.5 0 016.5 6.5"/>',
  card:  '<rect x="2.8" y="5.5" width="18.4" height="13" rx="2.2"/><path d="M2.8 10h18.4"/><path d="M6.5 14.5h3.5"/>',
  bean:  '<ellipse cx="12" cy="12" rx="8.5" ry="6" transform="rotate(-40 12 12)"/><path d="M8 16c2.5-1 3-3 2-5s-.5-4 2-5"/>',
  flame: '<path d="M12 2.5s5.5 4.5 5.5 9.5a5.5 5.5 0 01-11 0c0-2 1-3.5 2-4.5 0 1.5.8 2.5 2 2.5 1.5 0 2-1.5 1.5-3-.4-1.3-.5-3 0-4.5z"/>',
  scale: '<path d="M12 4v16"/><path d="M6 8h12"/><path d="M4.5 15L8 8l3.5 7a3.6 3.6 0 01-7 0z"/><path d="M12.5 15L16 8l3.5 7a3.6 3.6 0 01-7 0z"/>',
};

function svgIcon(key) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[key] || ""}</svg>`;
}

function renderStats() {
  const root = $("#stats-row");
  if (!root) return;
  const years = new Date().getFullYear() - CONFIG.founded;

  root.innerHTML = CONFIG.stats
    .map((s) => {
      const raw = s.value === "years" ? years : s.value;
      const numeric = Number(raw);
      const isNum = Number.isFinite(numeric);
      return `
        <div class="stat">
          <span class="stat__num" ${isNum ? `data-count="${numeric}"` : ""}>${esc(raw)}${
            s.suffix ? `<i>${esc(s.suffix)}</i>` : ""
          }</span>
          <span class="stat__label">${esc(s.label)}</span>
        </div>`;
    })
    .join("");
}

function renderProcess() {
  const root = $("#process-grid");
  if (!root) return;
  root.innerHTML = CONFIG.process
    .map(
      (p, i) => `
      <li class="step">
        <span class="step__num">${String(i + 1).padStart(2, "0")}</span>
        <span class="step__icon">${svgIcon(p.icon)}</span>
        <h3 class="step__title">${esc(p.title)}</h3>
        <p class="step__text">${esc(p.text)}</p>
      </li>`
    )
    .join("");
}

function renderAmenities() {
  const root = $("#amenities-grid");
  if (!root) return;
  root.innerHTML = CONFIG.amenities
    .map(
      (a) => `
      <div class="amenity">
        <span class="amenity__icon">${svgIcon(a.icon)}</span>
        <span class="amenity__label">${esc(a.label)}</span>
      </div>`
    )
    .join("");
}

function renderMenu() {
  const root = $("#menu-categories");
  const tabsRoot = $("#menu-tabs");
  if (!root) return;

  const categories = Object.keys(CONFIG.menu);

  if (tabsRoot) {
    tabsRoot.innerHTML = ["All", ...categories]
      .map(
        (label, i) =>
          `<button type="button" role="tab" class="menu-tab${i === 0 ? " is-active" : ""}" ` +
          `aria-selected="${i === 0}" data-filter="${esc(i === 0 ? "*" : label)}">${esc(label)}</button>`
      )
      .join("");
  }

  root.innerHTML = categories
    .map((category) => {
      const items = CONFIG.menu[category];
      const rows = items
        .map((item) => {
          const thumbSet = srcset(item.img, [110, 220]);
          return `
        <div class="menu-item" data-img="${esc(item.img)}">
          <span class="menu-item__thumb">
            <img src="${esc(item.img)}" ${thumbSet ? `srcset="${thumbSet}" sizes="54px"` : ""} alt="" loading="lazy" decoding="async" width="54" height="54" />
          </span>
          <span class="menu-item__left">
            <span class="menu-item__name">
              ${esc(item.name)}
              ${item.tag ? `<span class="menu-item__tag" data-tag="${esc(item.tag)}">${esc(item.tag)}</span>` : ""}
            </span>
            <span class="menu-item__desc">${esc(item.desc)}</span>
          </span>
          <span class="menu-item__price">${esc(CONFIG.currency)}${esc(item.price)}</span>
        </div>`;
        })
        .join("");

      return `
      <div class="menu-category" data-category="${esc(category)}">
        <div class="menu-category__heading">
          <span>${esc(category)}</span>
          <span class="menu-category__count">${items.length} item${items.length === 1 ? "" : "s"}</span>
        </div>
        ${rows}
      </div>`;
    })
    .join("");
}

function renderGallery() {
  const root = $("#gallery-grid");
  if (!root) return;
  root.innerHTML = CONFIG.gallery
    .map((photo, i) => {
      const set = srcset(photo.src, [500, 800, 1200]);
      return `
      <button type="button" class="gallery__item" data-cursor="Open" data-index="${i}" aria-label="Open image: ${esc(photo.alt)}">
        <img src="${esc(photo.src)}" ${set ? `srcset="${set}" sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw"` : ""} alt="${esc(photo.alt)}" loading="lazy" decoding="async" />
        <span class="gallery__cap">${esc(photo.alt)}</span>
      </button>`;
    })
    .join("");
}

function renderTestimonials() {
  const root = $("#testimonials-grid");
  if (!root) return;
  root.innerHTML = CONFIG.testimonials
    .map(
      (t) => `
      <figure class="testimonial">
        <span class="stars" role="img" aria-label="Rated ${esc(t.rating || 5)} out of 5">${starsHtml(t.rating || 5)}</span>
        <blockquote>&ldquo;${esc(t.quote)}&rdquo;</blockquote>
        <div class="testimonial__foot">
          <span class="testimonial__avatar" aria-hidden="true">${esc(initials(t.author))}</span>
          <figcaption>
            <span>${esc(t.author)}</span>
            <em>${esc(t.meta || "")}</em>
          </figcaption>
        </div>
      </figure>`
    )
    .join("");

  const dots = $("#testimonials-dots");
  if (dots) {
    dots.innerHTML = CONFIG.testimonials
      .map((_, i) => `<button type="button" aria-label="Review ${i + 1}"${i === 0 ? ' class="is-active"' : ""}></button>`)
      .join("");
  }
}

function renderRatings() {
  const { score, count, source } = CONFIG.rating;

  $$("#hero-stars, #rating-stars").forEach((el) => {
    el.innerHTML = starsHtml(score);
    // the aria label has to track CONFIG, and a span with aria-label is only announced with role="img"
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", `Rated ${score} out of 5`);
  });

  const heroMeta = $("#hero-stars")?.nextElementSibling;
  if (heroMeta) heroMeta.innerHTML = `<strong>${esc(score)}</strong> · ${esc(count)} reviews`;

  const card = $(".rating-card__num");
  if (card) card.textContent = score;
  const cardMeta = $(".rating-card__meta");
  if (cardMeta) cardMeta.textContent = `${count} reviews · ${source}`;
}

function renderHours() {
  const root = $("#hours-list");
  if (!root) return;
  const today = new Date().getDay();

  root.innerHTML = CONFIG.hours
    .map((h) => {
      const isToday = Array.isArray(h.dayIndexes) && h.dayIndexes.includes(today);
      return `<li class="${isToday ? "is-today" : ""}"><span>${esc(h.days)}</span><span>${esc(h.time)}</span></li>`;
    })
    .join("");

  // "Today 7am – 10pm" in the hero meta bar
  const heroToday = $("#hero-today");
  const sched = CONFIG.schedule[today];
  if (heroToday && sched) heroToday.textContent = `Today ${fmtTime(sched.open)} – ${fmtTime(sched.close)}`;
}

function renderMarquee() {
  const track = $("#marquee-track");
  if (!track) return;
  const doubled = [...CONFIG.marquee, ...CONFIG.marquee];
  track.innerHTML = doubled.map((text) => `<div class="marquee__item">${esc(text)}</div>`).join("");

  // speed scales with the track width — same tempo on a phone and on a 4K screen
  const setSpeed = () => {
    const half = track.scrollWidth / 2;
    if (half > 0) track.style.setProperty("--marquee-dur", `${Math.max(14, half / 55)}s`);
  };
  setSpeed();
  window.addEventListener("resize", debounce(setSpeed, 200));
}

function setContactLinks() {
  const tel = `tel:${CONFIG.phone}`;
  const mail = `mailto:${CONFIG.email}`;

  const set = (id, href, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = href;
    if (text != null) {
      const span = el.querySelector("span");
      if (span) span.textContent = text;
      else el.textContent = text;
    }
  };

  set("contact-call", tel, `Call — ${CONFIG.phoneDisplay}`);
  set("contact-whatsapp", CONFIG.whatsapp);
  set("card-call", tel);
  set("card-email", mail);
  set("card-instagram", CONFIG.instagram);
  set("mnav-phone", tel, CONFIG.phoneDisplay);
  set("mnav-instagram", CONFIG.instagram);
  set("mnav-whatsapp", CONFIG.whatsapp);
  set("footer-phone", tel, CONFIG.phoneDisplay);
  set("footer-email", mail);
  set("footer-instagram", CONFIG.instagram);
  set("footer-whatsapp", CONFIG.whatsapp);

  const callValue = $("#card-call-value");
  if (callValue) callValue.textContent = CONFIG.phoneDisplay;
  const emailValue = $("#card-email-value");
  if (emailValue) emailValue.textContent = CONFIG.email;
  const igValue = $("#card-instagram .info-card__value");
  if (igValue) igValue.textContent = CONFIG.instagramHandle;
}

function setMapEmbed() {
  const q = encodeURIComponent(CONFIG.mapQuery);
  const frame = $("#map-frame");
  if (frame) frame.src = `https://www.google.com/maps?q=${q}&output=embed`;
  const link = $("#map-link");
  if (link) link.href = `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function setImages() {
  const hero = $(".hero__img");
  if (hero && !hero.getAttribute("srcset")) hero.src = CONFIG.heroImage;

  const about = $(".about__image");
  if (about) {
    about.src = CONFIG.aboutImage;
    const set = srcset(CONFIG.aboutImage, [600, 900, 1300]);
    if (set) {
      about.srcset = set;
      about.sizes = "(max-width: 900px) 100vw, 45vw";
    }
  }
}

// Splits CONFIG.name into words: everything but the last word goes on the first
// line, and the last word gets the italic/copper accent on the second.
// Works for one-word names (e.g. "Ember") and multi-word ones (e.g. "Ember & Oak").
function setHeroTitle() {
  const el = $("#hero-title");
  if (!el) return;
  const words = CONFIG.name.trim().split(/\s+/);
  const last = words.pop();
  const rest = words.join(" ");

  el.innerHTML = `
    ${rest ? `<span class="split-line"><span>${esc(rest)}</span></span>` : ""}
    <span class="split-line hero__title--accent${rest ? "" : " hero__title--solo"}"><em>${esc(last)}</em></span>
  `;
}

function setYear() {
  const el = $("#year");
  if (el) el.textContent = new Date().getFullYear();
}

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// The class goes on both <html> and <body> — see the .is-locked comment in style.css
function lockScroll(on) {
  document.documentElement.classList.toggle("is-locked", on);
  document.body.classList.toggle("is-locked", on);
  if (window.__lenis) on ? window.__lenis.stop() : window.__lenis.start();
}

/* ==========================================================================
   INIT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  bindSimpleText();
  renderStats();
  renderProcess();
  renderAmenities();
  renderMenu();
  renderGallery();
  renderTestimonials();
  renderRatings();
  renderHours();
  renderMarquee();
  setContactLinks();
  setMapEmbed();
  setImages();
  setHeroTitle();
  setYear();

  // interactions that work without GSAP too
  initMobileNav();
  initSmoothAnchors();
  initStatusBadge();
  initScrollFx();
  initHeaderState();
  initScrollSpy();
  initMenuTabs();
  initLightbox();
  initTestimonialRail();
  initReservationForm();

  if (!hasGsap) {
    // the CDN never arrived — hide the loader and show the content unanimated
    document.documentElement.classList.add("no-anim");
    lockScroll(false);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  initLenis();
  initLoader();
  initCursor();
  initMagnetic();
  initHeadingSplits();
  initScrollReveals();
  initParallax();
  initCounters();
  initMenuPreview();
});

/* ============================== SMOOTH SCROLL ============================== */
function initLenis() {
  if (prefersReducedMotion || typeof Lenis === "undefined") return;

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    smoothTouch: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  window.__lenis = lenis;
}

/* ============================== LOADER / INTRO ============================== */
function initLoader() {
  const loader = $("#loader");
  if (!loader) return;

  const mark = loader.querySelector(".loader__mark");
  const bar = loader.querySelector(".loader__bar span");

  lockScroll(true);

  const finish = () => {
    loader.style.display = "none";
    lockScroll(false);
  };

  // if anything jams, the page still unlocks
  const failsafe = window.setTimeout(finish, 5000);

  if (prefersReducedMotion) {
    window.clearTimeout(failsafe);
    finish();
    return;
  }

  // The hero is hidden BEFORE the curtain lifts. Without this you'd see it in its
  // final state while the loader slides away, and it would then "jump" back to
  // the start of its own animation.
  primeHero();

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      window.clearTimeout(failsafe);
      finish();
    },
  });

  tl.to(mark, { opacity: 1, duration: 0.4 })
    .to(bar, { width: "100%", duration: 0.85, ease: "power2.inOut" }, "-=0.1")
    .to(loader, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "+=0.1")
    // the hero starts while the curtain is still lifting — the overlap hides the "empty" frame
    .add(revealHero(), "-=0.3");
}

const HERO_FADE_IN = "#hero .hero__eyebrow, #hero .hero__tagline, #hero .hero__actions, #hero .hero__meta";

function primeHero() {
  gsap.set("#hero .split-line > *", { yPercent: 110 });
  gsap.set(HERO_FADE_IN, { opacity: 0, y: 18 });
  gsap.set("#hero .hero__scroll", { opacity: 0 });
}

function revealHero() {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.to("#hero .split-line > *", { yPercent: 0, duration: 1, stagger: 0.12 })
    .to("#hero .hero__eyebrow", { opacity: 1, y: 0, duration: 0.7 }, "-=0.8")
    .to("#hero .hero__tagline", { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
    .to("#hero .hero__actions", { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
    .to("#hero .hero__meta", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
    .to("#hero .hero__scroll", { opacity: 1, duration: 0.6 }, "-=0.4");

  return tl;
}

/* ============================== CUSTOM CURSOR ============================== */
function initCursor() {
  if (!finePointer || prefersReducedMotion) return;

  const cursor = $("#cursor");
  const label = $("#cursor-label");
  if (!cursor) return;

  const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // delegated — also catches elements rendered later (the menu tabs)
  document.addEventListener("mouseover", (e) => {
    const el = e.target.closest("[data-cursor]");
    if (!el) return;
    cursor.classList.add("is-active");
    label.textContent = el.getAttribute("data-cursor");
  });

  document.addEventListener("mouseout", (e) => {
    const el = e.target.closest("[data-cursor]");
    if (!el) return;
    // moving onto a child of the same element isn't leaving it — otherwise the cursor flickers
    if (e.relatedTarget && el.contains(e.relatedTarget)) return;
    cursor.classList.remove("is-active");
    label.textContent = "";
  });
}

/* ============================== MAGNETIC BUTTONS ============================== */
function initMagnetic() {
  if (!finePointer || prefersReducedMotion) return;

  $$(".magnetic").forEach((el) => {
    const strength = 0.3;

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: relX * strength, y: relY * strength, duration: 0.4, ease: "power3.out" });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    });
  });
}

/* ============================== HEADER STATE ============================== */
function initHeaderState() {
  const header = $("#site-header");
  if (!header) return;

  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* ============================== SCROLLSPY + NAV PILL ============================== */
function initScrollSpy() {
  const links = $$("#desktop-nav .nav__link");
  const pill = $(".nav__pill");
  if (!links.length) return;

  const byId = new Map();
  links.forEach((l) => {
    const id = l.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) byId.set(section, l);
  });

  const movePill = (link) => {
    if (!pill) return;
    if (!link) {
      pill.classList.remove("is-on");
      return;
    }
    pill.style.width = `${link.offsetWidth}px`;
    pill.style.transform = `translateX(${link.offsetLeft}px)`;
    pill.classList.add("is-on");
  };

  let active = null;

  const setActive = (link) => {
    if (link === active) return;
    active = link;
    links.forEach((l) => l.classList.toggle("is-active", l === link));
    movePill(link);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(byId.get(entry.target));
      });
    },
    // a narrow band across the middle of the screen — whichever section crosses it is "active"
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  byId.forEach((_, section) => observer.observe(section));

  // the hero and footer aren't in the nav — the pill switches off there
  const hero = $("#hero");
  if (hero) {
    new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(null)),
      { rootMargin: "-45% 0px -50% 0px" }
    ).observe(hero);
  }

  window.addEventListener("resize", debounce(() => movePill(active), 150));
}

/* ============================== MOBILE NAV ============================== */
function initMobileNav() {
  const toggle = $("#menu-toggle");
  const nav = $("#mobile-nav");
  const header = $("#site-header");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    nav.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    header?.classList.toggle("is-navopen", open);
    lockScroll(open);

    if (open) nav.querySelector("a")?.focus({ preventScroll: true });
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));

  // close before the smooth-anchor handler takes over the scroll
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // rotating the screen / crossing into desktop width must not leave the scroll locked
  window.addEventListener("resize", debounce(() => {
    if (window.innerWidth > 1024 && nav.classList.contains("is-open")) setOpen(false);
  }, 150));
}

/* ============================== HEADING LINE-SPLIT ============================== */
function initHeadingSplits() {
  $$(".reveal-words").forEach((el) => {
    const lines = el.innerHTML.split(/<br\s*\/?>/i);
    el.innerHTML = "";
    lines.forEach((line) => {
      const wrap = document.createElement("span");
      wrap.className = "split-line";
      const inner = document.createElement("span");
      inner.style.display = "block";
      inner.innerHTML = line;
      wrap.appendChild(inner);
      el.appendChild(wrap);
    });
  });
}

/* ============================== SCROLL REVEALS ============================== */
function initScrollReveals() {
  // headings (the hero is already revealed on load)
  $$("main > section:not(#hero) .reveal-words .split-line > *").forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.9, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 92%" } }
    );
  });

  // lines and blocks
  $$("main > section:not(#hero) .reveal-line").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 94%" } }
    );
  });

  // cards in grids — a gentle stagger across each row
  const batches = [
    { sel: ".gallery__item", cols: 4, y: 40 },
    { sel: ".amenity", cols: 4, y: 26 },
    { sel: ".step", cols: 4, y: 30 },
    { sel: ".stat", cols: 3, y: 26 },
    { sel: ".testimonial", cols: 3, y: 30 },
    { sel: ".info-card", cols: 3, y: 24 },
  ];

  batches.forEach(({ sel, cols, y }) => {
    gsap.utils.toArray(sel).forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: (i % cols) * 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 95%" },
        }
      );
    });
  });

  // Menu items reveal when the section enters the viewport (and again on a tab change).
  // If the section is already in view on load (e.g. a reload halfway down the page),
  // nothing is hidden — otherwise the menu would stay invisible.
  const menuSection = $("#menu");
  if (menuSection && menuSection.getBoundingClientRect().top > window.innerHeight * 0.78) {
    gsap.set(".menu-item, .menu-category__heading", { opacity: 0, y: 18 });
    ScrollTrigger.create({
      trigger: menuSection,
      start: "top 78%",
      once: true,
      onEnter: animateMenuItems,
    });
  }
}

function animateMenuItems() {
  if (!hasGsap) return;
  const els = $$(".menu-category:not([hidden]) .menu-category__heading, .menu-category:not([hidden]) .menu-item");
  if (!els.length) return;
  gsap.fromTo(
    els,
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: "power3.out", overwrite: true }
  );
}

/* ============================== PARALLAX ============================== */
function initParallax() {
  if (prefersReducedMotion) return;

  gsap.utils.toArray("[data-speed]").forEach((el) => {
    const speed = parseFloat(el.getAttribute("data-speed"));
    gsap.to(el, {
      yPercent: speed * 26,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section") || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

/* ============================== COUNTERS ============================== */
function initCounters() {
  if (prefersReducedMotion) return;

  $$("[data-count]").forEach((el) => {
    const target = Number(el.getAttribute("data-count"));
    if (!Number.isFinite(target)) return;

    // the suffix (<i>+</i>) has to survive each rewrite of the number
    const suffix = el.querySelector("i")?.outerHTML || "";
    const obj = { n: 0 };

    gsap.to(obj, {
      n: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
      onUpdate: () => { el.innerHTML = Math.round(obj.n) + suffix; },
      onComplete: () => { el.innerHTML = target + suffix; },
    });
  });
}

/* ============================== MENU: TABS ============================== */
function initMenuTabs() {
  const tabs = $("#menu-tabs");
  if (!tabs) return;

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".menu-tab");
    if (!btn) return;

    const filter = btn.getAttribute("data-filter");

    $$(".menu-tab", tabs).forEach((t) => {
      const on = t === btn;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });

    $$(".menu-category").forEach((cat) => {
      cat.hidden = filter !== "*" && cat.getAttribute("data-category") !== filter;
    });

    animateMenuItems();
    // the section height changed — ScrollTrigger has to recompute its positions
    if (hasGsap) ScrollTrigger.refresh();
  });
}

/* ============================== MENU: HOVER PREVIEW ============================== */
function initMenuPreview() {
  if (!finePointer || prefersReducedMotion) return;

  const preview = $("#menu-preview");
  const previewImg = $("#menu-preview-img");
  const cursor = $("#cursor");
  if (!preview || !previewImg) return;

  document.addEventListener("mouseover", (e) => {
    const item = e.target.closest(".menu-item");
    if (!item) return;
    previewImg.src = item.getAttribute("data-img");
    preview.classList.add("is-visible");
    cursor?.classList.add("is-hidden");
  });

  document.addEventListener("mouseout", (e) => {
    const item = e.target.closest(".menu-item");
    if (!item) return;
    if (e.relatedTarget && item.contains(e.relatedTarget)) return;
    preview.classList.remove("is-visible");
    cursor?.classList.remove("is-hidden");
  });

  window.addEventListener("mousemove", (e) => {
    gsap.to(preview, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power3.out" });
  });
}

/* ============================== REVIEWS: RAIL + DOTS ============================== */
function initTestimonialRail() {
  const rail = $("#testimonials-grid");
  const dots = $("#testimonials-dots");
  if (!rail || !dots) return;

  const buttons = $$("button", dots);

  const cardAt = (i) => rail.children[i];

  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const card = cardAt(i);
      if (!card) return;
      rail.scrollTo({ left: card.offsetLeft - rail.offsetLeft, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });

  const sync = () => {
    if (!railMq.matches) return;
    const center = rail.scrollLeft + rail.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(rail.children).forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - rail.offsetLeft + card.offsetWidth / 2 - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    buttons.forEach((b, i) => b.classList.toggle("is-active", i === best));
  };

  rail.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
  window.addEventListener("resize", debounce(sync, 150));
  sync();
}

/* ============================== GALLERY LIGHTBOX ============================== */
function initLightbox() {
  const lightbox = $("#lightbox");
  const grid = $("#gallery-grid");
  if (!lightbox || !grid) return;

  const imgEl = lightbox.querySelector(".lightbox__img");
  const closeBtn = lightbox.querySelector(".lightbox__close");
  const prevBtn = lightbox.querySelector(".lightbox__nav--prev");
  const nextBtn = lightbox.querySelector(".lightbox__nav--next");
  const counter = $("#lightbox-counter");
  const altEl = $("#lightbox-alt");
  const thumbs = $("#lightbox-thumbs");

  let currentIndex = 0;
  let lastFocused = null;
  let wheelLock = false;

  if (thumbs) {
    thumbs.innerHTML = CONFIG.gallery
      .map(
        (p, i) =>
          `<button type="button" class="lightbox__thumb" data-index="${i}" aria-label="Image ${i + 1}">` +
          `<img src="${esc(p.src.replace(/([?&])w=\d+/, "$1w=160"))}" alt="" loading="lazy" /></button>`
      )
      .join("");

    thumbs.addEventListener("click", (e) => {
      const btn = e.target.closest(".lightbox__thumb");
      if (btn) goTo(Number(btn.getAttribute("data-index")));
    });
  }

  function paintMeta() {
    const photo = CONFIG.gallery[currentIndex];
    if (counter) counter.textContent = `${currentIndex + 1} / ${CONFIG.gallery.length}`;
    if (altEl) altEl.textContent = photo.alt;

    $$(".lightbox__thumb", thumbs || document).forEach((t, i) => {
      const on = i === currentIndex;
      t.classList.toggle("is-active", on);
      if (on) t.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    });
  }

  function goTo(index) {
    const total = CONFIG.gallery.length;
    currentIndex = (index + total) % total;
    const photo = CONFIG.gallery[currentIndex];

    imgEl.classList.add("is-switching");
    window.setTimeout(() => {
      imgEl.src = photo.src;
      imgEl.alt = photo.alt;
      imgEl.classList.remove("is-switching");
    }, 170);

    paintMeta();
  }

  function open(index) {
    lastFocused = document.activeElement;
    currentIndex = (index + CONFIG.gallery.length) % CONFIG.gallery.length;
    const photo = CONFIG.gallery[currentIndex];
    imgEl.src = photo.src;
    imgEl.alt = photo.alt;
    paintMeta();

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lockScroll(true);
    closeBtn?.focus({ preventScroll: true });
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lockScroll(false);
    lastFocused?.focus({ preventScroll: true });
  }

  const show = (delta) => goTo(currentIndex + delta);

  grid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (item) open(Number(item.getAttribute("data-index")));
  });

  closeBtn?.addEventListener("click", close);
  nextBtn?.addEventListener("click", () => show(1));
  prevBtn?.addEventListener("click", () => show(-1));

  lightbox.addEventListener("click", (e) => {
    // clicking the backdrop (not the image, buttons or thumbnails) closes it
    if (e.target === lightbox || e.target.classList.contains("lightbox__stage")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (e.key === "Escape") { close(); return; }
    if (e.key === "ArrowRight") { show(1); return; }
    if (e.key === "ArrowLeft") { show(-1); return; }

    // focus must not escape the modal
    if (e.key === "Tab") {
      const focusables = $$("button", lightbox).filter((el) => el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  lightbox.addEventListener(
    "wheel",
    (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      e.preventDefault();
      if (wheelLock) return;
      wheelLock = true;
      show(e.deltaY > 0 ? 1 : -1);
      window.setTimeout(() => { wheelLock = false; }, 400);
    },
    { passive: false }
  );

  // touch swipe
  let touchX = 0;
  let touchY = 0;
  lightbox.addEventListener("touchstart", (e) => {
    touchX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    // the horizontal movement has to clearly dominate so we don't catch stray drags
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) show(dx < 0 ? 1 : -1);
  }, { passive: true });
}

/* ============================== LIVE STATUS (OPEN/CLOSED) ============================== */
function computeStatus(now) {
  now = now || new Date();
  const today = CONFIG.schedule[now.getDay()];
  if (!today) return { open: false, label: "Closed" };

  const [oh, om] = today.open.split(":").map(Number);
  const [ch, cm] = today.close.split(":").map(Number);
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const openMins = oh * 60 + om;
  const closeMins = ch * 60 + cm;
  const isOpen = nowMins >= openMins && nowMins < closeMins;

  return {
    open: isOpen,
    label: isOpen ? `Open · until ${fmtTime(today.close)}` : `Closed · opens ${fmtTime(today.open)}`,
  };
}

function initStatusBadge() {
  const badges = $$(".status-badge");
  if (!badges.length) return;

  function refresh() {
    const status = computeStatus();
    badges.forEach((badge) => {
      badge.classList.toggle("is-open", status.open);
      badge.classList.toggle("is-closed", !status.open);
      const label = badge.querySelector(".status-badge__label");
      if (label) label.textContent = status.label;
    });
  }

  refresh();
  window.setInterval(refresh, 60000);
}

/* ============================== PROGRESS / BREW / BACK TO TOP ============================== */
function initScrollFx() {
  const brew = $("#brew");
  const toTop = $("#to-top");
  const bar = $("#progress-bar");

  let ticking = false;

  function update() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(Math.max(y / max, 0), 1) : 0;

    if (bar) bar.style.width = `${(pct * 100).toFixed(2)}%`;

    if (brew) {
      brew.style.setProperty("--pct", pct.toFixed(3));
      brew.classList.toggle("is-visible", y > 120);
      brew.classList.toggle("is-full", pct > 0.97);
    }
    if (toTop) toTop.classList.toggle("is-visible", y > 600);

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", debounce(update, 150));

  toTop?.addEventListener("click", () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  update();
}

/* ============================== BOOKING (mailto + validation) ============================== */
function initReservationForm() {
  const form = $("#reservation-form");
  if (!form) return;

  const hint = $("#rform-hint");
  const dateInput = form.querySelector('input[name="date"]');

  // you can't book a table for yesterday
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

  const MESSAGES = {
    name: "Please enter your full name.",
    guests: "Please enter the number of guests (1–20).",
    date: "Please pick a date.",
    time: "Please pick a time.",
    phone: "Please enter a phone number so we can confirm.",
  };

  function setError(field, message) {
    const input = form.querySelector(`[name="${field}"]`);
    const err = form.querySelector(`[data-err="${field}"]`);
    if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
    if (err) {
      err.textContent = message || "";
      err.classList.toggle("is-shown", Boolean(message));
    }
  }

  function validate() {
    const data = new FormData(form);
    const errors = [];

    Object.keys(MESSAGES).forEach((field) => {
      const value = (data.get(field) || "").toString().trim();
      let message = "";

      if (!value) message = MESSAGES[field];
      else if (field === "guests" && (Number(value) < 1 || Number(value) > 20)) message = MESSAGES.guests;
      else if (field === "phone" && value.replace(/\D/g, "").length < 6) message = "That phone number looks incomplete.";

      setError(field, message);
      if (message) errors.push(field);
    });

    return errors;
  }

  // the error clears the moment the guest starts fixing it
  form.addEventListener("input", (e) => {
    const name = e.target.name;
    if (name && e.target.getAttribute("aria-invalid") === "true") setError(name, "");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length) {
      form.classList.remove("is-sent");
      if (hint) hint.textContent = "Please check the highlighted fields before sending.";
      form.querySelector(`[name="${errors[0]}"]`)?.focus();
      return;
    }

    const data = new FormData(form);
    const get = (k) => (data.get(k) || "").toString().trim();

    const subject = encodeURIComponent(`Table booking — ${get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${get("name")}`,
        `Guests: ${get("guests")}`,
        `Date: ${get("date")}`,
        `Time: ${get("time")}`,
        `Phone: ${get("phone")}`,
        `Note: ${get("note") || "—"}`,
      ].join("\n")
    );

    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    form.classList.add("is-sent");
    if (hint) hint.textContent = "Your email app is open — just hit send.";
  });
}

/* ============================== SMOOTH ANCHOR SCROLL ============================== */
function initSmoothAnchors() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || id.length < 2) return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    const offset = -(document.querySelector(".site-header")?.offsetHeight || 74) - 12;

    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset, duration: 1.3 });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  });
}
