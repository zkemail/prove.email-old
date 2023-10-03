import { Separator } from "./ui/separator";

const PaperLines = () => {
  return (
    <div className="flex flex-col gap-y-28 items-center absolute inset-0 mt-52">
      {Array(20)
        .fill(0)
        .map((_i, index) => (
          <Separator
            key={index}
            className={`relative -z-50 w-[95%] md:w-11/12`}
          />
        ))}
    </div>
  );
};

export default PaperLines;
