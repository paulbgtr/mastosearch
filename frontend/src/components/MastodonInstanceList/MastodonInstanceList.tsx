import "src/index.css";
import { MastodonInstance } from "../MastodonInstance/MastodonInstance";
import { MastodonInstance as MastodonInstanceT } from "@/types/MastodonInstance";

export const MastodonInstanceList = ({
  instances,
}: {
  instances: MastodonInstanceT[];
}) => {
  return (
    <div className="flex flex-col gap-3">
      {instances.map((result) => (
        <MastodonInstance
          key={result.name}
          name={result.name}
          activeUsers={result.activeUsers}
          openRegistrations={result.openRegistrations}
          categories={result.categories}
          shortDescription={result.shortDescription}
        />
      ))}
    </div>
  );
};
