import { Input } from "@/components/ui/input";
import { useRef, useEffect } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <article className="grid justify-center max-w-xl gap-4 mx-auto">
      <Header />
      <div className="flex w-full">
        <Input
          ref={inputRef}
          placeholder={searchExample}
          className="flex-grow rounded-r-none"
        />
        <Button className="rounded-l-none">
          <ArrowUpIcon />
        </Button>
      </div>
    </article>
  );
};
