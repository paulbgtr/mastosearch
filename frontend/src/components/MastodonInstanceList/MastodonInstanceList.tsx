import { MastodonInstance } from "../MastodonInstance/MastodonInstance";
import { MastodonInstance as MastodonInstanceT } from "@/types/MastodonInstance";

export const MastodonInstanceList = ({
  instances,
}: {
  instances: MastodonInstanceT[];
}) => {
  console.log(instances);
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {instances.map((result) => (
        <MastodonInstance
          key={result.name}
          languages={result.languages}
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
