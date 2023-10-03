const PaperCircle = () => {
  return (
    <div className="relative">
      <div className="absolute w-5 h-12 left-0 top-0" />
      <div className="absolute w-5 h-5 -left-[7px] dark:bg-slate-200 bg-black top-[10px] rounded-full" />
      <div className="absolute w-1.5 h-5 top-0 left-[12px]" />
      <div className="absolute w-1.5 h-5 left-0 top-0 bg-gray-600 rounded-[24px]" />
      <div className="absolute w-0.5 h-3 bg-gray-200 left-[3px] top-[3px] blur-[1.5px]" />
    </div>
  );
};

export default PaperCircle;
