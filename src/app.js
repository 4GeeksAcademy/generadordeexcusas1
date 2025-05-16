import "bootstrap";
import "./style.css";

window.onload = () => {
  const excuseEl = document.querySelector("#primera-excusa");

  document.querySelector("#btn").addEventListener("click", () => {
    excuseEl.innerText = generateExcuse();
  });

  document.querySelector("#speak").addEventListener("click", () => {
    speak(excuseEl.innerText);
  });
};

const generateExcuse = () => {
  const partes = {
    character: ['El perro', 'mi abuela', 'el cartero', 'mi pájaro'],
    action: ['se comió', 'se meó', 'rompió', 'perdió'],
    object: ['mi trabajo', 'mi teléfono', 'mi coche', 'mi tarea'],
    place: ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'mientras comía', 'mientras rezaba']
  };

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  return `${pick(partes.character)} ${pick(partes.action)} ${pick(partes.object)} ${pick(partes.place)}.`;
};

const speak = text => {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "es-ES";
  speechSynthesis.speak(utter);
};