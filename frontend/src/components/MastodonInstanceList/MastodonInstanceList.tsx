import { MastodonInstance } from "../MastodonInstance/MastodonInstance";
import { MastodonInstance as MastodonInstanceT } from "@/types/MastodonInstance";

export const MastodonInstanceList = ({
  instances,
}: {
  instances: MastodonInstanceT[];
}) => {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
