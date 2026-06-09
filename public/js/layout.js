document.addEventListener("DOMContentLoaded", () => {
  const sidebarButtonElement = document.getElementById("sidebar-button");

  sidebarButtonElement.addEventListener("click", () => {
    const sidebarElement = document.getElementById("sidebar");
    sidebarElement.classList.toggle("hidden");
  });
});
