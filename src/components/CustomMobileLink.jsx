import React from "react";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, handleClick }) => {
  const router = useRouter();

  const handleRouter = () => {
    router.push(href);
    handleClick();
  };

  return (
    <button
      href={href}
      className="my-8 relative text-2xl"
      onClick={handleRouter}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light
        absolute left-0 -bottom-1 group-hover:w-full
        transition-[width] ease duration-300 
        ${router.asPath === href ? `w-full` : `w-0`}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomLink;
