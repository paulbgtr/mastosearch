/**
 * A header component that displays the title and a description of the app.
 *
 * @returns A header component
 */
export const Header = () => {
  return (
    <header className="space-y-1 text-center">
      <h1 className="text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
        Discover Your Tribe.
      </h1>
      <p className="text-sm sm:text-base md:text-lg">
        Search for the Mastodon instance that fits you best
      </p>
    </header>
  );
};
