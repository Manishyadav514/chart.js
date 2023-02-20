const ChartWrapper = ({ title, children, id }: any) => {
  return (
    <div
      id={id}
      className="flex h-screen phone:h-1/2 w-full max-w-[1600px] justify-center items-center flex-col gap-20 p-20 phone:p-2 tablet:p-4"
    >
      <div className="flex flex-nowrap w-full justify-center items-center text-8xl tablet:5xl phone:text-2xl">
        <p> {title}</p>
      </div>
      {children}
    </div>
  );
};

export default ChartWrapper;
