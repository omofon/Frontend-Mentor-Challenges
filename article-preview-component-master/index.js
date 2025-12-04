const shareBtn = document.getElementById("share-icon");
const tooltip = document.getElementById("share-tooltip");

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  tooltip.classList.toggle("active");
});

tooltip.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  tooltip.classList.remove("active");
});
