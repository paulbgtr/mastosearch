export const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-100 md:p-6 dark:bg-gray-800">
      <div className="container flex items-center justify-between mx-auto max-w-7xl">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Mastosearch. All rights reserved. Open source under the MIT
          license.
        </p>
        <a
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-50"
          href="#"
        >
          Mastosearch
        </a>
      </div>
    </footer>
  );
};
