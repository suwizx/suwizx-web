import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BkkjsLogo } from "@/components/bkkjs-logo";
import { StupidLogo } from "@/components/stupid-logo";

export default function About() {
  return (
    <section className="flex flex-col gap-4 w-full ">
      <p className="inline ">
        I am Suwijak Promsatid, a passionate undergraduate student in{" "}
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 items-center align-middle">
              <Image
                width={20}
                height={20}
                src={"./icons/itkmitl.svg"}
                alt="IT KMITL Logo"
              />
              IT@KMITL
            </TooltipTrigger>
            <TooltipContent>Information Technology at KMITL</TooltipContent>
          </Tooltip>
        </span>{" "}
        and an active participant in the{" "}
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 items-center align-middle">
              <Image
                width={20}
                height={20}
                src={"/icons/ywc.ico"}
                alt="Young Webmasters Camp 20 Logo"
              />
              YWC20
            </TooltipTrigger>
            <TooltipContent>Young Webmasters Camp 20</TooltipContent>
          </Tooltip>
        </span>{" "}
        on a programming major.
      </p>
      <p>
        I have a strong interest in web development and am always eager to
        explore new technologies. My passion is to create user-friendly websites
        that simplify complex ideas and make them accessible to everyone.
      </p>
      <p>
        I actively participate in tech events and meetups such as{" "}
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 py-0.5 items-center align-middle">
              <BkkjsLogo className="w-10 h-5 text-foreground" />
              BKK.JS
            </TooltipTrigger>
            <TooltipContent>BKK.JS</TooltipContent>
          </Tooltip>
        </span>{" "}
        and{" "}
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 py-0.5 items-center align-middle">
              <StupidLogo className="w-5 h-5 text-foreground" />
              Stupid Hack
            </TooltipTrigger>
            <TooltipContent>Stupid Hackathon 9</TooltipContent>
          </Tooltip>
        </span>{" "}
        . I am also an active contributor to various activities at IT KMITL,
        including the{" "}
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 py-0.5 items-center align-middle">
              <Image
                width={20}
                height={20}
                src={"/icons/oph.jpg"}
                alt="IT Open House Logo"
                className="rounded-sm"
              />
              IT Open House
            </TooltipTrigger>
            <TooltipContent>IT KMITL Open House</TooltipContent>
          </Tooltip>
        </span>{" "}
        ,{" "}
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 py-0.5 items-center align-middle">
              <Image
                width={20}
                height={20}
                src={"/icons/tobe.jpg"}
                alt="TobeIT Logo"
                className="rounded-sm"
              />
              TobeIT
            </TooltipTrigger>
            <TooltipContent>TobeIT</TooltipContent>
          </Tooltip>
        </span>{" "}
        , and{" "}
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 py-0.5 items-center align-middle">
              <Image
                width={20}
                height={20}
                src={"/icons/itcamp.jpg"}
                alt="IT Camp Logo"
                className="rounded-sm"
              />
              IT Camp
            </TooltipTrigger>
            <TooltipContent>IT Camp</TooltipContent>
          </Tooltip>
        </span>{" "}
        , etc.
      </p>
      <p>
        Additionally, my friends and I founded a technology club called "
        <span>
          <Tooltip>
            <TooltipTrigger className="inline-flex w-fit gap-1 border border-border bg-card rounded-md px-1 py-0.5 items-center align-middle">
              <Image
                width={20}
                height={20}
                src={"./icons/creasy.svg"}
                alt="Creasy Club Logo"
                className="rounded-sm"
              />
              Creasy Club
            </TooltipTrigger>
            <TooltipContent>Creasy Club</TooltipContent>
          </Tooltip>
        </span>
        ", inspired by Creatorsgarten, with the goal of sharing knowledge and
        experiences with others. We have organized several tech conferences and
        plan to host many more activities in the future.
      </p>
    </section>
  );
}
