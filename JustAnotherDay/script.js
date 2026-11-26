// 1. Lista de frases o enlaces aleatorios para la barra superior
const frases = [
  "we",
  "alchile",
  "gatonto",
  "aquí",
  "nomás",
  "programando",
  "puro",
  "aliens",
  "naranja",
  "mientras",
  "ando",
  "viendo",
  "gatos",
  "en",
  "Sherk",
  "bien",
  "desvelado",
  "pero",
  "muchos",
  "bien",
  "★"
];

function mezclar(lista) {
  return [...lista].sort(() => Math.random() - 0.9);
}

const cinta = document.getElementById("cinta-aleatoria");

if (cinta) {
  const frasesMezcladas = mezclar(frases);
  const bloqueHTML = frasesMezcladas
    .map(item => item.startsWith("<a") ? item : `<span>${item}</span>`)
    .join("");

  cinta.innerHTML = bloqueHTML + bloqueHTML;
}
