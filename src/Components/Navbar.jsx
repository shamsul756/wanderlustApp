
import Image from "next/image";
import Link from "next/link";

const NavbarPage = () => {
  return (
    <nav className="bg-white shadow-md px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Left Menu */}
        <ul className="order-2 lg:order-1 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-gray-700 font-medium text-sm md:text-base">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/destinations"
              className="hover:text-blue-600 transition"
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/my-bookings"
              className="hover:text-blue-600 transition"
            >
              My Bookings
            </Link>
          </li>

          <li>
            <Link
              href="/add-destination"
              className="hover:text-blue-600 transition"
            >
              Add Destination
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Link
          href="/"
          className="order-1 lg:order-2 flex items-center"
        >
          <Image
            src="/assets/Wanderlast.png"
            width={120}
            height={120}
            alt="Wanderlust Logo"
            className="object-contain w-20 md:w-28 h-auto"
          />
        </Link>

        {/* Right Menu */}
        <ul className="order-3 flex flex-wrap justify-center items-center gap-3">
          <li>
            <Link
              href="/profile"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default NavbarPage;

