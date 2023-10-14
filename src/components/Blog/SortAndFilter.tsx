"use client";

import { useEffect } from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSortAndFilterStore } from "@/store/sortAndFilterStore";

export interface SortAndFilterProps {
  isMobile?: boolean;
}

const SortAndFilter = ({ isMobile }: SortAndFilterProps) => {
  const router = useRouter();
  const {
    newest,
    recommended,
    setNewest,
    setRecommended,
    searchInput,
    setSearchInput,
  } = useSortAndFilterStore();

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
    <div
      className={cn("lg:flex w-[200px] mr-auto", isMobile ? "flex" : "hidden")}
    >
      <div className="flex flex-col">
        {/* <Input
          placeholder="Search on blog..."
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-fit mb-10 max-lg:hidden"
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
              className={cn(
                "w-fit p-0 m-0",
                !newest && "text-muted-foreground"
              )}
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
                !recommended && "text-muted-foreground"
              )}
            >
              Recommended
            </Button>
          </div>
        </div> */}
        Testing
      </div>
      <Separator className="h-full mx-8" orientation="vertical" />
    </div>
  );
};

export default SortAndFilter;
