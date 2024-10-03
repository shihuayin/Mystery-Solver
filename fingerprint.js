//powder
const powderimage = document.getElementById("powder");
const powderbutton = document.getElementById("changepowderButton");

// Add a click event listener to the "changepowderButton" element
powderbutton.addEventListener("click", function () {
  // Define the URL of the new image to be displayed
  const newImageUrl = "images/powder2.jpeg";
  // Update the "src"
  powderimage.src = newImageUrl;
  powderimage.alt = "Image 2";
});

//ninhydrin
const ninhydrinimage = document.getElementById("ninhydrin");
const ninhydrinbutton = document.getElementById("changeninhydrinButton");

ninhydrinbutton.addEventListener("click", function () {
  const newImageUrl = "images/ninhydrin2.png";
  ninhydrinimage.src = newImageUrl;
  ninhydrinimage.alt = "Image 2";
});

//cyanoacrylate
const cyanoacrylateimage = document.getElementById("cyanoacrylate");
const cyanoacrylatebutton = document.getElementById(
  "changecyanoacrylateButton"
);

cyanoacrylatebutton.addEventListener("click", function () {
  const newImageUrl = "images/cyanoacrylate2.png";
  cyanoacrylateimage.src = newImageUrl;
  cyanoacrylateimage.alt = "Image 2";
});

//laser
const laserimage = document.getElementById("laser");
const laserbutton = document.getElementById("changelaserButton");

laserbutton.addEventListener("click", function () {
  const newImageUrl = "images/laser2.jpeg";
  laserimage.src = newImageUrl;
  laserimage.alt = "Image 2";
});

// dark script.js
document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
  });
});
