import { PACKAGES, WHATSAPP_URL, type PackageItem } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Check, Star, Sparkles } from "lucide-react";

const PackageCard = ({ pkg, index }: { pkg: PackageItem; index: number }) => {
  const { ref, inView } = useInView();
  const isFeatured = pkg.featured;

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl p-6 md:p-8 transition-all duration-700 ${
        isFeatured
          ? "bg-background border-2 border-warm-gold/50 shadow-featured scale-[1.02]"
          : "bg-background border border-border shadow-card"
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-warm-gold text-primary-foreground text-xs font-body font-bold tracking-wide uppercase">
            <Star className="w-3 h-3" fill="currentColor" /> {pkg.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">{pkg.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl md:text-4xl font-display font-bold text-foreground">{pkg.total}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1 font-body">
          Entrada de <strong className="text-foreground">{pkg.entry}</strong> · {pkg.condition}
        </p>
      </div>

      {/* Includes */}
      <ul className="space-y-3 mb-6">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm font-body text-foreground">
            <Check className="w-4 h-4 mt-0.5 text-warm-gold flex-shrink-0" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>

      {/* Extras */}
      <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-champagne/20">
        <Sparkles className="w-4 h-4 text-warm-gold flex-shrink-0" />
        <span className="text-xs font-body text-muted-foreground">{pkg.extras}</span>
      </div>

      {/* Observation */}
      <p className="text-xs text-muted-foreground font-body mb-6 leading-relaxed">
        {pkg.observation}
      </p>

      {/* Presale */}
      <p className="text-xs text-center text-warm-gold font-body font-bold mb-4 tracking-wide uppercase">
        {pkg.presale}
      </p>

      {/* CTA */}
      <a
        href={`${WHATSAPP_URL}&text=Olá! Tenho interesse no pacote ${pkg.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center h-14 leading-[3.5rem] rounded-full font-body font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
          isFeatured
            ? "bg-warm-gold text-champagne-foreground shadow-lg hover:shadow-xl"
            : "bg-secondary text-secondary-foreground hover:bg-champagne/40"
        }`}
      >
        {pkg.cta}
      </a>
    </div>
  );
};

const PackagesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="pacotes" className="py-16 md:py-24 px-5 md:px-12">
      <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl md:text-4xl font-display font-semibold mb-3 text-foreground">
          Escolha seu pacote
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-body max-w-lg mx-auto">
          Pacotes pensados com carinho para registrar cada momento. Escolha o que combina com você.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {PACKAGES.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
