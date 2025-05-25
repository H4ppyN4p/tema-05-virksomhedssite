document.querySelectorAll(".media-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    console.log("Hover over:", card.querySelector("h4").innerText);
  });
});
