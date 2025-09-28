function ordenar() {
  const arr = document.getElementById("arr").value.split(",").map(Number);
  if (arr.some(isNaN)) {
    out1.textContent = "Error: solo números.";
  } else {
    out1.textContent = arr.sort((a, b) => a - b).join(", ");
  }
}

function esPar() {
  const n = Number(document.getElementById("num").value);
  out2.textContent = n % 2 === 0 ? "Es par" : "No es par";
}

function planta() {
  let vc = +vc.value, vd = +vd.value, hd = +hd.value;
  let h = 0, d = 0;
  while (h < hd) {
    d++; h += vc;
    if (h >= hd) break;
    h -= vd;
  }
  out3.textContent = d + " días";
}
