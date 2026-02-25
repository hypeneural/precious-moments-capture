import { STEPS } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";

const HowItWorksSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 px-5 md:px-12 bg-secondary/50">
      <div className={`max-w-2xl mx-auto text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl md:text-4xl font-display font-semibold mb-3 text-foreground">
          Como funciona
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-body">
          Reservar é simples e rápido. Atendimento pelo WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {STEPS.map((step, i) => (
          <div
            key={step.number}
            className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-champagne/40 flex items-center justify-center">
              <span className="text-lg font-display font-bold text-warm-gold">{step.number}</span>
            </div>
            <h3 className="text-sm md:text-base font-display font-semibold text-foreground mb-1">{step.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground font-body">{step.description}</p>
          </div>
        ))}
      </div>

      <div className={`mt-10 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs text-muted-foreground font-body">
          Vagas limitadas por agenda · Confirmação conforme disponibilidade
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
