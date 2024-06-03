import { SearchInput } from "./SearchInput";
import { SearchControl } from "./SearchControl";

/**
 * A search bar component that contains a search input and a search control with additional styling
 *
 * @param query - the current search query
 * @param setQuery - a function to set the search query
 * @param inputRef - a reference to the search input element
 * @param searchExample - an example search query
 * @param isNSWF - a boolean to determine if NSFW content should be included in the search results
 * @param setIsNSFW - a function to set the isNSFW boolean
 * @param handleSubmit - a function to handle the search form submission
 *
 * @returns a search bar component
 */
export const SearchBar = ({
  query,
  setQuery,
  inputRef,
  searchExample,
  isNSWF,
  setIsNSFW,
  handleSubmit,
}: {
  query: string;
  setQuery: (query: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  searchExample: string;
  isNSWF: boolean;
  setIsNSFW: (isNSFW: boolean) => void;
  handleSubmit: () => void;
}) => {
  return (
    <div className="flex-col w-full px-4 py-2 bg-gray-200 rounded-xl">
      <SearchInput
        query={query}
        setQuery={setQuery}
        inputRef={inputRef}
        searchExample={searchExample}
      />
      <SearchControl
        query={query}
        isNSWF={isNSWF}
        setIsNSFW={setIsNSFW}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
