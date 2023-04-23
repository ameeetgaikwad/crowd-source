import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex flex-row m-5 justify-end items-center">
      <div className="items-center mr-4">
        <Link href="/">Home</Link>
      </div>
      <div className="items-center mr-4">
        <Link href="/mint">Mint</Link>
      </div>

      <div className="items-center mr-4">
        <Link href="/about">About</Link>
      </div>

      <Link href="/contribute" target="_blank">
        <button className="bg-gradient-to-r from-blue-700 to-purple-400 hover:scale-105 transition-all text-white uppercase py-1.5 px-4 rounded-lg shadow-md">
          Contribute
        </button>
      </Link>
    </nav>
  );
}

export default Header;
