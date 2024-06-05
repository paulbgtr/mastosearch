import { useContext } from "react";
import { AllowNSWF } from "./AllowNSFW";
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
  const { query, isNSFW, setIsNSFW } = useContext(SearchContext);
  return (
    <div className="flex justify-between mt-3">
      <AllowNSWF isNSFW={isNSFW} setIsNSFW={setIsNSFW} />
      <Button
        onClick={handleSubmit}
        disabled={query.length === 0}
        variant={"ghost"}
        className=""
      >
        <ArrowUpIcon />
      </Button>
    </div>
  );
};
