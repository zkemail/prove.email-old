import PaperLines from "@/components/PaperLines";
import Image from "next/image";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <div className="absolute inset-0 min-h-full -z-50">
        <Image
          src={"/bg-image.svg"}
          fill
          alt={"bg-image"}
          className="object-cover"
        />
      </div> */}
      <PaperLines />
      {children}
    </div>
  );
};

export default HomeLayout;
