import { GALLERY_IMAGES } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";

const HeroSection = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background image */}
      <img
        src={GALLERY_IMAGES[0].src}
        alt="Cenário exclusivo de Dia das Mães"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      {/* Illustrative badge */}
      <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-cream text-[10px] font-body tracking-wide">
        Foto ilustrativa
      </span>

      {/* Content */}
      <div className={`relative z-10 w-full px-5 pb-10 pt-20 md:px-12 md:pb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-2xl mx-auto md:mx-0">
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-warm-gold/20 backdrop-blur-sm text-cream text-xs font-body tracking-widest uppercase border border-warm-gold/30">
            Vagas limitadas · Pré-venda
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-cream mb-4">
            O amor de mãe merece ser guardado <em className="italic text-champagne">para sempre</em>
          </h1>

          <p className="text-base md:text-lg text-cream/85 font-body font-light leading-relaxed mb-8 max-w-lg">
            Sessões fotográficas especiais de Dia das Mães em cenário exclusivo. Reserve sua vaga e transforme esse momento em memória eterna.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#pacotes"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-warm-gold font-body font-bold text-base text-champagne-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Ver pacotes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
