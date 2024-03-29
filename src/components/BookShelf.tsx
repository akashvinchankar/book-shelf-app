import { useEffect, useRef, useState } from "react";
import { Book } from "../Constants";
import BooksCard from "./BooksCard";
import { useAppContext } from "../AppProvider";
import { useNavigate } from "react-router-dom";

interface BookShelfProps {
  books: Book[];
  title: string;
  search?: boolean;
}

const BookShelf = ({ books, title, search = false }: BookShelfProps) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("" as string);
  const [shelfBooks, setShelfBooks] = useState([...books] as Book[]);

  const { booksDetails } = useAppContext();

  useEffect(() => {
    if (search && inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  }, []);

  useEffect(() => {
    if (search) {
      if (searchTerm === "") {
        setShelfBooks([]);
      } else {
        setShelfBooks(() =>
          booksDetails.filter((book) =>
            book.title?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }
  }, [searchTerm]);

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      {/* <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto">
        {books.map((book: Book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div> */}

      {search ? (
        <div className="flex items-center mb-4">
          <div
            className="cursor-pointer flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full mr-4"
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="back-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search books"
            ref={inputRef}
            value={searchTerm}
            className="py-2 px-4 rounded-md bg-gray-200 w-full"
            onChange={(e) =>
              setSearchTerm(() => (e.target.value.trim() ? e.target.value : ""))
            }
          />
        </div>
      ) : (
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
      )}

      {(shelfBooks.length === 0 || books.length === 0) && (
        <p className="text-center text-gray-500">
          {search
            ? searchTerm === ""
              ? "Search for books"
              : "No books found"
            : "No books available"}
        </p>
      )}

      <div className="flex overflow-x-auto">
        {(search ? shelfBooks : books).map((book: Book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
