"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const SortAndFilter = () => {
  const [searchInput, setSearchInput] = useState("");
  const [newest, setNewest] = useState(true);
  const [recommended, setRecommended] = useState(false);
  const router = useRouter();

  const setSearchParams = () => {
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: {
          search: searchInput,
          newest,
          recommended,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  useEffect(() => {
    setSearchParams();
  }, [searchInput, recommended, newest]);

  return (
    <div className="flex w-[200px] mr-auto mb-20">
      <div className="flex flex-col">
        <Input
          placeholder="Search on blog..."
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-fit mb-10"
          value={searchInput}
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold mb-5">Order by</h1>
          <div className="flex flex-col">
            <Button
              onClick={() => {
                setNewest(true);
                setRecommended(false);
              }}
              variant={"link"}
              className={cn("w-fit p-0 m-0", newest && "text-muted-foreground")}
            >
              Newest
            </Button>
            <Button
              onClick={() => {
                setRecommended(true);
                setNewest(false);
              }}
              variant={"link"}
              className={cn(
                "w-fit p-0 m-0",
                recommended && "text-muted-foreground"
              )}
            >
              Recommended
            </Button>
          </div>
        </div>
      </div>
      <Separator className="h-full mx-8" orientation="vertical" />
    </div>
  );
};

export default SortAndFilter;
