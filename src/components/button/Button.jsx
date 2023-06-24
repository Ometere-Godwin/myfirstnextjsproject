import Link from "next/link";
import React from "react";

export default function Button({ text, url }) {
  return (
    <div className="w-full">
      <Link href={url}>
        <button className="bg-[#194c33] w-full p-3 rounded-lg text-xl font-bold">
          {text}
        </button>
      </Link>
    </div>
  );
}
