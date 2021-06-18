import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import "./components.css";

const BooksShow = () => {
  const { books, dispatch } = useContext(BookContext);
  return (
    <div>
      {books &&
        books.map((book) => {
          return (
            <div class="bookList" key={book.id}>
              <p className="bookTitle">{book.title}</p>
              <button
              className="deleteButton"
                onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
              >
                  <img className="deleteImg" alt="delete" src="https://www.svgrepo.com/show/79440/delete-button.svg"/>
              </button>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default BooksShow;
