"use client";

import Image from "next/image";
import ApplicationCard from "./ApplicationCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { useState } from "react";
import { Github, LucideGithub } from "lucide-react";
import { FaAirbnb, FaGithub } from "react-icons/fa";

const ApplicationSection = () => {
  const [twitterInput, setTwitterInput] = useState("");

  return (
    <section className="md:mt-48 mt-72">
      <MaxWidthWrapper>
        <h1 className="text-3xl font-semibold">Application</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-4">
          <ApplicationCard
            title={"Email Wallet"}
            description={
              "Email a relayer in order to transfer money or transact on Ethereum, anonymously."
            }
            button={"Try Testnet Demo"}
            href={"https://sendeth.org/"}
          >
            <div className="flex items-center gap-x-2 justify-center h-full">
              <Image
                src={"/mailOpen.svg"}
                alt="mailOpen"
                height={17}
                width={17}
              />
              <Separator className="w-1/2 h-[2px]" />
              <Image
                src={"/mailBox.svg"}
                width={17}
                height={17}
                alt="mailBox"
              />
            </div>
          </ApplicationCard>
          <ApplicationCard
            title={"ZK Proof of Twitter"}
            description={
              "Prove you own a Twitter username, via proving any email from Twitter."
            }
            button={"Mint Twitter Proof"}
            href={"https://zkemail.xyz/"}
          >
            <div className="flex flex-col items-center gap-4 justify-center h-full">
              <Image
                src={"/twitter.svg"}
                height={25}
                width={25}
                alt="twitter"
              />
              <Input
                type="text"
                name="username"
                value={twitterInput}
                onChange={(e) => setTwitterInput(e.target.value)}
                placeholder="Enter twitter username"
                className="z-10 focus-visible:ring-0 focus-visible:border-0 border-0 ring-0 h-8 shadow"
              />
            </div>
          </ApplicationCard>
          <ApplicationCard
            title={"ZK Proof of Github"}
            description={
              "Prove you committed to a Github repo via proving emails of contribution invitation."
            }
            button={"Watch Demo"}
            href={
              "https://www.loom.com/share/4a280711e0944cecbe680149cf4de02b?sid=d1247bf1-d78c-4295-81be-832f9ceaa8b8"
            }
          >
            <div className="h-full flex justify-center items-center">
              <FaGithub size="40" color="#7e6cd6" />
            </div>
          </ApplicationCard>
          <ApplicationCard
            title={"Proof of Organization"}
            description={
              "Prove you own an email address corresponding to some domain via ZK JWTs."
            }
            button={"Try on Nozee"}
            href={"https://nozee.xyz/"}
          >
            <div className="h-full flex justify-center items-center">
              <Image
                src={"/notification_multiple.svg"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
          </ApplicationCard>
          <ApplicationCard
            title={"ZK KYC"}
            description={
              "Prove you are a unique human, via combining known KYCs from Airbnb, Coinbase, etc."
            }
            button={"Try Demo"}
            href={"https://anonkyc.com/"}
          >
            <div className="flex items-center gap-x-4 h-full justify-center">
              <div className="p-1 rounded-full bg-red-400 text-white">
                <FaAirbnb size={20} />
              </div>
              <Image
                src={"/cLogo.svg"}
                alt="C Logo image"
                width={30}
                height={30}
              />
            </div>
          </ApplicationCard>
          <ApplicationCard
            title={"Build your own?"}
            description={"Design via our open source, MIT licensed SDKs."}
            button={"Access SDK"}
            href={"https://www.npmjs.com/search?q=%40zk-email"}
          >
            <div className="h-full flex justify-center items-center">
              <Image
                src={"/mit_license.svg"}
                alt="mit_license"
                width={60}
                height={60}
              />
            </div>
          </ApplicationCard>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ApplicationSection;
