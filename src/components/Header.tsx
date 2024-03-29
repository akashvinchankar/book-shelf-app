import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg py-4 px-6 flex justify-between items-center">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
        Bookstore
      </h1>
      <div
        className="search-btn cursor-pointer flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={() => navigate("/search")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600 search-icon"
          strokeWidth="3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
