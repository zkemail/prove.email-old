import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image src={"/logo.svg"} alt="logo" width={70} height={60} />
      <span className="uppercase font-semibold text-lg">zk email</span>
    </Link>
  );
};

export default Logo;
