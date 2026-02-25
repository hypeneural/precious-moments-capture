import { GALLERY_IMAGES, STUDIO } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import OptimizedImage from "@/components/OptimizedImage";
import { Gift } from "lucide-react";

const HeroSection = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden">
      <OptimizedImage
        src={GALLERY_IMAGES[0].src}
        alt="Cenário exclusivo de Dia das Mães"
        className="absolute inset-0 w-full h-full object-cover object-top"
        priority
        style={{ position: 'absolute', inset: 0 }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-cream text-xs font-body tracking-wide">
        Foto ilustrativa
      </span>

      <div className={`relative z-10 w-full px-5 pb-10 pt-16 md:px-12 md:pb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-2xl mx-auto md:mx-0">
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-warm-gold/20 backdrop-blur-sm text-cream text-sm font-body font-semibold tracking-wide uppercase border border-warm-gold/30">
            Vagas limitadas · Pré-venda até {STUDIO.presaleDeadline}
          </span>

          <h1 className="text-[2.25rem] leading-[1.15] md:text-5xl lg:text-6xl font-display font-semibold text-cream mb-4">
            O amor de mãe merece ser guardado <em className="italic text-champagne">para sempre</em>
          </h1>

          <p className="text-lg md:text-xl text-cream/90 font-body font-light leading-relaxed mb-8 max-w-lg">
            Sessões fotográficas especiais de Dia das Mães em cenário exclusivo. Reserve sua vaga e transforme esse momento em memória eterna.
          </p>

          <a
            href="#pacotes"
            className="inline-flex items-center justify-center gap-2 h-[3.5rem] px-7 rounded-full bg-warm-gold font-body font-bold text-[0.9375rem] text-champagne-foreground shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.97]"
          >
            <Gift className="w-5 h-5" />
            Ver Pacotes com Bônus da Pré-Venda
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
