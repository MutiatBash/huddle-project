export const Button = ({ text, className }) => {
  return (
    <div>
      <button
        className={`gap-2 w-[fit-content] py-[0.8rem] px-2  whitespace-nowrap text-base md:text-lg bg-[#ff7518] font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-[#ff4e18ee] ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
