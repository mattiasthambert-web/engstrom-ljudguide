// Lyssna-knappen. Ljudet startar bara när besökaren själv trycker.
document.documentElement.classList.add("js");
(function () {
  var knapp = document.getElementById("lyssna-knapp");
  var ljud = document.getElementById("ljud");
  if (!knapp || !ljud) return;
  ljud.hidden = true; // utan JavaScript syns den vanliga spelaren i stället
  knapp.hidden = false;
  function visa() {
    var spelar = !ljud.paused && !ljud.ended;
    knapp.textContent = spelar ? "Pausa" : (ljud.currentTime > 0 && !ljud.ended ? "Fortsätt lyssna" : "Lyssna");
    knapp.setAttribute("aria-pressed", spelar ? "true" : "false");
  }
  knapp.addEventListener("click", function () {
    ljud.hidden = false;
    if (ljud.paused) { ljud.play().catch(function () { visa(); }); } else { ljud.pause(); }
  });
  ["play", "pause", "ended"].forEach(function (h) { ljud.addEventListener(h, visa); });
})();
