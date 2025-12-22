interface Work {
  title: string;
  role: string;
  description: string;
  image: {
    normal: string;
    small: string;
  };
  link?: string;
}

import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import ProgressiveImage from "@/components/utils/ProgressiveImage";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { ArrowUpRight, Link } from "lucide-react";

const works: Work[] = [
  {
    title: "ToBeIT 68 Website",
    role: "Fullstack Developer",
    description:
      "A website for ToBeIT 68 Camp by IT@KMITL, featuring camp information, participant registration. Includes a Learning Management System and project submission portal. Built with Next.js, Tailwind CSS, and Hono.",
    image: {
      normal: "./works/lossless/tobe.png",
      small: "./works/lossy/tobe-lossy.jpg",
    },
  },
  {
    title: "IT Camp 21 Website",
    role: "Fullstack Developer",
    description:
      "A website for IT Camp 21 by IT@KMITL, providing event details, schedules, and activities. Built with Next.js, Tailwind CSS, and shadcn/ui.",
    image: {
      normal: "./works/lossless/itc.png",
      small: "./works/lossy/itc-lossy.jpg",
    },
  },
  {
    title: "IT Open House 2025 Website",
    role: "Frontend Developer",
    description:
      "A website for IT Open House 2025 by IT@KMITL, showcasing event details, schedules, and activities. Built with Tanstack Start, Tailwind CSS, and shadcn/ui.",
    image: {
      normal: "./works/lossless/oph.png",
      small: "./works/lossy/oph-lossy.jpg",
    },
    link: "https://openhouse.it.kmitl.ac.th",
  },
  {
    title: "Creasy Club Website",
    role: "Fullstack Developer",
    description: `A full-stack web application for Creasy Club member registration,
  profile management, and event coordination. Built with Next.js,
  Tailwind CSS, shadcn/ui, and Better Auth.`,
    image: {
      normal: "./works/lossless/creasy.png",
      small: "./works/lossy/creasy-lossy.jpg",
    },
    link: "https://creasy.club",
  },
  {
    title: "Pre-Programming Website",
    role: "Fullstack Developer",
    description:
      "A website for Pre-Programming by IT@KMITL, providing activity information, participant registration, and resources. Built with Next.js, Tailwind CSS, and shadcn/ui.",
    image: {
      normal: "./works/lossless/prepro.png",
      small: "./works/lossy/prepro-lossy.jpg",
    },
    link: "https://prepro.it.kmitl.ac.th",
  },
  {
    title: "ITGG2024 Website",
    role: "Fullstack Developer",
    description:
      "A website for InfoTech Gate Game 2024 by IT@KMITL, providing event details, schedules, and activities. Built with Next.js, Tailwind CSS, and GSAP.",
    image: {
      normal: "./works/lossless/itgg.png",
      small: "./works/lossy/itgg-lossy.jpg",
    },
    link: "https://itgg.suwizx.dev",
  }
];

export default function Works() {
  return (
    <section className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold">Works</h2>
      <div className="flex flex-col gap-10">
        {works.map((work,idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <ProgressiveImage
              normal={work.image.normal}
              small={work.image.small}
              alt={work.title}
            />
            <div>
              <h3 className="font-semibold text-xl uppercase">{work.title}</h3>
              <p className="text-sm text-primary uppercase font-mono">
                {work.role}
              </p>
            </div>
            <p>{work.description}</p>
            {work.link && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={work.link}
                    className="underline hover:text-primary uppercase font-medium flex items-center gap-1 w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <ArrowUpRight size={"1.2em"} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-1">
                  {work.link.split("://")[1]}
                  <Link size={"1em"} />
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
