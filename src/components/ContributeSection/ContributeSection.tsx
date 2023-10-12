"use client";

import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import { childrenVariant, container } from "@/lib/motion";
import { IoIosSend } from "react-icons/io";

const contributors = [
  { image: "/aayush.svg", name: "Aayush" },
  { image: "/sora.svg", name: "Sora" },
  { image: "/saleel.svg", name: "Saleel" },
  { image: "/rasul.svg", name: "Rasul" },
  { image: "/tyler.svg", name: "Tyler" },
  { image: "/andy.svg", name: "Andy" },
];

const ContributeSection = () => {
  return (
    <MaxWidthWrapper className="flex flex-col gap-y-10 items-center text-center pt-8 pb-28">
      <div className="flex flex-col gap-y-6">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="lg:text-5xl text-4xl font-medium"
        >
          Contribute to core
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground"
        >
          Work with incredible folks like
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        className="grid grid-cols-3 md:grid-cols-6 md:gap-24 gap-14 justify-center mt-8 transition-all"
      >
        {contributors.map((item) => (
          <motion.div
            variants={childrenVariant}
            key={item.name}
            className="flex flex-col gap-y-3 items-center hover:scale-110 transition"
          >
            <div className="relative sm:h-[70px] sm:w-[70px] h-[55px] w-[55px]">
              <Image src={item.image} alt={item.name.toLowerCase()} fill />
            </div>

            <span>{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-col items-center w-full space-y-8 mt-3">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/2 max-md:text-sm"
        >
          Check our org readme for a list of possible projects related to
          zk-email or message us if you have any question
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex space-x-4 items-center"
        >
          <div className="bg-gradient-to-br from-blue-300 via-violet-300 to-orange-300 p-[1px] rounded w-fit">
            <Link
              href={"https://github.com/zkemail"}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "bg-tertiary dark:bg-tertiary-foreground text-tertiary-foreground font-normal dark:text-primary rounded hover:dark:bg-tertiary-foreground/80 w-[130px]"
              )}
            >
              Org Read me
            </Link>
          </div>
          <Link
            href={"https://t.me/yush_g"}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "shadow w-[130px] font-normal gap-2"
            )}
          >
            <div className="bg-blue-400 rounded-full p-1 flex justify-center items-center">
              <IoIosSend color="white" size={10} />
            </div>
            Message
          </Link>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContributeSection;
