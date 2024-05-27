export default function Navbar() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 shadow-md md:px-6">
      <a className="flex items-center gap-2 text-lg font-semibold" href="#">
        mastosearch
      </a>
      <nav className="flex items-center gap-4 sm:gap-6">
        <a
          className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          href="https://github.com/paulbgtr/mastosearch"
        >
          Github
        </a>
      </nav>
    </header>
  );
}
