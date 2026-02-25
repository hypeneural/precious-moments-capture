import { STUDIO } from "@/lib/siteConfig";
import { Instagram, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";

const FooterSection = () => (
  <footer className="py-8 px-5 md:px-12 bg-secondary/80 pb-28 md:pb-8">
    <div className="max-w-2xl mx-auto text-center space-y-5">
      <div className="grid grid-cols-3 gap-3 pb-5 border-b border-border">
        <div className="flex flex-col items-center gap-1.5">
          <ShieldCheck className="w-5 h-5 text-warm-gold" />
          <span className="text-sm font-body font-bold text-foreground">Vagas limitadas</span>
          <span className="text-xs text-muted-foreground font-body">10 primeiros ensaios</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Clock className="w-5 h-5 text-warm-gold" />
          <span className="text-sm font-body font-bold text-foreground">Pré-venda</span>
          <span className="text-xs text-muted-foreground font-body">Até {STUDIO.presaleDeadline}</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Award className="w-5 h-5 text-warm-gold" />
          <span className="text-sm font-body font-bold text-foreground">Cenário exclusivo</span>
          <span className="text-xs text-muted-foreground font-body">Edição limitada</span>
        </div>
      </div>

      <h3 className="text-xl font-display font-semibold text-foreground">{STUDIO.name}</h3>
      <p className="text-base text-muted-foreground font-body">{STUDIO.city}</p>

      <div className="flex items-center justify-center gap-6">
        <a
          href={`https://wa.me/${STUDIO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base text-muted-foreground font-body hover:text-foreground transition-colors"
        >
          <MessageCircle className="w-5 h-5" /> {STUDIO.whatsappDisplay}
        </a>
        <a
          href={STUDIO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base text-muted-foreground font-body hover:text-foreground transition-colors"
        >
          <Instagram className="w-5 h-5" /> {STUDIO.instagram}
        </a>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} {STUDIO.name}. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground font-body mt-1">
          Agenda sujeita à disponibilidade. Imagens meramente ilustrativas.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
