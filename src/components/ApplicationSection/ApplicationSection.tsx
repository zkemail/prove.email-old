"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useState } from "react";
import { FaAirbnb, FaGithub } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabContent from "../TabContent";
import { motion } from "framer-motion";
import { container, childrenVariant } from "@/lib/motion";
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";
import TabContent3 from "./TabContent3";
import TabContent4 from "./TabContent4";
import TabContent5 from "./TabContent5";

const datas = [
  { name: "Email Wallet" },
  { name: "ZK Proof of Twitter" },
  { name: "ZK Proof of Github" },
  { name: "Proof of Organization" },
  { name: "ZK KYC" },
];

const ApplicationSection = () => {
  const [twitterInput, setTwitterInput] = useState("");
  // bg-gradient-to-br dark:from-violet-950 dark:via-primary-foreground dark:to-emerald-950  from-violet-50 via-white to-emerald-50
  return (
    <section className="mt-32 px-2.5 py-20 md:p-20">
      <Tabs
        defaultValue="0"
        className="justify-center flex flex-col items-center"
      >
        <motion.div initial="hidden" whileInView="show" variants={container}>
          <TabsList className="flex flex-wrap gap-3 max-lg:bg-transparent mb-24 md:mb-10">
            {datas.map((data, index) => (
              <motion.div variants={childrenVariant} key={index}>
                <TabsTrigger
                  className="bg-muted max-lg:border max-md:shadow-md data-[state=active]:shadow hover:scale-105"
                  value={index.toString()}
                >
                  {data.name}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TabContent1 />
          <TabContent2
            twitterInput={twitterInput}
            setTwitterInput={setTwitterInput}
          />
          <TabContent3 />
          <TabContent4 />
          <TabContent5 />
        </motion.div>
      </Tabs>
    </section>
  );
};

export default ApplicationSection;
