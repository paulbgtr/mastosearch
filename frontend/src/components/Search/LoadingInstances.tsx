import { MastodonInstanceList } from "../MastodonInstanceList/MastodonInstanceList";
import { Loading } from "../Loading/Loading";
import { MastodonInstance } from "../../types/MastodonInstance";
import { UseMutationResult } from "@tanstack/react-query";

export const LoadingInstances = ({
  mutation,
  results,
}: {
  mutation: UseMutationResult<MastodonInstance[], Error, string>;
  results: MastodonInstance[];
}) => {
  return (
    <section className="max-w-6xl mx-auto">
      {mutation.isPending && <Loading />}
      {mutation.isError && (
        <p className="text-center text-red-500">Error fetching data</p>
      )}
      {mutation.isSuccess && results.length > 0 && (
        <MastodonInstanceList instances={results} />
      )}
      {mutation.isSuccess && results.length === 0 && <p>No results found</p>}
    </section>
  );
};
