"use client";
import Link from "next/link";
import React from "react";
import { links } from "../../utils/constants";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full h-[80px] px-3 flex justify-between items-center border-b-[1px] border-b-gray-600 sticky top-0 z-50">
      <Link
        href="/"
        className="font-extrabold  text-[30px] text-red-400 tracking-wider"
      >
        wvefs
      </Link>

      <div>
        <ul className="flex gap-5 text-[18px]">
          <DarkModeToggle />
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
          <button
            className="rounded-lg bg bg-red-400 px-[5px] tracking-wide "
            onClick={() => {
              console.log("logged out");
            }}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
}
