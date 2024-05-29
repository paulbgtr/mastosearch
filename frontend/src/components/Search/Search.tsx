import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";

const fetchInstances = async (query: string) => {
  const res = await fetch("http://localhost:8080/search", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

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
  const [results, setResults] = useState<{ id: string; name: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const mutation = useMutation({
    mutationFn: (query: string) => fetchInstances(query),
    onSuccess: (data) => {
      const { instances } = data;

      const filteredInstances = instances.map(
        ({ name, id }: { name: string; id: string }) => {
          return { name, id };
        }
      );

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
    <article className="grid justify-center max-w-xl gap-4 mx-auto">
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
      {mutation.isPending && <p>Loading...</p>}
      {mutation.isError && <p>Error fetching data</p>}
      {mutation.isSuccess && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <p>ID: {result.id}</p>
              <p>Name: {result.name}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
