(() => {
  const body = document.body;
  if (!body.classList.contains("exp-home")) return;

  const decorBtn = document.querySelector(".nav-link--decor");
  // Decor: off → memphis → graph → dots → off
  const cycle = ["off", "memphis", "graph", "dots"];

  const setPattern = (name) => {
    const next = cycle.includes(name) ? name : "off";
    body.dataset.pattern = next;
    body.setAttribute("data-pattern", next);
    if (decorBtn) {
      const active = next !== "off";
      decorBtn.setAttribute("aria-pressed", active ? "true" : "false");
    }
  };

  const nextDecor = () => {
    const current = body.getAttribute("data-pattern") || "off";
    const i = cycle.indexOf(current);
    const from = i === -1 ? 0 : i;
    return cycle[(from + 1) % cycle.length];
  };

  setPattern(body.getAttribute("data-pattern") || "off");

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
