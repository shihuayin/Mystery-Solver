//brightness
document.addEventListener("DOMContentLoaded", function () {
  const brightnessInput = document.getElementById("brightness");

  brightnessInput.addEventListener("input", function () {
    const brightnessValue = this.value / 100;
    document.body.style.filter = `brightness(${brightnessValue})`;
  });
});

//siderbar

document.addEventListener("DOMContentLoaded", function () {
  const openSidebarBtn = document.getElementById("openSidebarBtn");
  const sidebar = document.getElementById("sidebar");

  openSidebarBtn.addEventListener("click", function () {
    sidebar.style.right = "0";
  });

  // close the sidebar when clicked outside
  window.addEventListener("click", function (event) {
    if (event.target !== sidebar && event.target !== openSidebarBtn) {
      sidebar.style.right = "-300px";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openSidebarBtn = document.getElementById("openSidebarBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const sidebar = document.getElementById("sidebar");

  openSidebarBtn.addEventListener("click", function () {
    sidebar.style.right = "0";
  });

  closeSidebarBtn.addEventListener("click", function () {
    sidebar.style.right = "-300px";
  });

  // close the sidebar when clicked outside (unchanged)
  window.addEventListener("click", function (event) {
    if (event.target !== sidebar && event.target !== openSidebarBtn) {
      sidebar.style.right = "-300px";
    }
  });
});

const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");
const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalContent.focus();
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  openModalButton.focus();
});
