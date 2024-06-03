import { Button } from "@/components/ui/button";

const baseClasses = "py-2 h-8 rounded-lg px-2 font-bold border-2 text-sm";
const danger =
  "bg-red-500 hover:border-red-600 hover:bg-red-600 border-red-500";
const dangerOutline =
  "bg-white-100 text-red-500 hover:bg-red-500 hover:text-white border-red-500";

/**
 * A button that allows the user to toggle NSFW content
 *
 * @param isNSWF - Whether or not the user has NSFW content enabled
 * @param setIsNSFW - A function that toggles the NSFW content
 *
 * @returns A button that allows the user to toggle NSFW content
 */
export const AllowNSWF = ({
  isNSWF,
  setIsNSFW,
}: {
  isNSWF: boolean;
  setIsNSFW: (isNSFW: boolean) => void;
}) => {
  const variant = isNSWF ? danger : dangerOutline;

  return (
    <Button
      onClick={() => setIsNSFW(!isNSWF)}
      className={`${variant} ${baseClasses}`}
    >
      NSFW
    </Button>
  );
};
