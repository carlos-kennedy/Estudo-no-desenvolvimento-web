const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstítuivel",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do Século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. covery",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;

console.log(`Total de categorias são: ${totalCategories}`);
for (let category of booksByCategory) {
  console.log("total de livros da categorias: " + category.category);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }

  console.log(`Total de autores são: ${authors.length}`);
}

countAuthors();

function countBooksOfAugustoCury() {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === "Augusto Cury");
      {
        books.push(book.title);
      }
    }
  }

  console.log(`Os livros do autor são: ${books.join(", ")}`);
}

countBooksOfAugustoCury();

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }

  console.log(`Os livros do ${author}: ${books.join(", ")}`);
}

booksOfAuthor("George S. Clason");
