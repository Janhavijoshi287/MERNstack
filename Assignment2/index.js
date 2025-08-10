document.addEventListener("click", function(event) {
  const square = document.createElement("div");
  square.classList.add("square");

  // Set square position
  square.style.left = `${event.pageX}px`;
  square.style.top = `${event.pageY}px`;

  document.body.appendChild(square);
});
