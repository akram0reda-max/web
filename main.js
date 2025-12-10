// =======================
// بيانات اللغات والمودات
// =======================
const siteData = {
  ar: {
    dir: "rtl",
    brandSubtitle: "الموقع الرسمي لمودات Fer3on_Mod",
    langShort: "AR",
    statusTitle: "الخادم يعمل بكفاءة",
    statusText:
      "روابط التحميل الرسمية متاحة حاليًا. لا تستخدم أي روابط خارجة عن Bull Mods.",
    heroPill: "Bull Mods الرسمي",
    heroTitle: "مودات جاهزة، تجربة لعب مختلفة بالكامل.",
    heroText:
      "انضم لآلاف اللاعبين الذين يستخدمون Bull Mods لتحسين الأداء والجرافيك والتحكم في كل تفاصيل اللعب من مكان واحد وبشكل آمن.",
    ctaButton: "تحميل الحزمة الرئيسية",
    discordButton: "الانضمام إلى Discord",
    ctaNote:
      "يُفضّل تشغيل اللعبة بنسخة أصلية للحصول على أفضل أداء وثبات مع المودات.",
    heroSafe: "روابط تحميل مباشرة بدون إعلانات منبثقة أو اختصارات مزعجة.",
    heroVersion: "يتم تحديث المودات بمجرد صدور نسخ جديدة من اللعبة.",
    updatesTitle: "آخر التحديثات",
    updatesHint:
      "تابع قناة Telegram أو Discord لمعرفة أي تحديثات حرجة للمودات.",
    modsTitle: "المودات المتاحة",
    modsSubtitle:
      "هذه هي قائمة المودات الرسمية من Bull Mods. يمكنك تعديل البيانات أو إضافة مودات جديدة بسهولة من هذا الملف.",
    filterAll: "جميع المودات",
    filterStable: "نسخ مستقرة فقط",
    filterBeta: "نسخ تجريبية",
    communityTitle: "المجتمع والدعم",
    communityText:
      "إذا واجهت مشاكل في التثبيت أو تريد إعدادات خاصة لجهازك، يمكنك التواصل مع فريق Bull Mods والمجتمع من خلال Discord أو Telegram.",
    installTitle: "خطوات تثبيت سريعة",
    installStep1:
      "حمّل الملف المضغوط (ZIP) من الروابط الرسمية في هذه الصفحة فقط.",
    installStep2:
      "فك الضغط وانسخ ملفات المود إلى مجلد اللعبة حسب الشرح المرفق داخل الملف.",
    installStep3:
      "شغّل اللعبة وتأكد من تفعيل المود والإعدادات المقترحة من داخل قائمة المود.",
    footerTelegram: "قناة Telegram الرسمية",
    footerAbout: "تعرف على الفريق",
    footerCopy: "© Bull Mods - جميع الحقوق محفوظة.",
    footerDisclaimer:
      "استخدام المودات يكون على مسؤوليتك الشخصية حسب قوانين اللعبة والمنصة.",
    footerMadeBy: "تم التطوير بواسطة Fer3on_Mod & Bull Mods Team",

    updates: [
      {
        title: "تحديث Performance Pack إلى v2.3.1",
        meta: "إصلاح مشاكل FPS في بعض الخرائط + إعدادات جاهزة للـ Ranked.",
        date: "2025-01-20",
        important: true,
      },
      {
        title: "تحسين Visual Enhancer v1.4.0",
        meta: "تحسين الإضاءة الليلة ودعم أفضل للأجهزة المتوسطة.",
        date: "2024-12-10",
        important: false,
      },
      {
        title: "إطلاق واجهة Support Bot UI",
        meta: "لوحة تحكم ويب خفيفة لدعم المستخدمين وتتبّع المشاكل.",
        date: "2024-11-05",
        important: false,
      },
    ],

    mods: [
      {
        id: "perf-pack",
        name: "Bull Mod - Performance Pack",
        game: "Game XYZ",
        version: "v2.3.1",
        description:
          "حزمة تحسين أداء شاملة: زيادة FPS، تقليل اللاج، وإعدادات جاهزة للعب التنافسي.",
        tags: ["أداء", "FPS", "Tweaks"],
        downloadUrl: "https://example.com/performance-pack.zip",
        size: "7.8 MB",
        updatedAt: "2025-01-20",
        status: "beta",
      },
      {
        id: "visual-enhancer",
        name: "Bull Mod - Visual Enhancer",
        game: "Game XYZ",
        version: "v1.4.0",
        description:
          "تحسينات جرافيك وإضاءة وألوان مع الحفاظ على أداء مستقر للأجهزة المتوسطة.",
        tags: ["جرافيك", "Visual", "Reshade"],
        downloadUrl: "https://example.com/visual-enhancer.zip",
        size: "12.1 MB",
        updatedAt: "2024-12-10",
        status: "stable",
      },
      {
        id: "support-bot-ui",
        name: "Bull Mod - Support Bot UI",
        game: "متعدد",
        version: "v1.0.0",
        description:
          "واجهة ويب خفيفة للتعامل مع بوت الدعم الخاص بـ Bull Mods مع تحميل سريع.",
        tags: ["Support", "Web"],
        downloadUrl: "https://example.com/support-bot-ui.zip",
        size: "3.4 MB",
        updatedAt: "2024-11-05",
        status: "stable",
      },
    ],
  },

  en: {
    dir: "ltr",
    brandSubtitle: "Official mod hub by Fer3on_Mod",
    langShort: "EN",
    statusTitle: "Servers are healthy",
    statusText:
      "Official download links are online. Avoid any mirrors that are not linked from Bull Mods.",
    heroPill: "Official Bull Mods",
    heroTitle: "Ready-made mods for a next-level game experience.",
    heroText:
      "Join thousands of players who use Bull Mods to boost performance, visuals and control every detail of their gameplay from a single safe place.",
    ctaButton: "Download main pack",
    discordButton: "Join Discord",
    ctaNote:
      "For the best results, we recommend using an original game copy with no extra cracks.",
    heroSafe:
      "Direct download links only. No pop-up ads, link shorteners or hidden installers.",
    heroVersion:
      "Mods are updated quickly when new game versions are released.",
    updatesTitle: "Latest updates",
    updatesHint:
      "Follow our Telegram channel or Discord server for critical update notices.",
    modsTitle: "Available mods",
    modsSubtitle:
      "These are the official Bull Mods. You can add or edit entries directly in main.js.",
    filterAll: "All mods",
    filterStable: "Stable only",
    filterBeta: "Beta only",
    communityTitle: "Community & support",
    communityText:
      "If you run into issues while installing, or need a custom setup for your PC, you can reach the Bull Mods team and community via Discord or Telegram.",
    installTitle: "Quick install steps",
    installStep1:
      "Download the ZIP file from the official links on this page only.",
    installStep2:
      "Extract the archive and copy the mod files into your game folder as explained in the included guide.",
    installStep3:
      "Launch the game and make sure the mod and recommended settings are enabled in the mod menu.",
    footerTelegram: "Official Telegram channel",
    footerAbout: "Meet the team",
    footerCopy: "© Bull Mods - All rights reserved.",
    footerDisclaimer:
      "You are responsible for using mods in compliance with the game and platform terms.",
    footerMadeBy: "Built by Fer3on_Mod & Bull Mods Team",

    updates: [
      {
        title: "Performance Pack updated to v2.3.1",
        meta: "Fixed FPS drops on some maps + new ranked-ready presets.",
        date: "2025-01-20",
        important: true,
      },
      {
        title: "Visual Enhancer v1.4.0 improvements",
        meta: "Better night lighting and more stable frame times on mid-range PCs.",
        date: "2024-12-10",
        important: false,
      },
      {
        title: "Support Bot UI release",
        meta: "Lightweight web panel for support team and bug tracking.",
        date: "2024-11-05",
        important: false,
      },
    ],

    mods: [
      {
        id: "perf-pack",
        name: "Bull Mod - Performance Pack",
        game: "Game XYZ",
        version: "v2.3.1",
        description:
          "Full performance overhaul: higher FPS, reduced stutter and ready-to-use competitive presets.",
        tags: ["Performance", "FPS", "Tweaks"],
        downloadUrl: "https://example.com/performance-pack.zip",
        size: "7.8 MB",
        updatedAt: "2025-01-20",
        status: "beta",
      },
      {
        id: "visual-enhancer",
        name: "Bull Mod - Visual Enhancer",
        game: "Game XYZ",
        version: "v1.4.0",
        description:
          "Improved graphics, lighting and colors while staying friendly to mid-range PCs.",
        tags: ["Graphics", "Visual", "Reshade"],
        downloadUrl: "https://example.com/visual-enhancer.zip",
        size: "12.1 MB",
        updatedAt: "2024-12-10",
        status: "stable",
      },
      {
        id: "support-bot-ui",
        name: "Bull Mod - Support Bot UI",
        game: "Multi-platform",
        version: "v1.0.0",
        description:
          "Lightweight web UI for the Bull Mods support bot with fast loading and a clean layout.",
        tags: ["Support", "Web"],
        downloadUrl: "https://example.com/support-bot-ui.zip",
        size: "3.4 MB",
        updatedAt: "2024-11-05",
        status: "stable",
      },
    ],
  },

  fr: {
    dir: "ltr",
    brandSubtitle: "Centre officiel de mods par Fer3on_Mod",
    langShort: "FR",
    statusTitle: "Serveurs stables",
    statusText:
      "Les liens officiels de téléchargement sont en ligne. Évitez les miroirs non référencés par Bull Mods.",
    heroPill: "Bull Mods officiel",
    heroTitle: "Des mods prêts à l’emploi pour une expérience de jeu avancée.",
    heroText:
      "Rejoignez des milliers de joueurs qui utilisent Bull Mods pour optimiser les performances, les graphismes et chaque détail de leur gameplay.",
    ctaButton: "Télécharger le pack principal",
    discordButton: "Rejoindre Discord",
    ctaNote:
      "Pour une meilleure expérience, nous recommandons d’utiliser une copie originale du jeu.",
    heroSafe:
      "Liens directs seulement. Pas de pop-ups, de raccourcisseurs ni d’installateurs cachés.",
    heroVersion:
      "Les mods sont mis à jour rapidement à chaque nouvelle version du jeu.",
    updatesTitle: "Dernières mises à jour",
    updatesHint:
      "Suivez notre chaîne Telegram ou notre serveur Discord pour les annonces critiques.",
    modsTitle: "Mods disponibles",
    modsSubtitle:
      "Voici la collection officielle Bull Mods. Vous pouvez modifier ou ajouter des entrées directement dans main.js.",
    filterAll: "Tous les mods",
    filterStable: "Stable uniquement",
    filterBeta: "Bêta uniquement",
    communityTitle: "Communauté & support",
    communityText:
      "Si vous rencontrez des problèmes lors de l’installation ou avez besoin d’un réglage personnalisé, contactez l’équipe Bull Mods via Discord ou Telegram.",
    installTitle: "Étapes d’installation rapides",
    installStep1:
      "Téléchargez l’archive ZIP à partir des liens officiels de cette page uniquement.",
    installStep2:
      "Extrayez l’archive et copiez les fichiers du mod dans le dossier du jeu comme indiqué dans le guide joint.",
    installStep3:
      "Lancez le jeu et vérifiez que le mod et les réglages recommandés sont activés.",
    footerTelegram: "Chaîne Telegram officielle",
    footerAbout: "Découvrir l’équipe",
    footerCopy: "© Bull Mods - Tous droits réservés.",
    footerDisclaimer:
      "Vous êtes responsable de l’utilisation des mods conformément aux règles du jeu et de la plateforme.",
    footerMadeBy: "Développé par Fer3on_Mod & Bull Mods Team",

    updates: [
      {
        title: "Performance Pack mis à jour en v2.3.1",
        meta: "Correction des chutes de FPS sur certaines cartes + presets compétitifs.",
        date: "2025-01-20",
        important: true,
      },
      {
        title: "Améliorations Visual Enhancer v1.4.0",
        meta: "Meilleure gestion des scènes nocturnes et plus de stabilité.",
        date: "2024-12-10",
        important: false,
      },
      {
        title: "Lancement de Support Bot UI",
        meta: "Panneau web léger pour le support et le suivi des bugs.",
        date: "2024-11-05",
        important: false,
      },
    ],

    mods: [
      {
        id: "perf-pack",
        name: "Bull Mod - Performance Pack",
        game: "Jeu XYZ",
        version: "v2.3.1",
        description:
          "Pack d’optimisation complet : plus de FPS, moins de lag et presets prêts pour la compétition.",
        tags: ["Performance", "FPS", "Tweaks"],
        downloadUrl: "https://example.com/performance-pack.zip",
        size: "7.8 Mo",
        updatedAt: "2025-01-20",
        status: "beta",
      },
      {
        id: "visual-enhancer",
        name: "Bull Mod - Visual Enhancer",
        game: "Jeu XYZ",
        version: "v1.4.0",
        description:
          "Graphismes, éclairage et couleurs améliorés tout en restant adaptés aux PC milieu de gamme.",
        tags: ["Graphismes", "Visuel", "Reshade"],
        downloadUrl: "https://example.com/visual-enhancer.zip",
        size: "12.1 Mo",
        updatedAt: "2024-12-10",
        status: "stable",
      },
      {
        id: "support-bot-ui",
        name: "Bull Mod - Support Bot UI",
        game: "Multi-plateforme",
        version: "v1.0.0",
        description:
          "Interface web légère pour le bot de support Bull Mods avec chargement rapide.",
        tags: ["Support", "Web"],
        downloadUrl: "https://example.com/support-bot-ui.zip",
        size: "3.4 Mo",
        updatedAt: "2024-11-05",
        status: "stable",
      },
    ],
  },
};

// ==============
// عناصر DOM
// ==============
const langMenu = document.getElementById("langMenu");
const langButton = document.getElementById("langButton");
const themeToggle = document.getElementById("themeToggle");
const modsGrid = document.getElementById("modsGrid");
const modsFilter = document.getElementById("modsFilter");
const updatesList = document.getElementById("updatesList");

let currentLang = "ar";
let currentTheme = "dark";

// ====================
// Helpers
// ====================
function statusClass(status) {
  switch (status) {
    case "beta":
      return "mod-status mod-status-beta";
    case "broken":
      return "mod-status mod-status-broken";
    case "stable":
    default:
      return "mod-status mod-status-stable";
  }
}

function statusLabel(status, lang) {
  if (lang === "ar") {
    if (status === "beta") return "تجريبي";
    if (status === "broken") return "مكسور";
    return "مستقر";
  }
  if (lang === "fr") {
    if (status === "beta") return "BÊTA";
    if (status === "broken") return "CASSÉ";
    return "STABLE";
  }
  // en
  if (status === "beta") return "BETA";
  if (status === "broken") return "BROKEN";
  return "STABLE";
}

function t(key) {
  const data = siteData[currentLang];
  return data && data[key] ? data[key] : key;
}

// ==============
// Render functions
// ==============
function renderUpdates() {
  const data = siteData[currentLang];
  updatesList.innerHTML = "";

  data.updates.forEach((u) => {
    const li = document.createElement("li");
    li.className = "update-item" + (u.important ? " is-important" : "");
    li.innerHTML = `
      <span class="update-title">${u.title}</span>
      <span class="update-meta">${u.date} • ${u.meta}</span>
    `;
    updatesList.appendChild(li);
  });
}

function renderMods() {
  const data = siteData[currentLang];
  const filter = modsFilter.value;
  modsGrid.innerHTML = "";

  let mods = data.mods || [];
  if (filter === "stable") {
    mods = mods.filter((m) => m.status === "stable");
  } else if (filter === "beta") {
    mods = mods.filter((m) => m.status === "beta");
  }

  mods.forEach((mod) => {
    const card = document.createElement("article");
    card.className = "mod-card";

    const sizeLabel =
      currentLang === "ar"
        ? "الحجم"
        : currentLang === "fr"
        ? "Taille"
        : "Size";

    const updatedLabel =
      currentLang === "ar"
        ? "آخر تحديث"
        : currentLang === "fr"
        ? "Dernière maj"
        : "Updated";

    const versionLabel =
      currentLang === "ar"
        ? "الإصدار"
        : currentLang === "fr"
        ? "Version"
        : "Version";

    const downloadLabel =
      currentLang === "ar"
        ? "تحميل المود"
        : currentLang === "fr"
        ? "Télécharger"
        : "Download mod";

    const directLinkLabel =
      currentLang === "ar"
        ? "رابط مباشر"
        : currentLang === "fr"
        ? "Lien direct"
        : "Direct link";

    card.innerHTML = `
      <div class="mod-header">
        <div>
          <div class="mod-title">${mod.name}</div>
          <div class="mod-game">
            ${mod.game} • ${versionLabel} ${mod.version}
          </div>
        </div>
        <div class="${statusClass(mod.status)}">
          ${statusLabel(mod.status, currentLang)}
        </div>
      </div>
      <p class="mod-desc">${mod.description}</p>
      <div class="mod-meta">
        <span>${sizeLabel}: ${mod.size}</span>
        <span>${updatedLabel}: ${mod.updatedAt}</span>
      </div>
      <div class="mod-tags">
        ${(mod.tags || [])
          .map((tag) => `<span class="mod-tag">${tag}</span>`)
          .join("")}
      </div>
      <div class="mod-download">
        <a href="${mod.downloadUrl}" target="_blank" rel="noopener noreferrer" class="mod-download-btn">
          ${downloadLabel}
        </a>
        <div class="mod-download-note">${directLinkLabel}</div>
      </div>
    `;

    modsGrid.appendChild(card);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  const data = siteData[lang];
  const html = document.documentElement;

  html.lang = lang;
  html.dir = data.dir || "rtl";

  // عناصر مترجمة
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (data[key]) {
      el.textContent = data[key];
    }
  });

  // تحديث مختصر اللغة على الزر
  const spanLabel = langButton.querySelector(".icon-btn-label");
  if (spanLabel && data.langShort) {
    spanLabel.textContent = data.langShort;
  }

  // تفعيل الزر في القائمة
  langMenu.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // إعادة بناء المودات والتحديثات
  renderUpdates();
  renderMods();

  // حفظ في localStorage
  try {
    localStorage.setItem("bullmods_lang", lang);
  } catch (_) {
    // تجاهل
  }
}

// ==============
// Theme handling
// ==============
function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.classList.add("light-theme");
    currentTheme = "light";
    themeToggle.textContent = "☀";
  } else {
    root.classList.remove("light-theme");
    currentTheme = "dark";
    themeToggle.textContent = "☾";
  }

  try {
    localStorage.setItem("bullmods_theme", currentTheme);
  } catch (_) {
    // تجاهل
  }
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

// ==============
// أحداث الواجهة
// ==============
document.addEventListener("DOMContentLoaded", () => {
  // استرجاع التفضيلات إن وجدت
  try {
    const savedLang = localStorage.getItem("bullmods_lang");
    if (savedLang && siteData[savedLang]) {
      currentLang = savedLang;
    }
    const savedTheme = localStorage.getItem("bullmods_theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      currentTheme = savedTheme;
    }
  } catch (_) {
    // تجاهل
  }

  // تطبيق الثيم واللغة
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // زر تغيير اللغة (فتح/إغلاق القائمة)
  langButton.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });

  // اختيار لغة من القائمة
  langMenu.addEventListener("click", (e) => {
    const lang = e.target.dataset.lang;
    if (!lang) return;
    applyLanguage(lang);
    langMenu.classList.remove("open");
  });

  // إغلاق القائمة عند الضغط خارجها
  document.addEventListener("click", (e) => {
    if (!langMenu.contains(e.target) && e.target !== langButton) {
      langMenu.classList.remove("open");
    }
  });

  // تبديل الثيم
  themeToggle.addEventListener("click", toggleTheme);

  // فلتر المودات
  modsFilter.addEventListener("change", renderMods);
});
