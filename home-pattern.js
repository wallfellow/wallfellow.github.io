(() => {
  const body = document.body;
  if (!body.classList.contains("exp-home")) return;

  const decorBtn = document.querySelector(".nav-link--decor");
  const cycle = ["off", "memphis", "graph", "dots"];

  const setPattern = (name) => {
    const next = cycle.includes(name) ? name : "off";
    body.dataset.pattern = next;
    if (decorBtn) {
      decorBtn.setAttribute("aria-pressed", next === "off" ? "false" : "true");
    }
  };

  const nextDecor = () => {
    const current = body.dataset.pattern || "off";
    const i = Math.max(0, cycle.indexOf(current));
    return cycle[(i + 1) % cycle.length];
  };

  // Ensure default matches markup.
  setPattern(body.dataset.pattern || "off");

  document.addEventListener("click", (event) => {
    const decor = event.target.closest("[data-pattern-cycle]");
    if (decor && body.contains(decor)) {
      event.preventDefault();
      setPattern(nextDecor());
      return;
    }

    const control = event.target.closest("[data-pattern-set]");
    if (!control || !body.contains(control)) return;

    const next = control.getAttribute("data-pattern-set");
    if (!next) return;

    setPattern(next);

    if (control.matches("a.wordmark")) {
      event.preventDefault();
    }
  });
})();
