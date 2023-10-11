import React from "react";

const Button = () => {
  return (
      <DrawOutlineButton>See Portfolio</DrawOutlineButton>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className="group relative border-b hover:border-none border-solid border-indigo-300 px-4 py-2 font-medium transition-colors duration-[400ms] hover:text-indigo-300">
      <span>{children}</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
      <span cassName="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Button;