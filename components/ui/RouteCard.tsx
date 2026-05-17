import { Clock, Image as ImageIcon, UsersRound } from "lucide-react";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";

export type RouteCardData = {
  title: string;
  duration: string;
  artworkCount: number;
  crowdLevel: string;
  targetUser: string;
  tags?: string[];
  href?: string;
  cta?: string;
  coverImages?: Array<{ id?: string; src?: string; alt: string }>;
};

type RouteCardProps = {
  route: RouteCardData;
  featured?: boolean;
  className?: string;
};

export function RouteCard({ route, featured = false, className = "" }: RouteCardProps) {
  return (
    <SectionCard
      className={`p-3 ${
        featured ? "border-gold/50 bg-[linear-gradient(145deg,rgba(36,32,27,0.96),rgba(86,68,48,0.9))] text-paper" : ""
      } ${className}`}
    >
      <div className="grid h-22 grid-cols-3 gap-1.5 rounded-[20px] border border-line/80 bg-paper/45 p-1.5">
        {route.coverImages?.length ? (
          route.coverImages.slice(0, 3).map((image) => (
            <ArtworkImage
              artworkId={image.id ?? image.alt}
              className="h-full min-w-0 rounded-[16px]"
              key={`${image.id ?? image.alt}-${image.src ?? "placeholder"}`}
              src={image.src}
              title={image.alt}
            />
          ))
        ) : (
          <div className="col-span-3 grid place-items-center rounded-[16px] bg-gold-soft/25 text-gold">
            <ImageIcon size={26} />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-black leading-tight">{route.title}</h3>
          <p className={`mt-2 line-clamp-2 text-xs leading-5 ${featured ? "text-paper/72" : "text-muted"}`}>{route.targetUser}</p>
        </div>
        <Tag className={featured ? "border-gold/50 bg-gold-soft/25 text-gold-soft" : ""}>{route.crowdLevel}</Tag>
      </div>

      <div className={`mt-3 grid grid-cols-2 gap-2 text-xs font-bold ${featured ? "text-paper/72" : "text-muted"}`}>
        <div className="rounded-[16px] border border-line/70 bg-paper/20 p-2.5">
          <Clock className="mb-1 text-gold" size={15} />
          {route.duration}
        </div>
        <div className="rounded-[16px] border border-line/70 bg-paper/20 p-2.5">
          <UsersRound className="mb-1 text-gold" size={15} />
          {route.artworkCount} 件作品
        </div>
      </div>

      {route.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {route.tags.map((tag) => (
            <Tag className={featured ? "border-gold/50 bg-paper/10 text-paper/80" : ""} key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      ) : null}

      {route.href ? (
        <PrimaryButton href={route.href} className="mt-4 min-h-11" variant={featured ? "secondary" : "primary"}>
          {route.cta ?? "看看这条线"}
        </PrimaryButton>
      ) : null}
    </SectionCard>
  );
}
