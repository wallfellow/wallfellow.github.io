(() => {
  const body = document.body;
  if (!body.classList.contains("exp-home")) return;

  // Only the header wordmark cycles patterns — not the hero brand or other links.
  const cycleBtn = document.querySelector(
    ".site-header .wordmark[data-pattern-cycle]"
  );
  const cycle = ["off", "memphis", "graph", "dots"];

  const setPattern = (name) => {
    const next = cycle.includes(name) ? name : "off";
    body.setAttribute("data-pattern", next);
    if (cycleBtn) {
      cycleBtn.setAttribute("aria-pressed", next !== "off" ? "true" : "false");
    }
  };

  const nextPattern = () => {
    const current = body.getAttribute("data-pattern") || "off";
    const i = cycle.indexOf(current);
    const from = i === -1 ? 0 : i;
    return cycle[(from + 1) % cycle.length];
  };

  setPattern(body.getAttribute("data-pattern") || "off");

  if (!cycleBtn) return;

  cycleBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setPattern(nextPattern());
  });
})();
