import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const BuildYourOwn = () => {
  return (
    <MaxWidthWrapper className="flex flex-col gap-y-16 items-center text-center py-24">
      <div className="flex flex-col gap-y-8 items-center">
        <h1 className="lg:text-5xl text-4xl font-medium">Build Your Own</h1>
        <p className="w-4/5 text-muted-foreground font-normal">
          No trusted hardware. No trusted attestation servers. Only trust zero
          knowledge proofs, smart contracts, email, and DNS infrastructure.
        </p>
      </div>

      <div className="relative w-1/2 h-44">
        <Image src={"/mit_license.svg"} alt="image" fill />
      </div>

      <div className="flex flex-col gap-y-8">
        <p className="w-full md:w-4/5 font-normal text-muted-foreground mx-auto">
          We directly verify the signatures on your emails within a zk proof,
          including regex parsing within zk. Read our{" "}
          <Link
            href={"https://blog.aayushg.com/posts/zkemail/"}
            className="text-[#7e6cd6] hover:underline underline-offset-4"
            target="_blank"
          >
            blog post
          </Link>{" "}
          to understand the core email proving technology, or watch our{" "}
          <Link
            href={"https://www.youtube.com/watch?v=sPCHiUT3TmA&t=769s"}
            target="_blank"
            className="text-[#7e6cd6] hover:underline underline-offset-4"
          >
            technical presentation
          </Link>{" "}
          to understand how the email wallet technology works.
        </p>

        <h3 className="font-medium text-lg">
          Design via our open source, MIT licensed SDKs.
        </h3>
        <div className="bg-gradient-to-br from-blue-300 via-violet-300 to-orange-300 rounded p-[1px] w-fit self-center">
          <Link
            href={"https://www.npmjs.com/search?q=%40zk-email"}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "bg-tertiary dark:bg-tertiary-foreground text-tertiary-foreground font-normal dark:text-primary rounded hover:dark:bg-tertiary-foreground/80"
            )}
          >
            Access SDK
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BuildYourOwn;
