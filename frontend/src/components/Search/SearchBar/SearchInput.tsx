import { Input } from "@/components/ui/input";

/**
 * A search input component that takes in a query, a function to set the query, a ref to the input element, and a search example
 *
 * @param query - the current query
 * @param setQuery - a function to set the query
 * @param inputRef - a ref to the input element
 * @param searchExample - an example of what to search for
 *
 * @returns a search input component
 */
export const SearchInput = ({
  query,
  setQuery,
  inputRef,
  searchExample,
}: {
  query: string;
  setQuery: (query: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  searchExample: string;
}) => {
  return (
    <Input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
      placeholder={searchExample}
      className="flex-grow border-0 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
    />
  );
};
