import { STUDIO } from "@/lib/siteConfig";
import { Instagram, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";

const FooterSection = () => (
<footer className="py-8 px-4 md:px-12 bg-secondary/80 pb-24 md:pb-8">
    <div className="max-w-2xl mx-auto text-center space-y-5">
      <div className="grid grid-cols-3 gap-2 pb-5 border-b border-border">
        <div className="flex flex-col items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-warm-gold" />
          <span className="text-[11px] font-body font-bold text-foreground">Vagas limitadas</span>
          <span className="text-[9px] text-muted-foreground font-body">10 primeiros ensaios</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Clock className="w-4 h-4 text-warm-gold" />
          <span className="text-[11px] font-body font-bold text-foreground">Pré-venda</span>
          <span className="text-[9px] text-muted-foreground font-body">Até {STUDIO.presaleDeadline}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Award className="w-4 h-4 text-warm-gold" />
          <span className="text-[11px] font-body font-bold text-foreground">Cenário exclusivo</span>
          <span className="text-[9px] text-muted-foreground font-body">Edição limitada</span>
        </div>
      </div>

      <h3 className="text-lg font-display font-semibold text-foreground">{STUDIO.name}</h3>
      <p className="text-sm text-muted-foreground font-body">{STUDIO.city}</p>

      <div className="flex items-center justify-center gap-6">
        <a
          href={`https://wa.me/${STUDIO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground font-body hover:text-foreground transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> {STUDIO.whatsappDisplay}
        </a>
        <a
          href={STUDIO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground font-body hover:text-foreground transition-colors"
        >
          <Instagram className="w-4 h-4" /> {STUDIO.instagram}
        </a>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} {STUDIO.name}. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground font-body mt-1">
          Agenda sujeita à disponibilidade. Imagens meramente ilustrativas.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
