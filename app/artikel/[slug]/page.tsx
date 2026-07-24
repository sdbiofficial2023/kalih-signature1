import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getAllArticleSlugs, getArticleBySlug, getOtherArticles } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import ArtikelNewsletter from "@/components/ArtikelNewsletter";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-secondary leading-relaxed text-lg">{children}</p>,
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-bold text-primary mt-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl font-bold text-primary mt-2">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 text-secondary leading-relaxed text-lg space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 text-secondary leading-relaxed text-lg space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold text-on-surface">{children}</strong>,
  },
};

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Kalih Signature`,
    description: article.excerpt,
  };
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = await getOtherArticles(article.slug, 3);

  return (
    <div className="pb-24">
      <div className="pt-24 sm:pt-32 pb-10 px-gutter max-w-3xl mx-auto">
        <Link
          href="/artikel"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary mb-8"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Kembali ke Artikel
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-4">
          {article.topic}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
          {article.title}
        </h1>
        <p className="text-secondary text-lg">{article.excerpt}</p>
      </div>

      <div className="px-gutter max-w-5xl mx-auto mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={urlFor(article.coverImage).width(1600).height(900).url()}
            alt={article.coverImage.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="px-gutter max-w-3xl mx-auto flex flex-col gap-6">
        <PortableText value={article.content} components={ptComponents} />
      </div>

      {otherArticles.length > 0 && (
        <div className="px-gutter max-w-container-max mx-auto mt-24">
          <h2 className="font-display text-2xl font-bold text-primary mb-8">
            Artikel Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherArticles.map((item) => (
              <Link key={item.slug} href={`/artikel/${item.slug}`} className="group block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={urlFor(item.coverImage).width(800).height(450).url()}
                    alt={item.coverImage.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}

      <ArtikelNewsletter />
    </div>
  );
}
