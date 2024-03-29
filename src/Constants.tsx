export const CATEGORIES = {
  CURRENTLY_READING: "currently_reading",
  WANT_TO_READ: "want_to_read",
  READ: "read",
};

export const CATEGORIES_DROPDOWN_OPTIONS = [
  {
    label: "Currently Reading",
    value: CATEGORIES.CURRENTLY_READING,
  },
  {
    label: "Want to read",
    value: CATEGORIES.WANT_TO_READ,
  },
  {
    label: "Read",
    value: CATEGORIES.READ,
  },
];

export const BOOKS = [
  {
    author: "Jane Austen",
    country: "United Kingdom",
    imageLink: "images/pride-and-prejudice.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
  },
  {
    author: "Giovanni Boccaccio",
    country: "Italy",
    imageLink: "images/the-decameron.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/The_Decameron\n",
    pages: 1024,
    title: "The Decameron",
    year: 1351,
  },
  {
    author: "Albert Camus",
    country: "Algeria, French Empire",
    imageLink: "images/l-etranger.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
    pages: 185,
    title: "The Stranger",
    year: 1942,
  },
  {
    author: "Charles Dickens",
    country: "United Kingdom",
    imageLink: "images/great-expectations.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Great_Expectations\n",
    pages: 194,
    title: "Great Expectations",
    year: 1861,
  },
  {
    author: "Ralph Ellison",
    country: "United States",
    imageLink: "images/invisible-man.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Invisible_Man\n",
    pages: 581,
    title: "Invisible Man",
    year: 1952,
  },
  {
    author: "Federico Garc\u00eda Lorca",
    country: "Spain",
    imageLink: "images/gypsy-ballads.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
    pages: 218,
    title: "Gypsy Ballads",
    year: 1928,
  },
  {
    author: "Ernest Hemingway",
    country: "United States",
    imageLink: "images/the-old-man-and-the-sea.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
    pages: 128,
    title: "The Old Man and the Sea",
    year: 1952,
  },
  {
    author: "James Joyce",
    country: "Irish Free State",
    imageLink: "images/ulysses.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
    pages: 228,
    title: "Ulysses",
    year: 1922,
  },
  {
    author: "Herman Melville",
    country: "United States",
    imageLink: "images/moby-dick.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Moby-Dick\n",
    pages: 378,
    title: "Moby Dick",
    year: 1851,
  },
  {
    author: "George Orwell",
    country: "United Kingdom",
    imageLink: "images/nineteen-eighty-four.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
    pages: 272,
    title: "Nineteen Eighty-Four",
    year: 1949,
  },
  {
    author: "Salman Rushdie",
    country: "United Kingdom, India",
    imageLink: "images/midnights-children.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
    pages: 536,
    title: "Midnight's Children",
    year: 1981,
  },
  {
    author: "Jonathan Swift",
    country: "Ireland",
    imageLink: "images/gullivers-travels.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
    pages: 178,
    title: "Gulliver's Travels",
    year: 1726,
  },
  {
    author: "Vyasa",
    country: "India",
    imageLink: "images/the-mahab-harata.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Mahabharata\n",
    pages: 276,
    title: "Mahabharata",
    year: -700,
  },
  {
    author: "Mark Twain",
    country: "United States",
    imageLink: "images/the-adventures-of-huckleberry-finn.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
    pages: 224,
    title: "The Adventures of Huckleberry Finn",
    year: 1884,
  },
  {
    author: "Valmiki",
    country: "India",
    imageLink: "images/ramayana.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Ramayana\n",
    pages: 152,
    title: "Ramayana",
    year: -450,
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "images/war-and-peace.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/War_and_Peace\n",
    pages: 1296,
    title: "War and Peace",
    year: 1867,
  },
];

export interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}
