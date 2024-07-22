import Image from "next/image";
import Link from "next/link";
import { DeployIcon, GitHubIcon } from "./Icons";

const ProjectCard = ({
  type,
  link,
  title,
  businessProblem,
  summary,
  skills,
  img,
  app,
  github,
}) => {
  return (
    <div className="perspective-1000 hover:transform">
      <div className="relative preserve-3d hover:rotate-y-180 transition-transform duration-700 h-full w-full moz-backface-hidden">
        <article className="rounded-3xl backface-hidden flex flex-col content-between border dark:border-gray-600  shadow-slate-500 shadow-xl p-10 dark:text-slate-200 bg-neutral-100 dark:bg-neutral-900">
          <div className="mb-5 flex justify-between font-bold">
            <h2 className="text-2xl text-red-600">{title}</h2>
            <span className="mt-1">{type}</span>
          </div>
          <Image src={img} alt={title} className="border h-64" priority />
          <p className="font-bold mt-1 text-center">{app}</p>
        </article>

        <article
          className="absolute top-0 backface-hidden rotate-y-180 rounded-3xl h-full w-full flex flex-col justify-evenly 
      border dark:border-gray-600  shadow-slate-500 shadow-xl sm:p-4 dark:text-slate-200"
        >
          <div className="px-5 pt-5 text-sm">
            <p>
              <b>{businessProblem ? "Business Problem: " : "Summary: "}</b>
            </p>
            <p>{businessProblem ? businessProblem : summary}</p>
          </div>
          <div className="flex flex-wrap px-5 text-sm">
            {skills.split("-").map((skill, index) => (
              <span
                key={index}
                className="bg-gray-300 dark:text-dark m-1 rounded-xl px-2"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-evenly h-10 pb-5">
            <Link href={github} target="_blank">
              <GitHubIcon />
            </Link>
            <Link href={link} target="_blank">
              <DeployIcon />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectCard;
