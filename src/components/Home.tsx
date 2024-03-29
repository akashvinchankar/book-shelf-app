import { useAppContext } from "../AppProvider";
import { CATEGORIES } from "../Constants";
import BookShelf from "./BookShelf";
import Header from "./Header";

const Home = () => {
  const { booksDetails } = useAppContext();

  return (
    <div>
      <Header />
      <BookShelf
        title="Currently Reading"
        books={booksDetails.filter(
          ({ category }: { category: string }) =>
            category === CATEGORIES.CURRENTLY_READING
        )}
      />
    </div>
  );
};

export default Home;
