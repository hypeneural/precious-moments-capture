import { useRef, useState, useCallback } from "react";
import { GALLERY_IMAGES } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const captions = [
  "Cenário exclusivo de Dia das Mães",
  "Iluminação aconchegante e natural",
  "Estilo delicado e atemporal",
  "Produzido para valorizar a conexão",
  "Cada detalhe pensado com carinho",
  "Momentos que viram recordação",
  "O abraço que a foto eterniza",
  "Memórias que ficam para sempre",
];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navLightbox = useCallback((dir: number) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return GALLERY_IMAGES.length - 1;
      if (next >= GALLERY_IMAGES.length) return 0;
      return next;
    });
  }, []);

  return (
    <>
      <section ref={ref} id="galeria" className="py-14 md:py-24 bg-secondary/50">
        <div className={`px-5 md:px-12 mb-6 max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-[1.75rem] md:text-4xl font-display font-semibold mb-2 text-foreground">
            Inspiração do cenário
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body">
            Um cenário pensado para diferentes composições: mãe & bebê, mãe & filho, ou toda a família.
          </p>
          <p className="text-sm text-muted-foreground/60 font-body mt-1.5 italic">
            * Fotos ilustrativas de inspiração.
          </p>
        </div>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur items-center justify-center shadow-card hover:shadow-card-hover transition-shadow" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={() => scroll(1)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur items-center justify-center shadow-card hover:shadow-card-hover transition-shadow" aria-label="Próximo">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3.5 px-5 md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[68vw] md:w-[calc(25%-12px)] snap-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${Math.min(i, 4) * 120}ms` }}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="relative rounded-xl overflow-hidden shadow-card aspect-[3/4] w-full group cursor-pointer"
                  aria-label={`Ampliar: ${img.alt}`}
                >
                  <OptimizedImage
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aspectRatio="3/4"
                  />
                  <div className="absolute inset-0 bg-warm-brown/0 group-hover:bg-warm-brown/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-warm-brown/70 to-transparent">
                    <span className="text-cream text-sm font-body tracking-wide uppercase">{img.caption}</span>
                  </div>
                </button>
                <p className="mt-3 text-base text-muted-foreground font-body text-center italic">
                  {captions[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-[fade-in_0.2s_ease-out]"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Visualizador de imagem"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nav */}
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-[92vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-3 text-center">
              <p className="text-white/90 text-sm font-body">{GALLERY_IMAGES[lightboxIndex].caption}</p>
              <p className="text-white/50 text-xs font-body mt-1 italic">Foto ilustrativa de inspiração</p>
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-3">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === lightboxIndex ? "bg-white w-4" : "bg-white/40"}`}
                  aria-label={`Imagem ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
