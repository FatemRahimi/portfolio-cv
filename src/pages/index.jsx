import Image from "next/image";
import picture from "public/images/profile.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { MailIcon, OpenIcon } from "../components/Icons";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center pt-[2rem] dark:bg-dark dark:text-slate-200">
      <div className="flex justify-center w-[40%]">
        <Image
          src={picture}
          alt="Fatemeh's image"
          className="w-80 rounded-[50%] border border-black lg:mb-20"
          priority
        />
      </div>
      <div className="lg:w-[55%] flex flex-col items-center self-center text-base font-medium text-justify p-5">
        <AnimatedText text="Full Stack Software Engineer" />
        <p className="mt-10">
          I am Fatemeh, a software engineer with a strong background in IT (data analysis) and systems engineering. I recently graduated from the award-winning CYF program and Netcoming, where I received extensive training in full-stack development and cloud computing.I bring hands-on experience in developing web pages using
          an adaptable stack, including Node, Express, Python,
          PostgreSQL, React, JavaScript, AWS services EC2, Lambda, CloudFront, Docker, GitHub Actions, Terraform, Web3, Digital Marketing.
        </p>
        <p className="mt-4">
          On my journey, I&apos;ve actively contributed to collaborative teams,
          creating innovative and user-friendly solutions. I thrive in dynamic
          environments, eagerly seeking opportunities to tackle challenging
          projects and enhance my software development skills. My self-motivated
          and excellent interpersonal skills, allows me to excel in both
          team-based and individual work settings.
        </p>
        <p className="mt-4">
          I am adaptable and flexible, always eager to learn and contribute
          effectively to the success of any project. Please explore my portfolio
          to discover specific projects that showcase my capabilities. I am
          excited to bring my skills and collaborative mindset to new
          opportunities.
        </p>
        <p className="mt-4 font-bold">
          Let&apos;s connect and explore how we can work together to create
          impactful solutions!<span className="text-2xl"> 🚀</span>
        </p>
        <div className="flex mt-10">
          <Link
            href= "https://drive.google.com/file/d/1hjwp5h7s-DX4AezkbJ3KYbRoqMjGxoOr/view?usp=sharing"
            aria-label="My CV"
            target="_blank"
            className="h-12 flex items-center bg-black px-10 rounded-xl text-xl font-extrabold dark:border dark:border-light"
          >
            <span className="text-red-600">C</span>
            <span className="text-gray-200">V</span>
            <span>
              <OpenIcon />
            </span>
          </Link>
          <Link
            href="mailto:fa.rahimi5475@gmail.com"
            aria-label="Send Email"
            target="_blank"
            className="h-12 flex items-center px-10 ml-5 bg-black text-light rounded-xl text-xl font-extrabold dark:border dark:border-light"
          >
            <MailIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
