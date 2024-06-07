/**
 * @param children
 * @returns A header for each search filter
 */
export const FilterHeader = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-bold">{children}</h3>;
};
