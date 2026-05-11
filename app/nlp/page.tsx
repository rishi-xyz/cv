import { CodeViewer } from "@/src/components/code-viewer";
import { nlpFiles } from "@/src/data/nlp-files";
import { Code2 } from "lucide-react";

export default function NLPPPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/20">
              <Code2 className="size-6 text-teal-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              NLP Programs
            </h1>
          </div>
          <p className="text-neutral-400 text-lg">
            Python programs for Natural Language Processing
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nlpFiles.map((file, index) => (
            <CodeViewer
              key={file.name}
              name={file.name}
              description={file.description}
              path={file.path}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
