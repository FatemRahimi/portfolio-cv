import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "public/images/logo.jpg";

const Logo = () => {
  const MotionLink = motion(Link);
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        whileHover={{
          animate: { x: 500 },
          scale: 1.2,
          transition: { ease: "easeOut", duration: 1, repeat: Infinity },
        }}
      >
        <motion.div
          whileHover={{
            animate: { x: 500 },
            scale: 1.2,
            transition: { ease: "easeOut", duration: 1, repeat: Infinity },
          }}
          className="rounded-full dark:border dark:border-light"
        >
          <Image
            href="/"
            className="w-16 h-16 rounded-full dark:border dark:border-light"
            src={logo}
            alt="my logo"
            priority
          ></Image>
        </motion.div>
      </MotionLink>
    </div>
  );
};

export default Logo;
