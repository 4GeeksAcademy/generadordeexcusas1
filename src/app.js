import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const btnGen    = document.querySelector("#btn");
  const btnSpeak  = document.querySelector("#speak");
  const excuseEl  = document.querySelector("#primera-excusa");

  // Generar y hablar excusa 
  btnGen.addEventListener("click", () => {
    const excuse = generateExcuse();
    excuseEl.innerHTML = excuse;
    
  });

  btnSpeak.addEventListener("click", () => {
    speakExcuse(excuseEl.innerText);
  });
};

const generateExcuse = () => {
  const character = ['El perro', 'mi abuela', 'el cartero', 'mi pájaro'];
  const action    = ['se comió', 'se meó', 'rompió', 'perdió'];
  const object    = ['mi trabajo', 'mi teléfono', 'mi coche', 'mi tarea'];
  const place     = ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'mientras comía', 'mientras rezaba'];

  const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  return `${rand(character)} ${rand(action)} ${rand(object)} ${rand(place)}.`;
};

function speakExcuse(text) {
  if (!('speechSynthesis' in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'es-ES';
  utter.rate = 1;
  speechSynthesis.speak(utter);
}
