"use strict";

/*
 * Overlay de presentes — versão otimizada
 * Edite a lista de presentes somente em config.js.
 */

const track = document.getElementById("track");

function createPair(item, index) {
  const card = document.createElement("article");
  card.className = "pair";
  card.setAttribute("aria-label", item.nome || `Par ${index + 1}`);

  const inner = document.createElement("div");
  inner.className = "inner";

  const number = document.createElement("span");
  number.className = "index";
  number.textContent = String(index + 1).padStart(2, "0");

  function createVisual(src, alt) {
    const visual = document.createElement("div");
    visual.className = "visual";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = 68;
    img.height = 61;
    img.loading = "eager";
    img.decoding = "async";
    img.draggable = false;
    img.onerror = () => console.warn("Não foi possível carregar:", src);

    visual.append(img);
    return visual;
  }

  const gift = createVisual(item.presente, "Presente");

  const arrow = document.createElement("div");
  arrow.className = "arrow";
  arrow.textContent = "›";
  arrow.setAttribute("aria-hidden", "true");

  const action = createVisual(item.acao, "Ação Minecraft");

  const name = document.createElement("div");
  name.className = "action-name";
  name.textContent = item.nome || "";

  inner.append(number, gift, arrow, action, name);
  card.append(inner);
  return card;
}

function makeGroup() {
  const group = document.createElement("div");
  group.className = "group";
  group.setAttribute("aria-hidden", "true");

  const fragment = document.createDocumentFragment();
  PRESENTES.forEach((item, index) => fragment.append(createPair(item, index)));
  group.append(fragment);
  return group;
}

if (!Array.isArray(PRESENTES) || PRESENTES.length === 0) {
  console.error("Adicione pelo menos um item ao array PRESENTES em config.js.");
} else {
  // Constrói os cards uma única vez e clona o grupo para o loop contínuo.
  const firstGroup = makeGroup();
  const secondGroup = firstGroup.cloneNode(true);
  track.append(firstGroup, secondGroup);

  // A segunda cópia é apenas visual; evita duplicação na árvore acessível.
  secondGroup.setAttribute("aria-hidden", "true");

  // Pré-carrega e decodifica cada arquivo antes de iniciar a animação.
  const uniqueImages = new Map();
  track.querySelectorAll("img").forEach((img) => {
    uniqueImages.set(img.currentSrc || img.src, img);
  });

  function waitForImage(img) {
    const loaded = img.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });

    return loaded.then(async () => {
      if (img.naturalWidth && typeof img.decode === "function") {
        try {
          await img.decode();
        } catch (error) {
          console.warn("Não foi possível decodificar:", img.currentSrc || img.src);
        }
      }
    });
  }

  Promise.all([...uniqueImages.values()].map(waitForImage)).then(() => {
    track.classList.add("is-ready");
  });
}

// A duração fica no CSS: evita medir o grupo inteiro e acompanhar redimensionamentos.
