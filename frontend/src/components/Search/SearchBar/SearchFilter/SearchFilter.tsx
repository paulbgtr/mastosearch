import { useState } from "react";

import { UserCount } from "./UserCount";
import { userCount } from "@/data/userCount";

import { ModerationRules } from "./ModerationRules";
import { moderationRules } from "@/data/moderationRules";

/**
 * This is the component that is rendered when the AI is turned off
 *
 * It allows users to explicitly filter out instances based on their preferences
 *
 * @returns A search filter component
 */
export const SearchFilter = () => {
  const [selectedUserCount, setSelectedUserCount] = useState("does not matter");
  const [selectedModerationRules, setSelectedModerationRules] = useState<
    string[]
  >([]);

  return (
    <>
      <UserCount
        selectedUserCount={selectedUserCount}
        setSelectedUserCount={setSelectedUserCount}
        userCount={userCount}
      />
      <ModerationRules
        moderationRules={moderationRules}
        selectedModerationRules={selectedModerationRules}
        setSelectedModerationRules={setSelectedModerationRules}
      />
    </>
  );
};
