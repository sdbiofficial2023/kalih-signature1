"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

const CATEGORIES = ["Semua", "Keluarga", "Arsitektur", "Kuliner"] as const;
type Category = (typeof CATEGORIES)[number];

const PHOTOS: { label: string; category: Exclude<Category, "Semua">; span: string }[] = [
  { label: "Foto — sudut taman Kalih", category: "Arsitektur", span: "masonry-item-tall" },
  { label: "Foto — keluarga bersantai", category: "Keluarga", span: "" },
  { label: "Foto — rooftop panorama", category: "Arsitektur", span: "masonry-item-wide" },
  { label: "Foto — sajian signature", category: "Kuliner", span: "" },
  { label: "Foto — area working space", category: "Arsitektur", span: "masonry-item-tall" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");

  const visiblePhotos =
    activeCategory === "Semua"
      ? PHOTOS
      : PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <section id="gallery" data-reveal className="py-24 bg-white">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
              Sudut Kalih
            </h2>
            <p className="text-secondary">Abadikan setiap momen berkesan Anda.</p>
          </div>
          <div className="hidden md:flex gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-bold pb-1 transition-colors ${
                  activeCategory === category
                    ? "text-primary border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="masonry-grid">
          {visiblePhotos.map((photo) => (
            <div
              key={photo.label}
              className={`${photo.span} rounded-2xl overflow-hidden shadow-lg group`}
            >
              <PlaceholderImage
                label={photo.label}
                className="w-full h-full transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
