"use strict";

/*
  EDITE A LISTA DE PRESENTES NO ARQUIVO config.js.
  Para cada item, informe:
  - presente: caminho do PNG do presente
  - acao: caminho do PNG da ação/mob correspondente
  - nome: nome opcional para identificar o par (não aparece no overlay)
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

  const gift = document.createElement("div");
  gift.className = "visual";
  const giftImg = document.createElement("img");
  giftImg.src = item.presente;
  giftImg.alt = "Presente";
  giftImg.draggable = false;
  giftImg.onerror = () => console.warn("Não foi possível carregar:", item.presente);
  const giftCaption = document.createElement("span");
  giftCaption.className = "caption";
  gift.append(giftImg, giftCaption);

  const arrow = document.createElement("div");
  arrow.className = "arrow";
  arrow.textContent = "›";

  const action = document.createElement("div");
  action.className = "visual";
  const actionImg = document.createElement("img");
  actionImg.src = item.acao;
  actionImg.alt = "Ação Minecraft";
  actionImg.draggable = false;
  actionImg.onerror = () => console.warn("Não foi possível carregar:", item.acao);
  const actionCaption = document.createElement("span");
  actionCaption.className = "caption";
  action.append(actionImg, actionCaption);

  inner.append(number, gift, arrow, action);
  card.append(inner);
  return card;
}

function makeGroup() {
  const group = document.createElement("div");
  group.className = "group";
  group.setAttribute("aria-hidden", "true");
  PRESENTES.forEach((item, index) => group.append(createPair(item, index)));
  return group;
}

if (!Array.isArray(PRESENTES) || PRESENTES.length === 0) {
  console.error("Adicione pelo menos um item ao array PRESENTES em config.js.");
} else {
  // Dois grupos idênticos permitem uma rolagem contínua e sem espaço vazio.
  track.append(makeGroup(), makeGroup());
}

function tuneSpeed() {
  const firstGroup = track.firstElementChild;
  if (!firstGroup) return;
  const width = firstGroup.getBoundingClientRect().width;
  const pixelsPerSecond = 62;
  document.documentElement.style.setProperty(
    "--scroll-duration",
    Math.max(48, width / pixelsPerSecond) + "s"
  );
}
new ResizeObserver(tuneSpeed).observe(document.querySelector(".viewport"));
window.addEventListener("load", tuneSpeed, { once: true });
tuneSpeed();
