const hoverCard = document.querySelectorAll(".card");
const cards = document.getElementById("cards");

cards.onmousemove = (e) => {
  for (const card of hoverCard) {
    // Get the bounding rectangle of target
    // to get the position of the element
    const rect = card.getBoundingClientRect();
    x = e.clientX - rect.left; //x position within the element.
    y = e.clientY - rect.top; //y position within the element.

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
