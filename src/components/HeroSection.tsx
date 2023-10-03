import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-end max-md:gap-y-0 mt-40">
      <div className="flex basis-[65%] flex-col gap-y-12">
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

      <div className="md:block hidden absolute w-full h-[550px] -bottom-[15%] left-40">
        <Image
          src={"/girl-check-phone.svg"}
          alt="hero-image"
          height={650}
          width={650}
          className="object-contain absolute right-[10%] -bottom-5"
        />
        <Image
          src={"/dry-brush.svg"}
          width={170}
          height={80}
          alt="dry-brush"
          className="absolute right-40 bottom-[35%] -z-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;
