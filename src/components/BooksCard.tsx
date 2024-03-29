import { Book } from "../Constants";

const BooksCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex-shrink-0 mr-4 min-w-[200px] max-w-[200px]">
      <div className="bg-white p-4 shadow-md rounded-md h-full flex flex-col">
        {book.imageLink && (
          <img
            src={book.imageLink}
            alt={book.title}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
        )}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
