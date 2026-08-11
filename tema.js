// tema.js — Selector de tema claro/oscuro para Sudor y Gloria
// Incluir en cualquier página con: <script src="tema.js" defer></script>
// Requiere también: <link rel="stylesheet" href="tema.css">

(function () {
  function aplicarTema(modo) {
    document.body.classList.toggle('tema-oscuro', modo === 'oscuro');
    var btn = document.getElementById('toggle-tema');
    if (btn) btn.textContent = modo === 'oscuro' ? '☀️ Claro' : '🌙 Oscuro';
  }

  function iniciar() {
    var guardado = localStorage.getItem('sudorygloria-tema') || 'claro';

    var btn = document.createElement('button');
    btn.id = 'toggle-tema';
    btn.type = 'button';
    btn.title = 'Cambiar entre tema claro y oscuro';
    document.body.appendChild(btn);

    aplicarTema(guardado);

    btn.addEventListener('click', function () {
      var actualEsOscuro = document.body.classList.contains('tema-oscuro');
      var nuevo = actualEsOscuro ? 'claro' : 'oscuro';
      localStorage.setItem('sudorygloria-tema', nuevo);
      aplicarTema(nuevo);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
