"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import FloatingBalls from "./FloatingBalls";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row mt-32">
      <MaxWidthWrapper className="flex justify-center text-center">
        <div className="flex flex-col items-center gap-y-12">
          <div className="w-fit bg-gradient-to-b from-blue-400 via-violet-400 to-orange-400 rounded-full p-[1px]">
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

          <h1 className="uppercase text-4xl lg:text-6xl font-semibold text-slate-800 dark:text-slate-200 tracking-wide max-md:leading-snug">
            proof of email
          </h1>
          <p className="max-md:text-sm text-muted-foreground w-2/3">
            No MPC assumptions. No trusted hardware. No trusted attestation
            servers. Only trust smart contracts, email, and DNS infrastructure.
          </p>
        </div>
      </MaxWidthWrapper>

      <FloatingBalls />
    </section>
  );
};

export default HeroSection;
