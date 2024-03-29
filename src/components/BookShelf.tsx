import { Book } from "../Constants";
import BooksCard from "./BooksCard";

interface BookShelfProps {
  books: Book[];
  title: string;
}

const BookShelf = ({ books, title }: BookShelfProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {books.map((book: Book) => (
          <BooksCard />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
