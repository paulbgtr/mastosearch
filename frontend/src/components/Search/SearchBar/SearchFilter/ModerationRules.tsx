import { FilterHeader } from "./FilterHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/**
 * ModerationRules component
 *
 * @param moderationRules
 * @param selectedModerationRules
 * @param setSelectedModerationRules
 * @returns A component that allows users to filter out instances based on their moderation rules
 */
export const ModerationRules = ({
  moderationRules,
  selectedModerationRules,
  setSelectedModerationRules,
}: {
  moderationRules: string[];
  selectedModerationRules: string[];
  setSelectedModerationRules: (
    value: string[] | ((prev: string[]) => string[])
  ) => void;
}) => {
  const handleCheckboxChange = (rule: string) => {
    setSelectedModerationRules((prevSelectedRules: string[]) => {
      if (prevSelectedRules.includes(rule)) {
        return prevSelectedRules.filter((r: string) => r !== rule);
      } else {
        return [...prevSelectedRules, rule];
      }
    });
  };

  return (
    <>
      <FilterHeader>Restricted Moderation Rules</FilterHeader>
      {moderationRules.map((rule) => (
        <div key={rule} className="flex space-x-1">
          <Checkbox
            id={rule}
            onCheckedChange={() => handleCheckboxChange(rule)}
            checked={selectedModerationRules.includes(rule)}
          />
          <Label htmlFor={rule}>{rule}</Label>
        </div>
      ))}
    </>
  );
};
