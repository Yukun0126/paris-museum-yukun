import artworks from "@/data/artworks.json";
import museums from "@/data/museums.json";
import routes from "@/data/routes.json";
import type { Artwork } from "@/lib/types";

export function getArtwork(id: string) {
  return artworks.find((artwork) => artwork.id === id);
}

export function getRoute(id: string) {
  return routes.find((route) => route.id === id);
}

export function getRouteArtworks(id: string) {
  const route = getRoute(id);
  if (!route) return [];
  return route.artworkIds
    .map((artworkId) => getArtwork(artworkId))
    .filter((artwork): artwork is Artwork => Boolean(artwork));
}

export { artworks, museums, routes };
