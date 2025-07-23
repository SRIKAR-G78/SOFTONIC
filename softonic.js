
  const themes = ["theme-tech", "theme-playful", "theme-dark"];
  let current = 0;
  const body = document.body;
  const btn = document.getElementById("themeSwitcher");
  btn.addEventListener("click", () => {
    body.classList.remove(themes[current]);
    current = (current + 1) % themes.length;
    body.classList.add(themes[current]);
    btn.textContent =
      themes[current] === "theme-tech" ? "Switch Theme" :
      themes[current] === "theme-playful" ? "Switch Theme" :
      "Switch Theme";
  });
