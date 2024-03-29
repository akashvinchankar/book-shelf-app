import { createContext, useContext, useState } from "react";
import { BOOKS, Book, CATEGORIES } from "./Constants";
import { v4 as uuid } from "uuid";

import { ReactNode } from "react";

const AppContext = createContext({});

const generateBooksData = (books: Book[]) => {
  const categories = Object.values(CATEGORIES);
  const getRandomCategory = () =>
    categories[Math.floor(Math.random() * categories.length)];

  return books.map((book) => ({
    ...book,
    id: uuid(),
    category: getRandomCategory(),
  }));
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [booksDetails, setBooksDetails] = useState(generateBooksData(BOOKS));

  return (
    <AppContext.Provider value={{ booksDetails, setBooksDetails }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
