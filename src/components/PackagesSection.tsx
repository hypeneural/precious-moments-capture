import { PACKAGES, PACKAGE_URLS, STUDIO, type PackageItem } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Check, Star, Sparkles, Clock, Image, BookOpen, Gift } from "lucide-react";

const includeIcons: Record<string, typeof Image> = {
  "fotos reveladas": Image,
  "minutos": Clock,
  "hora": Clock,
  "Álbum": BookOpen,
  "Caixa": Gift,
};

const getIncludeIcon = (text: string) => {
  for (const [key, Icon] of Object.entries(includeIcons)) {
    if (text.includes(key)) return Icon;
  }
  return Check;
};

const PackageCard = ({ pkg, index }: { pkg: PackageItem; index: number }) => {
  const { ref, inView } = useInView();
  const isFeatured = pkg.featured;

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl p-6 md:p-8 transition-all duration-700 ${isFeatured
          ? "bg-background border-2 border-warm-gold/50 shadow-featured"
          : "bg-background border border-border shadow-card"
        } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-warm-gold text-primary-foreground text-xs font-body font-bold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5" fill="currentColor" /> {pkg.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-5">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">{pkg.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl md:text-4xl font-display font-bold text-foreground">{pkg.total}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1.5 font-body">
          Entrada de <strong className="text-foreground">{pkg.entry}</strong> · {pkg.condition}
        </p>
      </div>

      {/* Includes */}
      <ul className="space-y-3 mb-6">
        {pkg.includes.map((item) => {
          const Icon = getIncludeIcon(item);
          return (
            <li key={item} className="flex items-start gap-3 text-base font-body text-foreground">
              <Icon className="w-5 h-5 mt-0.5 text-warm-gold flex-shrink-0" strokeWidth={2} />
              {item}
            </li>
          );
        })}
      </ul>

      {/* Bônus Pré-venda */}
      <div className="relative mb-4 px-4 py-3.5 rounded-xl bg-accent/15 border border-accent/30 overflow-hidden">
        <div className="absolute top-0 right-0 px-2.5 py-0.5 bg-accent text-accent-foreground text-[11px] font-body font-bold uppercase rounded-bl-lg tracking-wider">
          Exclusivo pré-venda
        </div>
        <div className="flex items-start gap-2.5 mt-2">
          <Gift className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-sm font-body font-bold text-foreground block leading-snug">{pkg.extras}</span>
            <span className="text-xs text-muted-foreground font-body mt-1 block">
              Limitado aos 10 primeiros · Até {STUDIO.presaleDeadline}
            </span>
          </div>
        </div>
      </div>

      {/* Observation */}
      <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">
        {pkg.observation}
      </p>

      {/* Presale */}
      <p className="text-xs text-center text-warm-gold font-body font-bold mb-4 tracking-wide uppercase">
        {pkg.presale}
      </p>

      {/* CTA */}
      <a
        href={PACKAGE_URLS[pkg.id] || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center h-14 leading-[3.5rem] rounded-full font-body font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${isFeatured
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
    <section ref={ref} id="pacotes" className="py-14 md:py-24 px-5 md:px-12">
      <div className={`text-center mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl md:text-4xl font-display font-semibold mb-2 text-foreground">
          Escolha seu pacote
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-body max-w-lg mx-auto">
          Pacotes pensados com carinho para registrar cada momento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
        {PACKAGES.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
