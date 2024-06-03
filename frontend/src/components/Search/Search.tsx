import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import type { MastodonInstance } from "@/types/MastodonInstance";
import { fetchMastodonInstances } from "@/api/fetchMastodonInstances";
import { filterInstances } from "@/lib/utils";
import { SearchBar } from "./SearchBar/SearchBar";
import { LoadingInstances } from "./LoadingInstances";

const Header = () => {
  return (
    <header className="space-y-1 text-center">
      <h1 className="font-black text-7xl">Discover Your Tribe.</h1>
      <p className="text-lg">
        Search for the Mastodon instance that fits you best
      </p>
    </header>
  );
};

export const Search = ({ searchExample }: { searchExample: string }) => {
  const [query, setQuery] = useState("");
  const [isNSWF, setIsNSFW] = useState(false);
  const [results, setResults] = useState<MastodonInstance[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const mutation = useMutation({
    mutationFn: fetchMastodonInstances,
    onSuccess: (data) => {
      const { instances } = data;

      const filteredInstances = filterInstances(instances);
      setResults(filteredInstances);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  const handleSubmit = () => {
    if (query.length > 0) {
      mutation.mutate(query);
    }
  };

  return (
    <article className="space-y-10">
      <section className="grid justify-center max-w-xl gap-4 mx-auto">
        <Header />
        <SearchBar
          query={query}
          setQuery={setQuery}
          isNSWF={isNSWF}
          setIsNSFW={setIsNSFW}
          inputRef={inputRef}
          handleSubmit={handleSubmit}
          searchExample={searchExample}
        />
      </section>
      <LoadingInstances mutation={mutation} results={results} />
    </article>
  );
};
