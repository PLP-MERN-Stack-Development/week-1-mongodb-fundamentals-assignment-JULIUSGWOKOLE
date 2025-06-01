// =============================================
// CRUD OPERATIONS FOR PLP BOOKSTORE
// =============================================

// 1. CREATE OPERATIONS
function insertNewBook(bookData) {
    return db.books.insertOne({
      title: bookData.title,
      author: bookData.author,
      genre: bookData.genre,
      published_year: bookData.published_year,
      price: bookData.price,
      in_stock: bookData.in_stock,
      pages: bookData.pages,
      publisher: bookData.publisher,
      createdAt: new Date()
    });
  }
  
  // 2. READ OPERATIONS
  function getAllBooks() {
    return db.books.find().toArray();
  }
  
  function getBooksByGenre(genre) {
    return db.books.find({ genre }).toArray();
  }
  
  function getBooksAfterYear(year) {
    return db.books.find({ published_year: { $gt: year } }).toArray();
  }
  
  function getBooksByAuthor(author) {
    return db.books.find({ author }).toArray();
  }
  
  // 3. UPDATE OPERATIONS
  function updateBookPrice(title, newPrice) {
    return db.books.updateOne(
      { title },
      { $set: { price: newPrice, updatedAt: new Date() } }
    );
  }
  
  // 4. DELETE OPERATIONS
  function deleteBook(title) {
    return db.books.deleteOne({ title });
  }
  
  // =============================================
  // EXPORTS FOR NODE.JS USAGE
  // =============================================
  // Remove this section if using in MongoDB shell directly
  module.exports = {
    insertNewBook,
    getAllBooks,
    getBooksByGenre,
    getBooksAfterYear,
    getBooksByAuthor,
    updateBookPrice,
    deleteBook
  };