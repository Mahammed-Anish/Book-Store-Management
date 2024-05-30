function performSearch(event) {
  // Prevent the default form submission
  event.preventDefault();

  const searchInput = document.getElementById("searchInput").value;
  console.log(searchInput);

  // Replace with your server URL
  const serverUrl = `http://localhost:7000/search?query=${encodeURIComponent(
    searchInput
  )}`;

  // Make a request to the server with the search query

  window.location.href = serverUrl;
}
