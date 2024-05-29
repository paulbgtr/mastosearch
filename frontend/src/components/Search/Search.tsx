import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import type { MastodonInstance } from "@/types/MastodonInstance";
import { fetchMastodonInstances } from "@/api/fetchMastodonInstances";
import { MastodonInstanceList } from "../MastodonInstanceList/MastodonInstanceList";
import { filterInstances } from "@/lib/utils";
import { Loading } from "../Loading/Loading";

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
        <div className="flex w-full">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
            placeholder={searchExample}
            className="flex-grow rounded-r-none"
          />
          <Button
            onClick={handleSubmit}
            disabled={query.length === 0}
            className="rounded-l-none"
          >
            <ArrowUpIcon />
          </Button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        {mutation.isPending && <Loading />}
        {mutation.isError && (
          <p className="text-center text-red-500">Error fetching data</p>
        )}
        {mutation.isSuccess && results.length > 0 && (
          <MastodonInstanceList instances={results} />
        )}
        {mutation.isSuccess && results.length === 0 && <p>No results found</p>}
      </section>
    </article>
  );
};
