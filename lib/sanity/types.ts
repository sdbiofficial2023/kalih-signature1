import type { Image, PortableTextBlock } from "sanity";

export type SanityArticle = {
  _id: string;
  slug: string;
  topic: string;
  title: string;
  excerpt: string;
  coverImage: Image & { alt: string };
  content: PortableTextBlock[];
  featured: boolean;
};
