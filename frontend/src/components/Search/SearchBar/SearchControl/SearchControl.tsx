import { AllowNSWF } from "./AllowNSFW";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";

/**
 * A search control component that allows the user to search for a query
 *
 * @param query - the query to search for
 * @param handleSubmit - the function to call when the user submits the search
 * @param isNSWF - a boolean that determines if the search should include NSFW content
 * @param setIsNSFW - a function that sets the isNSFW state
 *
 * @returns a search control component
 */
export const SearchControl = ({
  query,
  handleSubmit,
  isNSWF,
  setIsNSFW,
}: {
  query: string;
  handleSubmit: () => void;
  isNSWF: boolean;
  setIsNSFW: (isNSFW: boolean) => void;
}) => {
  return (
    <div className="flex justify-between mt-3">
      <AllowNSWF isNSWF={isNSWF} setIsNSFW={setIsNSFW} />
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
