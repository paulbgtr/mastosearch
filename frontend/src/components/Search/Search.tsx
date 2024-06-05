import { useContext, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchMastodonInstances } from "@/api/fetchMastodonInstances";
import { filterInstances } from "@/lib/utils";
import { SearchBar } from "./SearchBar/SearchBar";
import { LoadingInstances } from "./LoadingInstances";
import { SearchContext } from "../context/SearchContext";
import { Header } from "./Header";

export const Search = ({ searchExample }: { searchExample: string }) => {
  const { query, setResults } = useContext(SearchContext);
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
          inputRef={inputRef}
          handleSubmit={handleSubmit}
          searchExample={searchExample}
        />
      </section>
      <LoadingInstances mutation={mutation} />
    </article>
  );
};
