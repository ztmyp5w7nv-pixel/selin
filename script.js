const projectsData = [
  {
    title: "Fikirden Tasarıma Hızlı Prototip",
    badge: "Beyin Fırtınası",
    accent: "#4f46e5",
    soft: "rgba(79, 70, 229, 0.12)",
    desc: "Derste veya proje saatinde ortaya çıkan ham fikirleri hızlıca şekillendirip somut bir plana dönüştürdüğümüz o üretken anlar.",
    quote: "“En iyi fikirler bazen bir ders arasında atılan tek bir kıvılcımla başlar.”"
  },
  {
    title: "Uygulama, Mantık & Sistem Kurma",
    badge: "Proje Laboratuvarı",
    accent: "#10b981",
    soft: "rgba(16, 185, 129, 0.12)",
    desc: "Algoritmik düşünceyi, yapı kurmayı ve adım adım çözüm üretmeyi birleştirdiğimiz keyifli ortak çalışmalar.",
    quote: "“Matematik düşünme biçimi, proje üretmek de o düşüncenin sahaya inmiş hali.”"
  },
  {
    title: "Keyifli Ders & Yüksek Lisans Enerjisi",
    badge: "24 Kasım Özel",
    accent: "#d97706",
    soft: "rgba(217, 119, 6, 0.12)",
    desc: "Yüksek lisans temposunun içinde bile derse neşe, samimiyet ve merak katan o genç ve dinamik yaklaşım.",
    quote: "“Öğrenmek keyifli olduğunda hiçbir formül göz korkutmaz.”"
  }
];

const rootEl = document.documentElement;
const projChips = document.querySelectorAll(".proj-chip");
const projCard = document.getElementById("projCard");
const projTitle = document.getElementById("projTitle");
const projBadge = document.getElementById("projBadge");
const projDesc = document.getElementById("projDesc");
const projQuote = document.getElementById("projQuote");

function applyProject(index, animate = true) {
  const item = projectsData[index];
  if (!item) return;

  projChips.forEach((chip, i) => {
    chip.classList.toggle("active", i === index);
  });

  const updateContent = () => {
    rootEl.style.setProperty("--proj-accent", item.accent);
    rootEl.style.setProperty("--proj-soft", item.soft);
    projTitle.textContent = item.title;
    projBadge.textContent = item.badge;
    projDesc.textContent = item.desc;
    projQuote.textContent = item.quote;
  };

  if (!animate) {
    updateContent();
    return;
  }

  projCard.classList.add("is-switching");
  window.setTimeout(() => {
    updateContent();
    projCard.classList.remove("is-switching");
  }, 150);
}

projChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    applyProject(Number(chip.dataset.proj), true);
  });
});

applyProject(0, false);

// İpucu ve Çözüm Butonları
const toggleHintBtn = document.getElementById("toggleHintBtn");
const toggleSolBtn = document.getElementById("toggleSolBtn");
const hintBox = document.getElementById("hintBox");
const solutionBox = document.getElementById("solutionBox");

toggleHintBtn.addEventListener("click", () => {
  const isHidden = hintBox.classList.toggle("hidden");
  toggleHintBtn.textContent = isHidden ? "İpucu Ver" : "İpucunu Gizle";
});

toggleSolBtn.addEventListener("click", () => {
  const isHidden = solutionBox.classList.toggle("hidden");
  toggleSolBtn.textContent = isHidden ? "Çözüm Notunu Aç" : "Çözüm Notunu Gizle";
});

// Scroll Reveal
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
