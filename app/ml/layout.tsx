import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ML Programs",
  description: "Python programs for Machine Learning algorithms",
};

export default function MLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}