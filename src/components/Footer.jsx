function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center md:text-left">
        <span className="text-sm text-gray-500">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Sanjida
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 justify-center md:justify-start">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
