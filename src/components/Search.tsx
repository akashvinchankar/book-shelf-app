import { useAppContext } from "../AppProvider";
import BookShelf from "./BookShelf";

const Search = () => {
  const { booksDetails } = useAppContext();

  return (
    <div>
      <BookShelf books={[...booksDetails]} title={"Search"} search />
    </div>
  );
};

export default Search;
