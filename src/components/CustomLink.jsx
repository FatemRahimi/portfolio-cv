import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title }) => {
  const router = useRouter();
  return (
    <Link href={href} className="mr-8 relative">
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light
        absolute left-0 -bottom-1 group-hover:w-full 
        transition-[width] ease duration-300 
        ${router.asPath === href ? `w-full` : `w-0`}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
