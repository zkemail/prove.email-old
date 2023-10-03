import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Technology = () => {
  return (
    <div className="relative overflow-x-clip">
      <MaxWidthWrapper className="md:py-32 py-24 gap-6 flex flex-col">
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={"/technology.svg"}
            alt="technology_sectioin_image"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold">Technology</h1>
        <p className="text-muted-foreground md:w-[55%]">
          We directly verify the signatures on your emails within a zk proof,
          including regex parsing within zk. Read our{" "}
          <Link
            href={"https://blog.aayushg.com/posts/zkemail/"}
            target="_blank"
            className="text-violet-500 underline underline-offset-4"
          >
            blog post
          </Link>{" "}
          to understand the core email proving technology, or watch our{" "}
          <Link
            href={"https://www.youtube.com/watch?v=sPCHiUT3TmA&t=769s"}
            target="_blank"
            className="text-violet-500 underline underline-offset-4"
          >
            technical presentation
          </Link>{" "}
          to understand how the email wallet technology works.
        </p>
      </MaxWidthWrapper>
      <div className="absolute h-[800px] w-full -right-1/3 top-[8%] md:top-[18%] -z-10">
        <Image
          src={"/technology_green.svg"}
          alt={"technology_green_image"}
          fill
        />
      </div>
    </div>
  );
};

export default Technology;
