// 1. Lista de frases o enlaces aleatorios para la barra superior
const frases = [
"â˜… Se encontraron 5 nuevas especies de gatosâ˜…",
"â˜… Ya no distribuiran copias del Cd Consuelo en Domingo de Enjambre â˜…",
"â˜… Escuchar nsqk te hace 30% mas atracti@ â˜…",
"â˜… OFICIALMENTE EL 30 DE NOVIEMBRE mi tio saldra de la penal del salto  â˜…",
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