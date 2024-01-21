import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";

interface SkillHoverCardProps {
  skillName: string;
  link: string;
  avatarImage?: string;
  avatarName?: string;
  description: string;
  experience: string;
}

export const SkillHoverCard: React.FC<SkillHoverCardProps> = ({
  skillName,
  link,
  avatarImage,
  avatarName,
  description,
  experience,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-l">
          <Link href={link}>
            <h4 className="text-base font-semibold">{`@${skillName}`}</h4>
          </Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="min-w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatarImage} />
            <AvatarFallback>{avatarName ?? "JY"}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{`@${skillName}`}</h4>
            <p className="text-sm">
              {description}
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                {experience}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
