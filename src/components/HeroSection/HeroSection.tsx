"use client";

import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { motion } from "framer-motion";
import EmailWallet from "./EmailWallet";
import Zkp2p from "./ZkP2p";
import FloatingBalls from "../FloatingBalls";

const HeroSection = () => {
  return (
    <>
      <FloatingBalls />
      <section className="relative flex flex-col md:flex-row mt-32 overflow-x-clip">
        <MaxWidthWrapper className="flex justify-center text-center">
          <div className="flex flex-col items-center gap-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="w-fit bg-gradient-to-b from-blue-400 via-violet-400 to-orange-400 rounded-full p-[1px]"
            >
              <div className="w-fit rounded-full py-1.5 px-3 bg-tertiary flex items-center gap-2">
                <Image
                  src={"/ethereum-gold.svg"}
                  alt="ethereum-gold"
                  width={14}
                  height={10}
                />
                <span className="text-tertiary-foreground md:text-sm text-xs">
                  Email-based identity verification and transactions on Ethereum
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="uppercase text-4xl lg:text-6xl font-semibold text-slate-800 dark:text-slate-200 tracking-wide max-md:leading-snug"
            >
              proof of email
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-md:text-sm text-muted-foreground w-2/3"
            >
              Anonymously prove any subset of any email you sent or received, on-chain. 
              Directly verify the email sender, without having to trust us.
            </motion.p>

            <div className="flex flex-col lg:flex-row gap-y-10 justify-between w-full">
              <EmailWallet />
              <Zkp2p />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default HeroSection;
