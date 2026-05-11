import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NLP Programs",
  description: "Python programs for Natural Language Processing",
};

export default function NLPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
