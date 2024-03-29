import { useEffect, useState } from "react";
import { Book } from "../Constants";
import BooksCard from "./BooksCard";
import { useAppContext } from "../AppProvider";

interface BookShelfProps {
  books: Book[];
  title: string;
  search?: boolean;
}

const BookShelf = ({ books, title, search = false }: BookShelfProps) => {
  const [searchTerm, setSearchTerm] = useState("" as string);

  const { setBooksDetails } = useAppContext();

  useEffect(() => {
    if (searchTerm) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooksDetails(filteredBooks);
    }
  }, [searchTerm]);

  

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto">
        {books.map((book: Book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
