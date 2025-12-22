import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiHono,
  SiTailwindcss,
  SiReactquery,
  SiZod,
  SiReacthookform,
  SiFramer,
  SiShadcnui,
  SiBetterauth,
  SiDiscord,
  SiPostgresql,
  SiMysql,
  SiCloudflarepages,
  SiDrizzle,
  SiPrisma,
  SiGit,
  SiGithub,
  SiBun,
  SiCloudflare,
  SiVercel,
  SiSupabase,
  SiFirebase,
  SiUbuntu,
  SiDocker,
  SiFigma,
  SiWordpress,
  type IconType,
} from "@icons-pack/react-simple-icons";
import { SkillBadge } from "@/components/skill-badge";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  link?: string;
}

const lib_skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    link: "https://nextjs.org/",
  },
  {
    name: "SvelteKit",
    icon: SiSvelte,
    color: "#FF3E00",
    link: "https://kit.svelte.dev/",
  },
  {
    name: "Hono",
    icon: SiHono,
    color: "#E36002",
    link: "https://hono.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    link: "https://tailwindcss.com/",
  },
  {
    name: "TanStack Query",
    icon: SiReactquery,
    color: "#FF4154",
    link: "https://tanstack.com/query/latest",
  },
  {
    name: "Zod",
    icon: SiZod,
    color: "#3E67B1",
    link: "https://zod.dev/",
  },
  {
    name: "React Hook Form",
    icon: SiReacthookform,
    color: "#EC5990",
    link: "https://react-hook-form.com/",
  },
  {
    name: "Motion",
    icon: SiFramer,
    color: "#0055FF",
    link: "https://motion.dev/",
  },
  {
    name: "Shadcn/UI",
    icon: SiShadcnui,
    color: "#000000",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Better Auth",
    icon: SiBetterauth,
    color: "#000000",
    link: "https://www.better-auth.com/",
  },
  {
    name: "Discord.JS",
    icon: SiDiscord,
    color: "#5865F2",
    link: "https://discord.js.org/",
  },
];

const database_skills = [
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    link: "https://www.mysql.com/",
  },
  {
    name: "Cloudflare D1",
    icon: SiCloudflarepages,
    color: "#F38020",
    link: "https://developers.cloudflare.com/d1/",
  },
  {
    name: "Cloudflare R2",
    icon: SiCloudflarepages,
    color: "#F38020",
    link: "https://developers.cloudflare.com/r2/",
  },
  {
    name: "Drizzle ORM",
    icon: SiDrizzle,
    color: "#C5F74F",
    link: "https://orm.drizzle.team/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#2D3748",
    link: "https://www.prisma.io/",
  },
];

const tools_skills = [
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
    link: "https://github.com/",
  },
  {
    name: "Bun.sh",
    icon: SiBun,
    color: "#FF73A8",
    link: "https://bun.sh/",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "#F38020",
    link: "https://www.cloudflare.com/",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    link: "https://vercel.com/",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    link: "https://supabase.com/",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    link: "https://firebase.google.com/",
  },
  {
    name: "Ubuntu",
    icon: SiUbuntu,
    color: "#E95420",
    link: "https://ubuntu.com/",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    link: "https://www.docker.com/",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    link: "https://www.figma.com/",
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    color: "#21759B",
    link: "https://wordpress.org/",
  },
];

export default function Skill() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">
          Programming Languages / Frameworks / Libraries
        </h3>
        <div className="flex flex-wrap gap-2">
          {lib_skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              link={skill.link}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">Database / ORM / Storage</h3>
        <div className="flex flex-wrap gap-2">
          {database_skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              link={skill.link}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">Tools / Platforms / Services</h3>
        <div className="flex flex-wrap gap-2">
          {tools_skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              link={skill.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
