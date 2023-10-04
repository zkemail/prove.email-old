"use client";

import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const SearchInput = ({ className }: { className?: string }) => {
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div
      className={cn(
        "drop-shadow rounded relative items-center bg-white border px-2",
        className
      )}
    >
      <Search className="absolute text-muted-foreground" size={18} />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={searchInput}
        name="search"
        onChange={(e) => setSearchInput(e.target.value)}
        className="ml-6 h-8 text-black rounded bg-transparent border-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-transparent focus:ring-0"
      />
      <kbd className="text-sm text-muted-foreground flex items-center gap-1">
        <span className="text-xl">⌘</span>+<span>K</span>
      </kbd>
    </div>
  );
};

export default SearchInput;
