import { SearchIcon } from "@heroicons/react/solid"

export default function SearchBar() {
    return (
      <div>
        <div className="relative flex items-center w-96">
          <input
            type="text"
            name="search"
            id="search"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5 opacity-20">
            <SearchIcon />
          </div>
        </div>
      </div>
    )
  }