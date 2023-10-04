"use client";

import Image from "next/image";
import ApplicationCard from "./ApplicationCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { useState } from "react";
import { Github, LucideGithub } from "lucide-react";
import { FaAirbnb, FaGithub } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabContent from "./TabContent";

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
        <TabsList className="flex flex-wrap gap-3 bg-transparent mb-24 md:mb-10">
          {datas.map((data, index) => (
            <TabsTrigger
              className="bg-muted border shadow-md data-[state=active]:shadow hover:scale-105"
              key={index}
              value={index.toString()}
            >
              {data.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          value={"0"}
          className="flex flex-col lg:flex-row gap-10 justify-center items-center"
        >
          <TabContent
            title={"Email Wallet"}
            description={
              "Email a relayer in order to transfer money or transact on Ethereum, anonymously."
            }
            href={"https://sendeth.org/"}
            button={"Try Testnet Demo"}
          >
            <div className="flex gap-64 relative">
              <Image
                src={"/mailOpen.svg"}
                alt="mail_open"
                width={40}
                height={40}
                className="mt-48 ml-4"
              />

              <div className="w-[180px] h-[180px] rounded-se-full -z-10 absolute -rotate-[60deg] pt-[0.5px] right-[100px] top-12 bg-gradient-to-br from-blue-400 to-orange-400">
                <div className="bg-white dark:bg-slate-950 w-[180px] h-[180px] rounded-se-full absolute right-[0.5px]" />
              </div>
              <Image
                src={"/mailBox.svg"}
                alt="mail_box"
                width={40}
                height={40}
                className="mr-2"
              />
            </div>
          </TabContent>
        </TabsContent>
        <TabsContent value={"1"}>1</TabsContent>
        <TabsContent value={"2"}>2</TabsContent>
        <TabsContent value={"3"}>3</TabsContent>
        <TabsContent value={"4"}>4</TabsContent>
        <TabsContent value={"5"}>5</TabsContent>
      </Tabs>
    </section>
  );
};

export default ApplicationSection;
