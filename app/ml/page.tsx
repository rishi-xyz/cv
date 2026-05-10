import { CodeViewer } from "@/src/components/code-viewer";
import { mlFiles } from "@/src/data/ml-files";
import { Brain } from "lucide-react";

export default function MLPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
              <Brain className="size-6 text-emerald-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              ML Programs
            </h1>
          </div>
          <p className="text-neutral-400 text-lg">
            Python programs for Machine Learning algorithms
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mlFiles.map((file, index) => (
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