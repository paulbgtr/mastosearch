import { useContext } from "react";
import { AllowNSFW } from "./AllowNSFW";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { SearchContext } from "../../../context/SearchContext";

/**
 * A search control component that allows the user to search for a query
 *
 * @param handleSubmit - the function to call when the user submits the search
 *
 * @returns a search control component
 */
export const SearchControl = ({
  handleSubmit,
}: {
  handleSubmit: () => void;
}) => {
  const { query, isNSFW, setIsNSFW, isAI, setIsAI } = useContext(SearchContext);
  return (
    <div className="flex justify-between mt-3">
      {isAI ? (
        <AllowNSFW isNSFW={isNSFW} setIsNSFW={setIsNSFW} />
      ) : (
        <span></span>
      )}
      <div className="flex gap-2">
        <Button onClick={() => setIsAI(!isAI)} variant="outline">
          {isAI ? "No AI" : "AI"}
        </Button>
        <Button
          title="Search"
          onClick={handleSubmit}
          disabled={query.length === 0 && isAI}
          variant={"ghost"}
        >
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  );
};
