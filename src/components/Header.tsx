import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-4 flex justify-between items-center bg-white shadow-lg px-4 py-2">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
        Bookstore
      </h1>
      <div
        className="search-btn cursor-pointer flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
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
