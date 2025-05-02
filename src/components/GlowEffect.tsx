export const GlowEffect = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.setProperty("--mouse-x", `${x}px`);
      this.style.setProperty("--mouse-y", `${y}px`);
      this.classList.remove("fade-out");
      this.classList.add("fade-in");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.add("fade-in");
      this.classList.add("fade-out");
    });
  });
}