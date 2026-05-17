import { Award, BookOpen, Crown, Flag, Landmark, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import badges from "@/data/badges.json";

const icons = {
  sparkles: Sparkles,
  crown: Crown,
  flag: Flag,
  landmark: Landmark,
  award: Award,
  "book-open": BookOpen
};

export function BadgeGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {badges.map((badge) => {
        const Icon = icons[badge.icon as keyof typeof icons] ?? Award;
        return (
          <Badge
            description={badge.description}
            id={badge.id}
            icon={Icon}
            key={badge.id}
            title={badge.title}
            unlocked={badge.unlocked}
          />
        );
      })}
    </div>
  );
}
