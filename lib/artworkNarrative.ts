import type { Artwork } from "@/lib/types";

export function buildArtworkDeepIntro(artwork: Artwork) {
  const details = artwork.details.slice(0, 3).join("；");
  return `${artwork.shortGuide} ${artwork.story} 观看时可以先抓住三个线索：${details}。这样看，它就不只是“名作清单”里的一个名字，而是能和作者、时代、空间和观看方式连接起来的一站。`;
}

export function buildArtworkCardIntro(artwork: Artwork) {
  const detail = artwork.details[0];
  return `${artwork.shortGuide} 先看这个细节：${detail}。`;
}
