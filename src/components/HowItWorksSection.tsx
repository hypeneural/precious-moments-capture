import { STEPS } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Package, CreditCard, CalendarCheck, Sparkles } from "lucide-react";

const stepIcons = [Package, CreditCard, CalendarCheck, Sparkles];

const HowItWorksSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-14 md:py-24 px-5 md:px-12 bg-secondary/50">
      <div className={`max-w-2xl mx-auto text-center mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl md:text-4xl font-display font-semibold mb-2 text-foreground">
          Como funciona
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-body">
          Reservar é simples e rápido. Atendimento pelo WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
        {STEPS.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <div
              key={step.number}
              className={`relative text-center bg-background rounded-xl p-4 shadow-card transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl bg-champagne/40 flex items-center justify-center">
                <Icon className="w-5 h-5 text-warm-gold" strokeWidth={1.8} />
              </div>
              <span className="inline-block mb-1.5 text-[11px] font-body font-bold text-warm-gold bg-champagne/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Passo {step.number}
              </span>
              <h3 className="text-sm md:text-base font-display font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground font-body">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className={`mt-10 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm text-muted-foreground font-body">
          Vagas limitadas por agenda · Confirmação conforme disponibilidade
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
