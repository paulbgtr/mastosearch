import { useContext } from "react";
import { SearchInput } from "./SearchInput";
import { SearchControl } from "./SearchControl/SearchControl";
import { SearchContext } from "@/components/context/SearchContext";

/**
 * A search bar component that contains a search input and a search control with additional styling
 *
 * @param inputRef - a reference to the search input element
 * @param searchExample - an example search query
 * @param handleSubmit - a function to handle the search form submission
 *
 * @returns a search bar component
 */
export const SearchBar = ({
  inputRef,
  searchExample,
  handleSubmit,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  searchExample: string;
  handleSubmit: () => void;
}) => {
  const { isAI } = useContext(SearchContext);

  return (
    <div className="flex-col w-full px-4 py-2 shadow-lg rounded-xl">
      {isAI ? (
        <SearchInput inputRef={inputRef} searchExample={searchExample} />
      ) : (
        // todo
        <div></div>
      )}
      <SearchControl handleSubmit={handleSubmit} />
    </div>
  );
};
