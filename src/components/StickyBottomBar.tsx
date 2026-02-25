import { WHATSAPP_URL, STUDIO } from "@/lib/siteConfig";
import { MessageCircle } from "lucide-react";

const StickyBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
    <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 pt-3 pb-safe shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 pb-3">
        <p className="flex-1 text-sm text-muted-foreground font-body">
          <span className="font-bold text-foreground">Vagas limitadas</span> · Pré-venda até {STUDIO.presaleDeadline}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 h-12 px-5 rounded-full bg-warm-gold text-champagne-foreground font-body font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-[0.97]"
        >
          <MessageCircle className="w-5 h-5" />
          Reservar
        </a>
      </div>
    </div>
  </div>
);

export default StickyBottomBar;
