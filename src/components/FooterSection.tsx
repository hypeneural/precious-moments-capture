import { STUDIO } from "@/lib/siteConfig";
import { Instagram, MessageCircle } from "lucide-react";

const FooterSection = () => (
  <footer className="py-10 px-5 md:px-12 bg-secondary/80 pb-28 md:pb-10">
    <div className="max-w-2xl mx-auto text-center space-y-4">
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
