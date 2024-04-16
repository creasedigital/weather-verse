import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { fetchWeatherData } from "../../lib";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here using the 'query' state
    console.log("Searching for:", query);
    const weather = fetchWeatherData(query)

    console.log('weather::::', weather)
  };

  return (
    <div className="relative flex items-center px-8 w-[320px] rounded-full bg-[#fcfcfc] focus:outline-none bg-transparent">
      <input
        type="text"
        placeholder="Search..."
        className="focus:outline-none bg-transparent text-black text-[18px] leading-4.5 font-medium"
        value={query}
        onChange={handleInputChange}
      />
      <button
        className="bg-transparent text-white rounded-md focus:outline-none focus:border-none pr-10"
        onClick={handleSearch}
      >
        <FiSearch className="bg-transparent text-gray-100 text-[32px]" />
      </button>
    </div>
  );
};

export default SearchInput;
