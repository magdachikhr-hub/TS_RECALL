import { useEffect, useState } from "react";
import GrandChild from "./GrandChild";
function Child({ props }) {
  const [counter, setCounter] = useState(0);

  const books = props;
  //3.2

  useEffect(() => {
    console.log("page loaded");
  }, []);

  //another we can get
  useEffect(() => {
    async function getBookReviews() {
      try {
        const response = await fetch("https://potterapi-fedeperin.vercel.app/");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBookReviews();
  }, []);

  ///

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
      <h3>{counter}</h3>
      <button onClick={() => setCounter((prev) => prev + 1)}>add</button>
      <button onClick={() => setCounter(0)}>reset</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>decrease</button>

      <GrandChild></GrandChild>
    </>
  );
}
//3.1 buttons
export default Child;
