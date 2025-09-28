const act = {
  lunes: "Debo atender un cliente especifico.",
  martes: "Visito una agencia fuera de la ciudad",
  miércoles: "Debo llevar a mi hija al ballet (balé).",
  jueves: "Debo priorizar entregas de desarrollo",
  viernes: "Debo atender problemas de manera remota.",
  sábado: "Debo hacer lo que mi esposa quiera"
};

function recordar() {
  const d = dia.value;
  const texto = act[d] + (msg.value ? " – " + msg.value : "");
  out.textContent = texto;
}
