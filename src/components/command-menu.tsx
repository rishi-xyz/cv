"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/src/components/ui/command";
import { Button } from "./ui/button";
import { CommandIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const router = useRouter();
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 hidden border-t border-border/50 glass-dark p-3 text-center text-sm text-muted-foreground print:hidden xl:block animate-slide-up">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded-md border border-border/50 bg-muted/30 px-2 font-mono text-xs font-medium text-muted-foreground opacity-80 hover:bg-muted/50 transition-all duration-200">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open command menu
      </div>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 flex rounded-full shadow-2xl print:hidden xl:hidden glass-dark hover-lift hover-glow border-border/50 animate-scale-in"
      >
        <CommandIcon className="size-5 text-primary" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." className="border-0 focus:ring-0" />
        <CommandList className="max-h-100">
          <CommandEmpty className="text-muted-foreground animate-fade-in">No results found.</CommandEmpty>
          <CommandGroup heading="Actions" >
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.open(
                  "/hrishikesh-resume-jan-26.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }}
              className="hover-lift cursor-pointer"
            >
              <span className="gradient-text">View Resume</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Quick Links" className="animate-slide-in-right">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
                className="hover-lift cursor-pointer"
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};