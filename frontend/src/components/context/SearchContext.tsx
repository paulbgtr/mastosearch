import { createContext, useState } from "react";
import type { MastodonInstance } from "@/types/MastodonInstance";

export const SearchContext = createContext<{
  results: MastodonInstance[];
  setResults: (results: MastodonInstance[]) => void;
  query: string;
  setQuery: (query: string) => void;
  isNSFW: boolean;
  setIsNSFW: (isNSFW: boolean) => void;
}>({
  results: [],
  setResults: () => {},
  query: "",
  setQuery: () => {},
  isNSFW: false,
  setIsNSFW: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [results, setResults] = useState<MastodonInstance[]>([]);
  const [query, setQuery] = useState("");
  const [isNSFW, setIsNSFW] = useState(false);

  return (
    <SearchContext.Provider
      value={{ results, setResults, query, setQuery, isNSFW, setIsNSFW }}
    >
      {children}
    </SearchContext.Provider>
  );
};
