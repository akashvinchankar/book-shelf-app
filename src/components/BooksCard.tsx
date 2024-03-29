import { useAppContext } from "../AppProvider";
import { Book, CATEGORIES_DROPDOWN_OPTIONS } from "../Constants";

const BooksCard = ({ book }: { book: Book }) => {
  const { setBooksDetails } = useAppContext();

  const generateCategoriesOptions = () => {
    return CATEGORIES_DROPDOWN_OPTIONS.map(({ label, value }, index) => (
      <option key={index} value={value}>
        {label}
      </option>
    ));
  };

  const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBooksDetails((books: Book[]) =>
      books.map((b) =>
        b.id === book.id ? { ...b, category: e.target.value } : b
      )
    );
  };

  return (
    <div className="flex-shrink-0 mr-4 w-56 max-w-[200px]">
      <div className="bg-white p-4 shadow-md rounded-md h-full flex flex-col">
        {book.imageLink && (
          <img
            src={book.imageLink}
            alt={book.title}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
        )}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-600 mb-4">{book.author}</p>
        </div>
        <div>
          <select
            className="py-2 px-4 rounded-md bg-gray-100 w-full"
            defaultValue={book.category}
            onChange={onCategoryChange}
          >
            {generateCategoriesOptions()}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
