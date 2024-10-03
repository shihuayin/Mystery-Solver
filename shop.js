document.addEventListener("DOMContentLoaded", function () {
  const priceButtons = document.getElementById("priceButtons");
  const bookList = document.getElementById("bookList");

  priceButtons.addEventListener("click", filterBooks);

  function filterBooks(event) {
    const target = event.target;
    if (target.tagName.toLowerCase() === "button") {
      const selectedPriceRange = target.getAttribute("data-range");

      // Create an array to store the books that should be displayed
      const books = bookList.getElementsByClassName("con");
      const booksToDisplay = [];

      // Loop through each book and check its data-price attribute
      for (let i = 0; i < books.length; i++) {
        const bookPrice = parseInt(books[i].getAttribute("data-price"), 10);

        // If the book's price is within the selected range or if "Show All" is selected, add it to the booksToDisplay array
        if (
          selectedPriceRange === "all" ||
          isPriceInRange(bookPrice, selectedPriceRange)
        ) {
          booksToDisplay.push(books[i]);
        }
      }

      // Reset the display property of all book elements to "none"
      for (let i = 0; i < books.length; i++) {
        books[i].style.display = "none";
      }

      // Set the display property of books in the booksToDisplay array to "block"
      for (let i = 0; i < booksToDisplay.length; i++) {
        booksToDisplay[i].style.display = "flex";
      }
    }
  }

  function isPriceInRange(price, range) {
    const [min, max] = range.split("-").map(Number);
    return price >= min && price <= max;
  }
});

// dark script.js
document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
  });
});
