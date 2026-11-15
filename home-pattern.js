(() => {
  const body = document.body;
  if (!body.classList.contains("exp-home")) return;

  const decorBtn = document.querySelector(".nav-link--decor");

  const setPattern = (name) => {
    const next = name === "graph" ? "graph" : "memphis";
    body.dataset.pattern = next;
    if (decorBtn) {
      decorBtn.setAttribute("aria-pressed", next === "graph" ? "true" : "false");
    }
  };

  document.addEventListener("click", (event) => {
    const control = event.target.closest("[data-pattern-set]");
    if (!control || !body.contains(control)) return;

    const next = control.getAttribute("data-pattern-set");
    if (!next) return;

    setPattern(next);

    // Stay on the homepage for Decor + wordmark; let Pieces/CTA navigate.
    if (control.matches("button.nav-link--decor")) {
      event.preventDefault();
    } else if (control.matches("a.wordmark")) {
      event.preventDefault();
    }
  });
})();
