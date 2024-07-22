import Logo from "./Logo";
import Link from "next/link";
import CustomLink from "./CustomLink";
import CustomMobileLink from "./CustomMobileLink";
import {
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const MotionLink = motion(Link);

  return (
    <header className="relative w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-8 font-medium flex justify-between dark:text-light">
      <button className="flex flex-col md:hidden" onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-2.5" : "rotate-0 -translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-0.5" : "rotate-0 translate-y-1"
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="min-w-[80vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-300/80 dark:bg-neutral-500/75 rounded-lg backdrop-blur-md py-32 md:hidden">
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink title="Home" href="/" handleClick={handleClick} />
            <CustomMobileLink
              title="Projects"
              href="/projects"
              handleClick={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-8">
            <MotionLink
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/farzaneh-haghani/"
              target="_blank"
            >
              <LinkedinIcon />
            </MotionLink>

            <MotionLink
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label="GitHub Profile"
              href="https://github.com/farzaneh-haghani"
              target="_blank"
            >
              <GitHubIcon />
            </MotionLink>

            <MotionLink
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label="Twitter Profile"
              href="https://x.com/RahimiFate39091"
              target="_blank"
            >
              <TwitterIcon />
            </MotionLink>
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className="flex items-center justify-center rounded-full hover:-translate-y-1 hover:scale-110"
            >
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      )}

      <div className="w-full hidden justify-between items-center md:flex">
        <nav>
          <CustomLink title="Home" href="/" />
          <CustomLink title="Projects" href="/projects" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <MotionLink
            whileHover={{ y: -5, scale: 1.1 }}
            aria-label="LinkedIn Profile"
            href="https://www.linkedin.com/in/fatemeh-rahimi-87148623a/"
            target="_blank"
          >
            <LinkedinIcon />
          </MotionLink>

          <MotionLink
            whileHover={{ y: -5, scale: 1.1 }}
            aria-label="GitHub Profile"
            href="https://github.com/FatemRahimi"
            target="_blank"
          >
            <GitHubIcon />
          </MotionLink>

          <MotionLink
            whileHover={{ y: -5, scale: 1.1 }}
            aria-label="Twitter Profile"
            href="https://x.com/RahimiFate39091"
            target="_blank"
          >
            <TwitterIcon />
          </MotionLink>
          <button
            aria-label="Change Background Color"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="flex items-center justify-center rounded-full hover:-translate-y-1 hover:scale-110"
          >
            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>

      <div className="absolute right-0 md:left-[50%] translate-x-[-50%] top-2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
