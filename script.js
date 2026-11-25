//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Add Book Event
submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  // Ensure fields are not empty
  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields");
    return;
  }

  // Create a new table row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">X</button></td>
  `;

  // Append row to the table body
  bookList.appendChild(row);

  // Clear input fields after submission
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

// Delete Book Event (using Event Delegation)
bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    // Remove the parent <tr> of the clicked delete button
    e.target.closest("tr").remove();
  }
});
