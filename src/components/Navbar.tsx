"use client"
import { useState } from "react";
import Link from "next/link";
import { signout } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
//import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Hangout<span className="text-gray-800">.World</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/explore" className="text-gray-700 hover:text-blue-600">
            Explore
          </Link>
          <Link href="/partners" className="text-gray-700 hover:text-blue-600">
            Find Partners
          </Link>
          <Link href="/trips" className="text-gray-700 hover:text-blue-600">
            Trips
          </Link>
          <Link href="/guides" className="text-gray-700 hover:text-blue-600">
            Guides
          </Link>
        </div>

        {/* Desktop Buttons */}
        
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
            Sign In
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Sign Up
          </Link>
          {(
        <form action={signout}>
          <Button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-red-600 hover:text-white transition" type="submit">
            Sign Out
          </Button>
        </form>
      )}
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link href="/explore" className="text-gray-700 hover:text-blue-600">
              Explore
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-blue-600">
              Find Partners
            </Link>
            <Link href="/trips" className="text-gray-700 hover:text-blue-600">
              Trips
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-blue-600">
              Guides
            </Link>
            <hr />
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </Link>
            <Link href="/sign-up" className="px-4 py-2 bg-blue-600 text-white rounded-md text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
