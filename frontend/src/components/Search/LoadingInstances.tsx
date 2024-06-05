import { useContext } from "react";
import { MastodonInstanceList } from "../MastodonInstanceList/MastodonInstanceList";
import { Loading } from "../Loading/Loading";
import { MastodonInstance } from "../../types/MastodonInstance";
import { UseMutationResult } from "@tanstack/react-query";
import { SearchContext } from "../context/SearchContext";

/**
 * A loading instances component that takes in a mutation object
 * and returns different components based on the state of the mutation.
 *
 * @param mutation
 * @returns A loading instances component
 */
export const LoadingInstances = ({
  mutation,
}: {
  mutation: UseMutationResult<MastodonInstance[], Error, string>;
}) => {
  const { results } = useContext(SearchContext);

  const { isPending, isError, isSuccess } = mutation;

  return (
    <section className="max-w-6xl mx-auto">
      {isPending && <Loading />}
      {isError && (
        <p className="text-center text-red-500">Error fetching data</p>
      )}
      {isSuccess && results.length > 0 && (
        <MastodonInstanceList instances={results} />
      )}
      {isSuccess && results.length === 0 && <p>No results found</p>}
    </section>
  );
};
