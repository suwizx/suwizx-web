import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { IconType } from "@icons-pack/react-simple-icons";
import { LinkIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  color: string;
  link?: string;
}

export function SkillBadge({ name, icon: Icon, color, link }: SkillBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        className="flex items-center gap-1 px-2 py-1 border border-border bg-card rounded-md"
        asChild
      >
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 items-center text-nowrap flex-nowrap"
          >
            <Icon className="size-4" color={color} /> {name}
          </a>
        ) : (
          <span>
            <Icon className="size-4" color={color} /> {name}
          </span>
        )}
      </TooltipTrigger>
      <TooltipContent className="flex items-center gap-1">
        {name}
        {link && <LinkIcon className="size-3" />}
      </TooltipContent>
    </Tooltip>
  );
}
