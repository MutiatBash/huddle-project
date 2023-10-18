export const Button = ({text, className}) =>{
    return (
      <div>
        <button className={`flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-2 text-white text-base md:text-lg bg-[#ff7518] font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-[#ff4e18ee] ${className}`}>
          {text}
        </button>
      </div>
    );
}