import { useRef } from "react";
import { GALLERY_IMAGES } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight } from "lucide-react";

const captions = [
  "Cenário exclusivo de Dia das Mães",
  "Iluminação aconchegante e natural",
  "Estilo delicado e atemporal",
  "Produzido para valorizar a conexão",
];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section ref={ref} id="galeria" className="py-16 md:py-24 bg-secondary/50">
      <div className={`px-5 md:px-12 mb-8 max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl md:text-4xl font-display font-semibold mb-3 text-foreground">
          Conheça o cenário
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-body">
          Um cenário pensado para diferentes composições: mãe & bebê, mãe & filho, ou toda a família.
        </p>
      </div>

      {/* Desktop grid + Mobile carousel */}
      <div className="relative">
        {/* Nav arrows (desktop) */}
        <button onClick={() => scroll(-1)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur items-center justify-center shadow-card hover:shadow-card-hover transition-shadow" aria-label="Anterior">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button onClick={() => scroll(1)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur items-center justify-center shadow-card hover:shadow-card-hover transition-shadow" aria-label="Próximo">
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 px-5 md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[75vw] md:w-[calc(25%-12px)] snap-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-card aspect-[3/4]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-warm-brown/70 to-transparent">
                  <span className="text-cream text-xs font-body tracking-wide uppercase">{img.caption}</span>
                </div>
              </div>
              <p className="mt-3 text-xs md:text-sm text-muted-foreground font-body text-center italic">
                {captions[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
