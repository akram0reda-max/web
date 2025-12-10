// ========= بيانات المحتوى باللغتين =========
const siteData = {
  ar: {
    dir: "rtl",
    brandSubtitle: "الموقع الرسمي لمودات Fer3on_Mod",
    langShort: "AR",

    navMods: "المودات",
    navHowTo: "طريقة التثبيت",
    navCommunity: "المجتمع والدعم",

    heroBadge: "موقع رسمي • Bull Mods",
    heroTitle: "مودات مرتبة، تنزيل مباشر، تجربة لعب احترافية.",
    heroText:
      "كل ما تحتاجه من مودات Bull Mods في مكان واحد: روابط مباشرة، شرح واضح، وتحديثات مستمرة بدون تعقيد أو إعلانات مزعجة.",
    ctaButton: "تحميل الحزمة الرئيسية",
    discordButton: "الانضمام إلى Discord",
    heroNote:
      "يُفضّل تشغيل اللعبة بنسخة أصلية للحصول على أفضل أداء وثبات مع المودات.",
    heroSafe:
      "روابط مباشرة بدون إعلانات منبثقة أو اختصارات مزعجة في التحميل.",
    heroUpdates: "يتم تحديث المودات عند صدور نسخ جديدة من اللعبة.",

    panelLabel: "حالة المودات",
    panelTitle: "جاهزة للتحميل الآن",
    panelText:
      "كل الروابط في هذه الصفحة رسمية وآمنة. لا ننصح باستخدام أي ملفات من قنوات أو مواقع غير Bull Mods.",

    modsTitle: "المودات المتاحة",
    modsSubtitle:
      "اختر المود المناسب لجهازك وأسلوب لعبك. يمكنك تعديل قائمة المودات من هذا الملف بسهولة.",
    filterLabel: "عرض حسب:",
    filterAll: "كل المودات",
    filterStable: "المودات المستقرة",
    filterBeta: "المودات التجريبية",

    howTitle: "طريقة التثبيت",
    howText:
      "اتبع هذه الخطوات البسيطة لتثبيت المودات بدون مشاكل أو تعارضات مع اللعبة.",
    step1: "حمّل ملف المود بصيغة ZIP من الروابط الموجودة في هذه الصفحة فقط.",
    step2:
      "فك الضغط، ثم انقل المجلدات والملفات إلى مجلد اللعبة كما هو موضح في ملف الشرح المرفق.",
    step3:
      "افتح اللعبة، وفعّل المود من داخل قائمة الإعدادات الخاصة به إن وُجدت.",

    infoTitle: "نصائح قبل التثبيت",
    tip1: "احتفظ بنسخة احتياطية من ملفات اللعبة الأصلية قبل استبدال أي ملفات.",
    tip2:
      "تجنب تشغيل أكثر من مود يعدل نفس الجزء من اللعبة في نفس الوقت لتفادي الكراش.",
    tip3:
      "في حال حدوث مشكلة، جرّب تعطيل المودات واحدًا تلو الآخر لمعرفة المود المسبب للمشكلة.",

    communityTitle: "المجتمع والدعم",
    communityText:
      "لو واجهت أي مشكلة أثناء التثبيت أو اللعب، تواصل معنا على Discord أو Telegram لتحصل على مساعدة مباشرة.",
    footerTelegram: "قناة Telegram الرسمية",
    footerAbout: "تعرف على الفريق",
    supportTitle: "متى تتواصل معنا؟",
    support1: "إذا كان المود لا يعمل بعد اتباع خطوات التثبيت بشكل صحيح.",
    support2: "إذا كانت مواصفات جهازك خاصة وتحتاج إعدادات مخصصة.",
    support3: "إذا لاحظت رابط تحميل مكسور أو إصدار قديم في الصفحة.",

    footerCopy: "© Bull Mods - جميع الحقوق محفوظة.",
    footerDisclaimer:
      "استخدام المودات يكون على مسؤوليتك الشخصية حسب قوانين اللعبة والمنصة.",
    footerMadeBy: "تم التطوير بواسطة Fer3on_Mod & Bull Mods Team",

    updates: [
      {
        title: "تحديث Performance Pack إلى v2.3.1",
        meta: "إصلاح مشاكل FPS في بعض الخرائط + إعدادات جاهزة للـ Ranked.",
        date: "2025-01-20",
      },
      {
        title: "تحسين Visual Enhancer v1.4.0",
        meta: "تحسين الإضاءة الليلية ودعم أفضل للأجهزة المتوسطة.",
        date: "2024-12-10",
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
          "واجهة ويب خفيفة للتعامل مع بوت الدعم الخاص بـ Bull Mods.",
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

    navMods: "Mods",
    navHowTo: "How to install",
    navCommunity: "Community",

    heroBadge: "Official website • Bull Mods",
    heroTitle: "Clean mods, direct downloads, pro-level gameplay.",
    heroText:
      "All Bull Mods in one place: direct links, clear instructions and regular updates – no sketchy ads or confusing pages.",
    ctaButton: "Download main pack",
    discordButton: "Join Discord",
    heroNote:
      "For the best stability and performance, use an original copy of the game.",
    heroSafe:
      "Direct downloads only. No pop-up ads, link shorteners or hidden installers.",
    heroUpdates: "Mods are updated when new game versions come out.",

    panelLabel: "Mods status",
    panelTitle: "Ready to download",
    panelText:
      "All links on this page are official and safe. We do not recommend using files from other sources.",

    modsTitle: "Available mods",
    modsSubtitle:
      "Choose the right mod for your PC and playstyle. You can edit this list directly in main.js.",
    filterLabel: "Filter:",
    filterAll: "All mods",
    filterStable: "Stable only",
    filterBeta: "Beta only",

    howTitle: "How to install",
    howText:
      "Follow these simple steps to install mods safely and avoid conflicts with the game.",
    step1: "Download the ZIP file from the links on this page only.",
    step2:
      "Extract the archive, then copy the folders and files into your game directory as explained in the included guide.",
    step3:
      "Launch the game and enable the mod from its settings or dedicated menu if available.",

    infoTitle: "Tips before installing",
    tip1: "Always keep a backup of your original game files before replacing anything.",
    tip2:
      "Avoid running multiple mods that change the same part of the game at the same time.",
    tip3:
      "If you have issues, disable mods one by one to find which one is causing the problem.",

    communityTitle: "Community & support",
    communityText:
      "If you run into any issues while installing or playing, reach out via Discord or Telegram for direct help.",
    footerTelegram: "Official Telegram channel",
    footerAbout: "Meet the team",
    supportTitle: "When to contact us?",
    support1: "The mod does not work after following the steps correctly.",
    support2: "Your PC has special specs and you need a custom setup.",
    support3: "You find a broken download link or an outdated version.",

    footerCopy: "© Bull Mods - All rights reserved.",
    footerDisclaimer:
      "You are responsible for using mods in compliance with the game and platform terms.",
    footerMadeBy: "Built by Fer3on_Mod & Bull Mods Team",

    updates: [
      {
        title: "Performance Pack updated to v2.3.1",
        meta: "Fixed FPS drops on some maps and added ranked-ready presets.",
        date: "2025-01-20",
      },
      {
        title: "Visual Enhancer v1.4.0 improvements",
        meta: "Better night lighting and more stable performance.",
        date: "2024-12-10",
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
          "Lightweight web UI for the Bull Mods support bot with a clean layout.",
        tags: ["Support", "Web"],
        downloadUrl: "https://example.com/support-bot-ui.zip",
        size: "3.4 MB",
        updatedAt: "2024-11-05",
        status: "stable",
      },
    ],
  },
};

// ========= حالة اللغة والثيم =========
let currentLang = "ar";
let currentTheme = "light";

// ========= DOM =========
const langButton = document.getElementById("langButton");
const langMenu = document.getElementById("langMenu");
const themeToggle = document.getElementById("themeToggle");
const modsGrid = document.getElementById("modsGrid");
const modsFilter = document.getElementById("modsFilter");
const updatesList = document.getElementById("updatesList");

// ========= Helpers =========
function statusClass(status) {
  if (status === "beta") return "mod-status mod-status-beta";
  if (status === "broken") return "mod-status mod-status-broken";
  return "mod-status mod-status-stable";
}

function statusLabel(status, lang) {
  if (lang === "ar") {
    if (status === "beta") return "تجريبي";
    if (status === "broken") return "مكسور";
    return "مستقر";
  }
  if (status === "beta") return "BETA";
  if (status === "broken") return "BROKEN";
  return "STABLE";
}

function applyTheme(theme) {
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark-theme");
    themeToggle.textContent = "☀";
    currentTheme = "dark";
  } else {
    html.classList.remove("dark-theme");
    themeToggle.textContent = "☾";
    currentTheme = "light";
  }
  try {
    localStorage.setItem("bullmods_theme", currentTheme);
  } catch (_) {}
}

function applyLanguage(lang) {
  currentLang = lang;
  const data = siteData[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = data.dir;

  // نصوص عامة
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (data[key]) {
      el.textContent = data[key];
    }
  });

  // زر اللغة
  const label = langButton.querySelector(".icon-btn-label");
  if (label) label.textContent = data.langShort || lang.toUpperCase();

  // تفعيل زر القائمة
  langMenu.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderUpdates();
  renderMods();

  try {
    localStorage.setItem("bullmods_lang", currentLang);
  } catch (_) {}
}

function renderUpdates() {
  const data = siteData[currentLang];
  updatesList.innerHTML = "";
  data.updates.forEach((u) => {
    const li = document.createElement("li");
    li.className = "update-item";
    li.innerHTML = `
      <div class="update-title">${u.title}</div>
      <div class="update-meta">${u.date} • ${u.meta}</div>
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

  const sizeLabel =
    currentLang === "ar" ? "الحجم" : currentLang === "en" ? "Size" : "Size";
  const updatedLabel =
    currentLang === "ar" ? "آخر تحديث" : currentLang === "en" ? "Updated" : "Updated";
  const versionLabel =
    currentLang === "ar" ? "الإصدار" : currentLang === "en" ? "Version" : "Version";
  const downloadLabel =
    currentLang === "ar" ? "تحميل المود" : currentLang === "en" ? "Download mod" : "Download";
  const directLabel =
    currentLang === "ar" ? "رابط مباشر" : currentLang === "en" ? "Direct link" : "Direct";

  mods.forEach((mod) => {
    const card = document.createElement("article");
    card.className = "mod-card";

    card.innerHTML = `
      <div class="mod-header">
        <div>
          <div class="mod-title">${mod.name}</div>
          <div class="mod-game">${mod.game} • ${versionLabel} ${mod.version}</div>
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
      <div class="mod-download-row">
        <a href="${mod.downloadUrl}" target="_blank" rel="noopener noreferrer"
           class="mod-download-btn">${downloadLabel}</a>
        <span class="mod-note">${directLabel}</span>
      </div>
    `;

    modsGrid.appendChild(card);
  });
}

// ========= Events =========
document.addEventListener("DOMContentLoaded", () => {
  // استعادة التفضيلات
  try {
    const savedLang = localStorage.getItem("bullmods_lang");
    if (savedLang && siteData[savedLang]) {
      currentLang = savedLang;
    }
    const savedTheme = localStorage.getItem("bullmods_theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      currentTheme = savedTheme;
    }
  } catch (_) {}

  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // lang toggle
  langButton.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });

  langMenu.addEventListener("click", (e) => {
    const lang = e.target.dataset.lang;
    if (!lang) return;
    applyLanguage(lang);
    langMenu.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!langMenu.contains(e.target) && e.target !== langButton) {
      langMenu.classList.remove("open");
    }
  });

  // theme toggle
  themeToggle.addEventListener("click", () => {
    applyTheme(currentTheme === "light" ? "dark" : "light");
  });

  // filter
  modsFilter.addEventListener("change", renderMods);
});
