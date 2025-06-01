// Find books in stock and published after 2010
db.books.find({
    in_stock: true,
    published_year: { $gt: 2010 }
  });
  
  // Projection - only title, author, price
  db.books.find(
    {},
    { title: 1, author: 1, price: 1, _id: 0 }
  );
  
  // Sorting by price
  db.books.find().sort({ price: 1 }); // Ascending
  db.books.find().sort({ price: -1 }); // Descending
  
  // Pagination (page 2, 5 books per page)
  db.books.find().skip(5).limit(5);