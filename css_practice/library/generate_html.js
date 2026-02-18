const fetchBooks = async (limit = 10) => {
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=adventure`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.items.slice(0, limit);
};

const parseBookData = (book) => ({
  title: book.volumeInfo.title,
  authors: book.volumeInfo.authors || ["Unknown"],
  categories: book.volumeInfo.categories || ["No category"],
  cover: book.volumeInfo.imageLinks.thumbnail,
});

const createBookCard = (book) => `
  <div class="book-card">
    <img src="${book.cover}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>Author(s):${book.authors.join(", ")}</p>
    <p>Categories: ${book.categories.join(", ")}</p>
  </div>
`;

const generateHTML = async (limit = 10) => {
  const books = await fetchBooks(limit);

  if (books.length === 0) {
    console.log("No books found.");
    return;
  }

  const parsedBooks = books.map(parseBookData);
  const bookCards = parsedBooks.map(createBookCard).join("");

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Books</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Books List</h1>
    <div class="book-grid">
      ${bookCards}
    </div>
  </body>
  </html>
  `;

  await Deno.writeTextFileSync("books.html", html);
};

await generateHTML(5);
