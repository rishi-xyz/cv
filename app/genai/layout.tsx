import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GenAI Programs",
  description: "Python programs for GenAI and NLP",
};

export default function GenAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
