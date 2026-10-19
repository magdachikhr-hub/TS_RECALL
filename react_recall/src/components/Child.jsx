import React from "react";

function Child({ props }) {
  const books = props;

  console.log(books);
  //2.2
  return (
    <>
      {books.length === 0 ? (
        <p>books not found</p>
      ) : (
        books.map((book) => (
          <div key={book.id}>
            <p>{book.name}</p>
            <span>{book.author}</span>
          </div>
        ))
      )}
    </>
  );
}

export default Child;
