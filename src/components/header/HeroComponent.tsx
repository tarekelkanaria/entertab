"use client";

import Image from "next/image";
import HeroImage from "assets/hero.jpg";
import usePathLastSegment from "hooks/usePathLastSegment";
import dynamic from "next/dynamic";

const DynamicAnimatedText = dynamic(
  () => import("components/UI/AnimatedText"),
  {
    ssr: false,
    loading: () => (
      <p className="text-tealSolid-100 text-2xl md:text-4xl font-medium mb-4">
        Loading...
      </p>
    ),
  }
);
export default function HeroComponent() {
  const currentPath = usePathLastSegment();

  if (currentPath) return null;
  return (
    <div className="hero-section hero-section-after">
      <Image
        src={HeroImage}
        alt="Background wallpaper"
        fill
        priority
        placeholder="blur"
        blurDataURL="/assets/hero.jpg"
        sizes="(max-width: 768px) 100vw, (min-width: 1200px) 100vw"
        className="object-cover"
      />
      <div className="relative container h-full">
        <section className="absolute left-0 top-0 px-4 max-md:mt-40 md:mt-0 md:top-1/2 md:-translate-y-1/2">
          <h1 className="text-white text-3xl md:text-5xl mb-6">
            IMAGINATION AND <br /> INSPIRATION <br /> USED TO <br /> ACHIEVE
            PERFECTION
          </h1>
          <DynamicAnimatedText />
        </section>
      </div>
    </div>
  );
}
