// Average price by genre
db.books.aggregate([
    {
      $group: {
        _id: "$genre",
        avgPrice: { $avg: "$price" }
      }
    }
  ]);
  
  // Author with most books
  db.books.aggregate([
    {
      $group: {
        _id: "$author",
        bookCount: { $sum: 1 }
      }
    },
    { $sort: { bookCount: -1 } },
    { $limit: 1 }
  ]);
  
  // Books by publication decade
  db.books.aggregate([
    {
      $group: {
        _id: {
          $subtract: [
            "$published_year",
            { $mod: ["$published_year", 10] }
          ]
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]);