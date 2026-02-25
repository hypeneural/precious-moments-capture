import { WHATSAPP_URL, STUDIO } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import { MessageCircle } from "lucide-react";

const FinalCtaSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="reserva" className="relative py-16 md:py-28 px-5 md:px-12 bg-champagne/20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-warm-gold/10 blur-3xl pointer-events-none" />

      <div className={`relative z-10 max-w-xl mx-auto text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-[1.75rem] md:text-4xl font-display font-semibold mb-3 text-foreground leading-tight">
          O Dia das Mães passa. <br />
          <em className="italic text-warm-gold">As memórias ficam.</em>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-body mb-2 leading-relaxed">
          Garanta sua sessão no cenário exclusivo e transforme esse momento em recordação eterna.
        </p>
        <p className="text-sm text-warm-gold font-body font-bold tracking-wide uppercase mb-7">
          Vagas limitadas · Pré-venda até {STUDIO.presaleDeadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#pacotes"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-warm-gold text-champagne-foreground font-body font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.97]"
          >
            Quero garantir minha sessão
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-warm-gold/40 text-foreground font-body font-bold text-lg hover:bg-champagne/30 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
