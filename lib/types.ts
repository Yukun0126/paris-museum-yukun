import artworks from "@/data/artworks.json";
import museums from "@/data/museums.json";
import routes from "@/data/routes.json";
import badges from "@/data/badges.json";

export type Artwork = (typeof artworks)[number];
export type Museum = (typeof museums)[number];
export type GuideRoute = (typeof routes)[number];
export type GuideBadge = (typeof badges)[number];
