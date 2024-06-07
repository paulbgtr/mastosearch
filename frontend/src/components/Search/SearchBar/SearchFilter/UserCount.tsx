import { FilterHeader } from "./FilterHeader";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/**
 * A component that allows users to filter out instances based on their user count
 *
 * @param userCount
 * @param selectedUserCount
 * @param setSelectedUserCount
 * @returns A component that allows users to filter out instances based on their user count
 */
export const UserCount = ({
  userCount,
  selectedUserCount,
  setSelectedUserCount,
}: {
  userCount: string[];
  selectedUserCount: string;
  setSelectedUserCount: (value: string) => void;
}) => {
  return (
    <>
      <section>
        <FilterHeader>User Count</FilterHeader>
        <RadioGroup
          value={selectedUserCount}
          onValueChange={setSelectedUserCount}
        >
          {userCount.map((count) => (
            <div key={count} className="flex items-center space-x-2">
              <RadioGroupItem value={count} id={count} />
              <Label htmlFor={count}>{count}</Label>
            </div>
          ))}
        </RadioGroup>
      </section>
    </>
  );
};
