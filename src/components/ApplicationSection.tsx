"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { useState } from "react";
import { Github, LucideGithub } from "lucide-react";
import { FaAirbnb, FaGithub } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabContent from "./TabContent";
import { motion } from "framer-motion";
import { container, childrenVariant } from "@/lib/motion";

const datas = [
  { name: "Email Wallet" },
  { name: "ZK Proof of Twitter" },
  { name: "ZK Proof of Github" },
  { name: "Proof of Organization" },
  { name: "ZK KYC" },
  { name: "Build your own?" },
];

const ApplicationSection = () => {
  const [twitterInput, setTwitterInput] = useState("");

  return (
    <section className="mt-20 px-2.5 py-16 md:p-20">
      <Tabs
        defaultValue="0"
        className="justify-center flex flex-col items-center"
      >
        <motion.div initial="hidden" whileInView="show" variants={container}>
          <TabsList className="flex flex-wrap gap-3 bg-transparent mb-24 md:mb-10">
            {datas.map((data, index) => (
              <motion.div variants={childrenVariant} key={index}>
                <TabsTrigger
                  className="bg-muted border shadow-md data-[state=active]:shadow hover:scale-105"
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
          <TabsContent
            value={"0"}
            className="flex flex-col lg:flex-row justify-center items-center"
          >
            <TabContent
              title={"Email Wallet"}
              description={
                "Email a relayer in order to transfer money or transact on Ethereum, anonymously."
              }
              href={"https://sendeth.org/"}
              button={"Try Testnet Demo"}
              className="flex flex-col lg:flex-row gap-x-40 gap-y-10 relative items-center"
            >
              <div className="relative w-[370px] lg:mr-10 lg:w-1/3 mt-[185px]">
                <Image
                  src={"/mailOpen.svg"}
                  alt="mail_open"
                  width={40}
                  height={40}
                  className="absolute lg:left-16 left-2 bottom-2"
                />

                <div className="w-[180px] h-[180px] rounded-se-full -z-10 lg:ml-16 lg:mt-2 absolute -rotate-[60deg] pt-[0.5px] left-[60px] bottom-0 bg-gradient-to-br from-blue-400 to-orange-400">
                  <div className="bg-white dark:bg-slate-950 w-[180px] h-[180px] rounded-se-full absolute right-[0.5px]" />
                </div>

                <Image
                  src={"/mailBox.svg"}
                  alt="mail_box"
                  width={40}
                  height={40}
                  className="lg:-right-[150px] absolute right-12 bottom-24"
                />
              </div>
            </TabContent>
          </TabsContent>
          <TabsContent value={"1"}>
            <TabContent
              title={"ZK Proof of Twitter"}
              description={
                "Prove you own a Twitter username, via proving any email from Twitter."
              }
              href={"https://zkemail.xyz/"}
              button={"Mint Twitter Proof"}
              className="flex flex-col md:flex-row items-center max-lg:mt-10 gap-x-20 gap-y-10"
            >
              <div className="flex flex-col gap-y-6 md:w-1/2 items-center">
                <Image
                  src={"/twitter.svg"}
                  alt={"twitter"}
                  width={40}
                  height={40}
                />
                <Input
                  placeholder="Enter twitter username"
                  name="twitter"
                  value={twitterInput}
                  onChange={(e) => setTwitterInput(e.target.value)}
                  className="focus-visible:ring-0"
                />
              </div>
            </TabContent>
          </TabsContent>
          <TabsContent value={"2"}>2</TabsContent>
          <TabsContent value={"3"}>3</TabsContent>
          <TabsContent value={"4"}>4</TabsContent>
          <TabsContent value={"5"}>5</TabsContent>
        </motion.div>
      </Tabs>
    </section>
  );
};

export default ApplicationSection;
