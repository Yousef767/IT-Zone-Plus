interface GlowEffectProps {
  className?: string;
}
export const GlowEffect = ({ className }: GlowEffectProps) => {
  const cards = document.querySelectorAll(className ?? ".glow");

  cards.forEach((card) => {
    if (!(card instanceof HTMLElement)) return;

    card.addEventListener("mousemove", function (e: MouseEvent) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.classList.remove("fade-out");
      card.classList.add("fade-in");
    });

    card.addEventListener("mouseleave", function () {
      card.classList.add("fade-in");
      card.classList.add("fade-out");
    });
  });
};
