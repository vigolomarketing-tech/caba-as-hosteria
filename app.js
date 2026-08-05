/* =========================================================================
   app.js — Lógica de la demo. No hace falta tocar esto para rebrandear:
   todo el contenido vive en data.js.
   ========================================================================= */
(function () {
  "use strict";

  /* ---- Estado ---- */
  let lang = CONFIG.idiomaInicial || "es";

  /* ---- Íconos SVG inline (sin librerías) ---- */
  const ICONS = {
    tag: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4 12 22l-9-9V4a1 1 0 0 1 1-1h8l8.6 8.6a1.4 1.4 0 0 1 0 1.8Z"/><circle cx="7.5" cy="7.5" r="1.3"/></svg>',
    calendar: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/></svg>',
    chat: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.4 7.2L3 21l1.8-6.6A8 8 0 1 1 21 12Z"/></svg>',
    lago: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 20 3-4 2.5 2L14 10l3 4 4 6"/><path d="M3 20h18"/><circle cx="17" cy="5.5" r="2.2"/></svg>',
    parrilla: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4c0 2 2 2 2 4s-2 2-2 4M11 4c0 2 2 2 2 4s-2 2-2 4M17 4c0 2 2 2 2 4s-2 2-2 4M4 15h16l-2 6H6l-2-6Z"/></svg>',
    lena: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3s3 3 3 6a3 3 0 0 1-6 0c0-1 .5-2 .5-2S9 9 8 10.5A5 5 0 1 0 16.5 13c-.6-3-4.5-4-4.5-10Z"/></svg>',
    wifi: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 9a15 15 0 0 1 19 0M5.5 12.5a10 10 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/></svg>',
    cochera: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 16v-4l1.8-4.2A2 2 0 0 1 8.6 6.5h6.8a2 2 0 0 1 1.8 1.3L19 12v4"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="19.5" r="1.3"/><circle cx="16.5" cy="19.5" r="1.3"/></svg>',
    ropa: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10v9h18v-9M3 10l2.5-4h13L21 10M3 10h18M8 10v3h8v-3"/></svg>',
    desayuno: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h13a4 4 0 0 1 0 8h-1M3 8v6a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4M7 3v2M10 3v2M13 3v2"/></svg>',
    mascota: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="10" r="1.8"/><circle cx="10.5" cy="6.5" r="1.8"/><circle cx="14.5" cy="6.5" r="1.8"/><circle cx="18.5" cy="10.5" r="1.8"/><path d="M8 16c1-2 3-3 4.5-3s3.5 1 4.5 3c.8 1.6-.4 3.4-2.2 3.2-1-.1-1.6-.5-2.3-.5s-1.3.4-2.3.5C8.4 19.4 7.2 17.6 8 16Z"/></svg>',
    users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2a3.2 3.2 0 0 1 0 6M17.5 20a5.5 5.5 0 0 0-2.7-4.7"/></svg>',
    ruler: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5 8.5 3 21 15.5 15.5 21 3 8.5Z"/><path d="M7.5 7.5 9 9M10.5 4.5 12 6M13.5 7.5 15 9M6.5 11.5 8 13"/></svg>',
    pin: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  };

  /* ---- Helpers ---- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const t = (key) => CONFIG.i18n[lang][key];               // texto de interfaz
  const tf = (obj) => (obj && obj[lang]) || (obj && obj.es) || ""; // campo {es,en,pt}

  function formatPrice(n) {
    // Formato con separador de miles según idioma.
    const locale = lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-AR";
    return CONFIG.i18n[lang].moneda + " " + n.toLocaleString(locale);
  }

  function waLink(message) {
    return "https://wa.me/" + CONFIG.negocio.whatsapp + "?text=" + encodeURIComponent(message);
  }

  /* =====================================================================
     RENDER de secciones (se re-ejecuta al cambiar idioma)
     ===================================================================== */

  function renderTrust() {
    $("#trustGrid").innerHTML = CONFIG.confianza.map((c) => `
      <div class="trust-item">
        ${ICONS[c.icono] || ""}
        <div>
          <h3>${tf(c.titulo)}</h3>
          <p>${tf(c.texto)}</p>
        </div>
      </div>`).join("");
  }

  function amenityChip(key) {
    const label = CONFIG.i18n[lang].amenities[key] || key;
    return `<span class="chip">${ICONS[key] || ""}${label}</span>`;
  }

  function renderCabins() {
    $("#cabinGrid").innerHTML = CONFIG.cabanas.map((cab, i) => {
      const cap = cab.capacidad;
      const capLabel = cap === 1 ? t("persona") : t("personas");
      return `
      <article class="cabin-card">
        <div class="cabin-photo">
          <img src="https://picsum.photos/seed/${cab.fotoSeed}/800/600"
               alt="Cabaña ${cab.nombre}" loading="lazy" width="800" height="600" />
          <div class="cabin-price-tag">${formatPrice(cab.precioDesde)} <small>/ ${t("porNoche")}</small></div>
        </div>
        <div class="cabin-body">
          <h3 class="cabin-name">${cab.nombre}</h3>
          <div class="cabin-meta">
            <span>${ICONS.users} ${t("hasta")} ${cap} ${capLabel}</span>
            <span>${ICONS.ruler} ${cab.m2} m²</span>
          </div>
          <p class="cabin-desc">${tf(cab.descripcionCorta)}</p>
          <div class="chips">${cab.amenities.map(amenityChip).join("")}</div>
          <div class="cabin-actions">
            <button type="button" class="btn btn-wood" data-open-cabin="${i}">${t("verMas")}</button>
            <a class="btn btn-primary" target="_blank" rel="noopener"
               href="${waLink(t("waCabana").replace("{cabana}", cab.nombre))}">${t("reservar")}</a>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  function renderZona() {
    $("#zonaMap").src = CONFIG.negocio.mapaEmbed;
    $("#zonaCards").innerHTML = CONFIG.zona.map((z) => `
      <div class="zona-card">
        <img src="https://picsum.photos/seed/${z.seed}/300/300" alt="${tf(z.nombre)}" loading="lazy" width="300" height="300" />
        <div class="zona-card-body">
          <h3>${tf(z.nombre)}</h3>
          <p>${tf(z.texto)}</p>
          <span class="zona-dist">${ICONS.pin} ${z.minutos} ${t("aMinutos")}</span>
        </div>
      </div>`).join("");
  }

  function stars(n) {
    return "★".repeat(n) + "☆".repeat(Math.max(0, 5 - n));
  }

  function renderReviews() {
    $("#reviewGrid").innerHTML = CONFIG.resenas.map((r) => `
      <div class="review-card">
        <div class="review-stars" aria-label="${r.estrellas} / 5">${stars(r.estrellas)}</div>
        <p class="review-text">“${tf(r.texto)}”</p>
        <div class="review-author">
          <span class="flag" aria-hidden="true">${r.bandera}</span>
          <span>${r.nombre}<small>${tf(r.pais)}</small></span>
        </div>
      </div>`).join("");
  }

  function renderFaq() {
    $("#faqList").innerHTML = CONFIG.faq.map((f, i) => `
      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
          <span>${tf(f.pregunta)}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-a" id="faq-a-${i}" role="region">
          <div class="faq-a-inner">${tf(f.respuesta)}</div>
        </div>
      </div>`).join("");

    // Acordeón
    $$("#faqList .faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const panel = $(".faq-a", item);
        const open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        panel.style.maxHeight = open ? panel.scrollHeight + "px" : null;
      });
    });
  }

  function renderStatic() {
    const n = CONFIG.negocio;
    // Nombre y slogan (varios lugares)
    $$("[data-nombre]").forEach((el) => (el.textContent = n.nombre));
    $$("[data-slogan]").forEach((el) => (el.textContent = tf(n.slogan)));
    // Textos de interfaz por [data-i18n]
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (CONFIG.i18n[lang][key] != null) el.textContent = CONFIG.i18n[lang][key];
    });
    // Footer / contacto
    $("#footerWa").href = waLink(t("waGeneral"));
    $("#footerMail").href = "mailto:" + n.email;
    $("#footerMail").textContent = n.email;
    $("#footerTel").textContent = n.telefonoVisible;
    $("#footerDir").textContent = n.direccion;
    $("#footerComoLlegar").href = n.mapaLink;
    $("#footerIg").href = n.redes.instagram;
    $("#footerFb").href = n.redes.facebook;
    // WhatsApp flotante
    $("#waFloat").href = waLink(t("waGeneral"));
    $("#year").textContent = new Date().getFullYear();
    // Atributo lang del documento
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }

  function renderAll() {
    renderStatic();
    renderTrust();
    renderCabins();
    renderZona();
    renderReviews();
    renderFaq();
  }

  /* =====================================================================
     MODAL de cabaña
     ===================================================================== */
  const modal = $("#cabinModal");

  function openCabin(i) {
    const cab = CONFIG.cabanas[i];
    const capLabel = cab.capacidad === 1 ? t("persona") : t("personas");
    $("#modalBody").innerHTML = `
      <div class="modal-gallery">
        ${cab.galeriaSeeds.map((s, idx) => `
          <img src="https://picsum.photos/seed/${s}/800/600" alt="${cab.nombre} — ${t("galeria")} ${idx + 1}" loading="lazy" width="800" height="600" />
        `).join("")}
      </div>
      <div class="modal-content">
        <h3 class="modal-title" id="modalTitle">${cab.nombre}</h3>
        <div class="modal-meta">
          <span>${ICONS.users} ${t("hasta")} ${cab.capacidad} ${capLabel}</span>
          <span>${ICONS.ruler} ${cab.m2} m²</span>
        </div>
        <p class="modal-price">${t("desde")} ${formatPrice(cab.precioDesde)} <small>/ ${t("porNoche")}</small></p>
        <p class="modal-desc">${tf(cab.descripcionLarga)}</p>
        <div class="chips">${cab.amenities.map(amenityChip).join("")}</div>
        <div class="cabin-actions">
          <a class="btn btn-primary btn-block" target="_blank" rel="noopener"
             href="${waLink(t("waCabana").replace("{cabana}", cab.nombre))}">${t("reservar")}</a>
        </div>
      </div>`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    $(".modal-close", modal).focus();
  }

  function closeCabin() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  // Delegación: abrir modal desde botones "Ver más"
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open-cabin]");
    if (openBtn) { openCabin(Number(openBtn.getAttribute("data-open-cabin"))); return; }
    if (e.target.closest("[data-close-modal]")) closeCabin();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeCabin();
  });

  /* =====================================================================
     BUSCADOR del hero -> WhatsApp con fechas
     ===================================================================== */
  function setupSearch() {
    const form = $("#searchBox");
    const err = $("#searchError");
    const checkin = $("#checkin");
    const checkout = $("#checkout");

    // Mínimo = hoy, para no elegir fechas pasadas.
    const today = new Date().toISOString().split("T")[0];
    checkin.min = today;
    checkout.min = today;
    checkin.addEventListener("change", () => { checkout.min = checkin.value || today; });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      err.textContent = "";
      if (!checkin.value || !checkout.value) { err.textContent = t("errorFechas"); return; }
      if (checkout.value <= checkin.value) { err.textContent = t("errorOrden"); return; }

      const msg = t("waBuscador")
        .replace("{checkin}", formatDate(checkin.value))
        .replace("{checkout}", formatDate(checkout.value))
        .replace("{huespedes}", $("#huespedes").value);
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  function formatDate(iso) {
    // iso = YYYY-MM-DD -> DD/MM/YYYY (legible en el mensaje)
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }

  /* =====================================================================
     SELECTOR DE IDIOMA
     ===================================================================== */
  function setupLang() {
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        lang = btn.getAttribute("data-lang");
        $$(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
        renderAll();
      });
    });
  }

  /* =====================================================================
     HEADER: sombra sutil al hacer scroll (sin animaciones pesadas)
     ===================================================================== */
  function setupHeaderShadow() {
    const header = $("#siteHeader");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* =====================================================================
     INIT
     ===================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    // Marca el botón de idioma inicial correcto.
    $$(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"));
    renderAll();
    setupSearch();
    setupLang();
    setupHeaderShadow();
  });
})();
