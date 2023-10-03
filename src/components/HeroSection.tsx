"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="flex flex-col md:flex-row items-end mt-40">
      <MaxWidthWrapper>
        <div className="flex flex-col md:w-[65%] gap-y-12">
          <div className="w-fit bg-gradient-to-b from-blue-400 via-violet-300 to-orange-400 rounded-full p-[1px]">
            <div className="w-fit rounded-full py-1.5 px-3 bg-tertiary flex items-center gap-2">
              <Image
                src={"/ethereum-gold.svg"}
                alt="ethereum-gold"
                width={14}
                height={10}
              />
              <span className="text-tertiary-foreground md:text-sm text-xs">
                The future of identity verification and transactions on Ethereum
              </span>
            </div>
          </div>

          <h1 className="uppercase text-6xl md:text-7xl lg:text-8xl font-semibold text-slate-800 dark:text-slate-200 tracking-wide max-md:leading-snug">
            proof of <br />
            <span className="md:ml-56">email</span>
          </h1>
          <p className="max-md:text-sm">
            No MPC assumptions. No trusted hardware. No trusted attestation
            servers. Only trust smart contracts, email, and DNS infrastructure.
          </p>
        </div>
      </MaxWidthWrapper>

      {/* Desktop size images */}
      <div className="md:block hidden absolute w-full h-[550px] -bottom-[15%] left-40">
        <Image
          src={"/girl-check-phone.svg"}
          alt="hero-image"
          height={650}
          width={650}
          className={cn(
            "object-contain absolute right-[10%] -bottom-5",
            resolvedTheme === "dark" && "invert"
          )}
        />
        <Image
          src={"/dry-brush.svg"}
          width={170}
          height={80}
          alt="dry-brush"
          className="absolute right-40 bottom-[35%] -z-20"
        />
      </div>

      {/* Mobile size images */}
      <div className="md:hidden absolute w-full h-[225px] overflow-x-clip -bottom-[250px]">
        <Image
          src={"/girl-check-phone.svg"}
          alt="hero-image"
          height={450}
          width={550}
          className={cn(
            "absolute -right-5 -bottom-[30%]",
            resolvedTheme === "dark" && "invert"
          )}
        />

        <Image
          src={"/dry-brush.svg"}
          width={120}
          height={80}
          alt="dry-brush"
          className="absolute object-contain right-0 bottom-[30%] transition-all sm:bottom-[50%] -z-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;
