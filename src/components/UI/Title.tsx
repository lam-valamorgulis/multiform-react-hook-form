import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return <h1 className="text-2xl uppercase">{children}</h1>;
}
