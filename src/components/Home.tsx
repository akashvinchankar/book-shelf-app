import { useAppContext } from "../AppProvider";
import { CATEGORIES } from "../Constants";
import BookShelf from "./BookShelf";
import Header from "./Header";

const Home = () => {
  const { booksDetails } = useAppContext();

  return (
    <div className="p-4">
      <Header />
      <div className="">
        <BookShelf
          title="Currently Reading"
          books={booksDetails.filter(
            ({ category }) => category === CATEGORIES.CURRENTLY_READING
          )}
        />
        <BookShelf
          title="Want to Read"
          books={booksDetails.filter(
            ({ category }) => category === CATEGORIES.WANT_TO_READ
          )}
        />
        <BookShelf
          title="Read"
          books={booksDetails.filter(
            ({ category }) => category === CATEGORIES.READ
          )}
        />
      </div>
    </div>
  );
};

export default Home;
