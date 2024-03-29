import { Book } from "../Constants";
import BooksCard from "./BooksCard";

interface BookShelfProps {
  books: Book[];
  title: string;
}

const BookShelf = ({ books, title }: BookShelfProps) => {
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
