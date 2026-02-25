import { GALLERY_IMAGES } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";

const HeroSection = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={GALLERY_IMAGES[0].src}
        alt="Cenário exclusivo de Dia das Mães"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <span className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-cream text-[9px] font-body tracking-wide">
        Foto ilustrativa
      </span>

      <div className={`relative z-10 w-full px-4 pb-8 pt-16 md:px-12 md:pb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-2xl mx-auto md:mx-0">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-warm-gold/20 backdrop-blur-sm text-cream text-[11px] font-body tracking-widest uppercase border border-warm-gold/30">
            Vagas limitadas · Pré-venda
          </span>

          <h1 className="text-[1.75rem] leading-[1.2] md:text-5xl lg:text-6xl font-display font-semibold text-cream mb-3">
            O amor de mãe merece ser guardado <em className="italic text-champagne">para sempre</em>
          </h1>

          <p className="text-[15px] md:text-lg text-cream/85 font-body font-light leading-relaxed mb-6 max-w-lg">
            Sessões fotográficas especiais de Dia das Mães em cenário exclusivo. Reserve sua vaga e transforme esse momento em memória eterna.
          </p>

          <a
            href="#pacotes"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-warm-gold font-body font-bold text-sm text-champagne-foreground shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.97]"
          >
            Ver pacotes
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
