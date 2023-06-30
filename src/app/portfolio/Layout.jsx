import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">Our Works</h1>
      {children}
    </div>
  );
}
