let i = 0;

function timedCount() {
  i++;
  postMessage(i);     // manda el número al HTML
  setTimeout(timedCount, 500); // cada 0.5 segundos
}

timedCount();
