import { TooltipContent, TooltipTrigger , Tooltip } from "@/components/ui/tooltip";
import ProgressiveImage from "@/components/utils/ProgressiveImage";
import { SiFacebook, SiGithub, SiGmail, SiInstagram, type IconType } from "@icons-pack/react-simple-icons";
import { Dot } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

type LinkItem = {
  href: Route;
  icon: IconType;
  label: string;
};

const links: LinkItem[] = [
  {
    href: "https://www.facebook.com/suwizx",
    icon: SiFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/suwizx_/",
    icon: SiInstagram,
    label: "Instagram",
  },
  {
    href: "https://github.com/suwizx",
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: "mailto:suwijak.pak@gmail.com",
    icon: SiGmail,
    label: "Email",
  },
];


export default function Info() { 
  return (
    <section className="flex flex-col gap-8 w-full">
      <ProgressiveImage
        alt="Suwijak Promsatid"
        className="aspect-square w-[150px] rounded-full object-cover object-top"
        normal="./images/suwijak-promsatid-lossy.jpg"
        small="./images/suwijak-promsatid-optimize.jpg"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">
          Suwijak Promsatid{" "}
          <span className="font-normal text-muted-foreground text-sm">
            he/him
          </span>
        </h1>
        <div className="flex items-center gap-2">
          <h2>suwizx</h2>
          <Dot />
          <div className="flex items-center gap-3">
            {links.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <item.icon size={20} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"https://webring.wonderful.software#suwizx.dev"}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="วงแหวนเว็บ"
                  
                >
                  <img
                    alt="วงแหวนเว็บ"
                    width="22"
                    height="22"
                    src="https://webring.wonderful.software/webring.black.svg"
                    className="dark:hidden block"
                  />
                  <img
                    alt="วงแหวนเว็บ"
                    width="22"
                    height="22"
                    src="https://webring.wonderful.software/webring.white.svg"
                    className="hidden dark:block"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Webring</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-2">
          <Image
            width={25}
            height={25}
            src={"./icons/itkmitl.svg"}
            alt="IT KMITL Logo"
            className="border size-5 border-border bg-card rounded-md p-1 box-content"
          />
          <span>
            Undergraduate Student,{" "}
            <a
              href="https://www.it.kmitl.ac.th"
              rel="noopener noreferrer"
              target="_blank"
              className="underline hover:text-primary"
            >
              <span className="inline sm:hidden">IT</span>
              <span className="hidden sm:inline">Information Technology</span>
            </a>
            <span>
              <span className="inline sm:hidden">@</span>
              <span className="hidden sm:inline"> ,</span>
            </span>
            <a
              href="https://www.kmitl.ac.th"
              rel="noopener noreferrer"
              target="_blank"
              className="underline hover:text-primary"
            >
              KMITL
            </a>
          </span>
        </p>
        <p className="flex items-center gap-2">
          <Image
            width={25}
            height={25}
            src={"/icons/ywc.ico"}
            alt="Young Webmaster Camp Logo"
            className="border size-5 border-border bg-card rounded-md p-1 box-content"
          />
          <a
            href="https://ywc20.ywc.in.th"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-primary"
          >
            Young Webmaster Camp 20
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Image
            width={25}
            height={25}
            src={"./icons/creasy.svg"}
            alt="Creasy Club Logo"
            className="border size-5 border-border bg-card rounded-md p-1 box-content"
          />
          Founder of{" "}
          <a
            href="https://creasy.club"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-primary"
          >
            Creasy Club
          </a>
        </p>
      </div>
    </section>
  );
}