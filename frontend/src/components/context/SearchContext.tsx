import { createContext, useState } from "react";
import type { MastodonInstance } from "@/types/MastodonInstance";

type SearchContextProps = {
  isAI: boolean;
  setIsAI: (isAI: boolean) => void;
  results: MastodonInstance[];
  setResults: (results: MastodonInstance[]) => void;
  query: string;
  setQuery: (query: string) => void;
  isNSFW: boolean;
  setIsNSFW: (isNSFW: boolean) => void;
};

export const SearchContext = createContext<SearchContextProps>({
  isAI: true,
  setIsAI: () => {},
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
  const [isAI, setIsAI] = useState(true);

  return (
    <SearchContext.Provider
      value={{
        isAI,
        setIsAI,
        results,
        setResults,
        query,
        setQuery,
        isNSFW,
        setIsNSFW,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
