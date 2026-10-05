document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("current-date");

  if (dateElement) {
    const currentDate = new Date();
    dateElement.textContent = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.borderColor = "rgba(94, 234, 212, 0.6)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.borderColor = "rgba(255, 255, 255, 0.1)";
    });
  });
});
