import { useState, useEffect, useCallback, useRef } from "react";
import { Rocket, Flame, PartyPopper, Eye, X } from "lucide-react";

const NAMES = ["Joana", "Rafaela", "Maria Antônia", "Gabriela", "Laura", "Luana", "Camila", "Fernanda", "Juliana", "Beatriz"];
const CITIES = ["Tijucas", "Canelinha", "Itapema", "Porto Belo", "São João Batista", "Camboriú", "Balneário Camboriú", "Brusque"];
const EXPERIENCES = ["Super Mãe", "A Melhor Mãe do Mundo", "Mamãe Coruja"];

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick<T>(arr: T[]): T {
  return arr[rand(0, arr.length - 1)];
}

type MsgType = "rocket" | "fire" | "person" | "eyes";

interface Message {
  type: MsgType;
  title: string;
  subtitle: string;
}

function generateMessage(index: number): Message {
  const pool: (() => Message)[] = [
    () => ({
      type: "rocket",
      title: `${rand(12, 38)} ensaios reservados nos últimos 30 min`,
      subtitle: "Reserve agora para garantir horário exclusivo para a sua família.",
    }),
    () => ({
      type: "fire",
      title: `${rand(8, 32)} pessoas vendo esta página agora`,
      subtitle: "As vagas estão esgotando rápido. Não deixe para depois!",
    }),
    () => {
      const name = pick(NAMES);
      const city = pick(CITIES);
      const exp = pick(EXPERIENCES);
      return {
        type: "person",
        title: `${name} de ${city} garantiu: ${exp}`,
        subtitle: "Sua família pode ser a próxima a viver essa experiência.",
      };
    },
    () => ({
      type: "eyes",
      title: `${rand(15, 45)} pessoas visualizando os pacotes`,
      subtitle: "Garanta o seu antes que as vagas acabem!",
    }),
  ];

  // First message is always rocket, then rotate
  if (index === 0) return pool[0]();
  return pool[rand(0, pool.length - 1)]();
}

const iconMap: Record<MsgType, React.ReactNode> = {
  rocket: <Rocket className="w-5 h-5" />,
  fire: <Flame className="w-5 h-5" />,
  person: <PartyPopper className="w-5 h-5" />,
  eyes: <Eye className="w-5 h-5" />,
};

const bgMap: Record<MsgType, string> = {
  rocket: "bg-primary/15 text-primary",
  fire: "bg-destructive/15 text-destructive",
  person: "bg-accent/20 text-accent-foreground",
  eyes: "bg-secondary text-secondary-foreground",
};

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState<Message | null>(null);
  const [exiting, setExiting] = useState(false);
  const indexRef = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const showTimer = useRef<ReturnType<typeof setTimeout>>();

  const hide = useCallback(() => {
    setExiting(true);
    hideTimer.current = setTimeout(() => {
      setVisible(false);
      setExiting(false);
      // Schedule next popup
      showTimer.current = setTimeout(() => {
        indexRef.current += 1;
        setMsg(generateMessage(indexRef.current));
        setVisible(true);
      }, rand(12000, 20000));
    }, 400);
  }, []);

  const show = useCallback(() => {
    setVisible(true);
    hideTimer.current = setTimeout(hide, 7000);
  }, [hide]);

  useEffect(() => {
    // First popup after 5s
    showTimer.current = setTimeout(() => {
      setMsg(generateMessage(0));
      show();
    }, 5000);

    return () => {
      clearTimeout(hideTimer.current);
      clearTimeout(showTimer.current);
    };
  }, [show]);

  if (!visible || !msg) return null;

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 left-3 right-3 md:left-auto md:right-6 md:max-w-sm z-[60] cursor-pointer transition-all duration-400 ${
        exiting
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0 animate-[fade-in-up_0.4s_ease-out]"
      }`}
      onClick={hide}
      role="status"
      aria-live="polite"
    >
      <div className="relative bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-card-hover p-3.5 pr-10 flex items-start gap-3">
        {/* Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${bgMap[msg.type]}`}>
          {iconMap[msg.type]}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold font-body text-foreground leading-snug">
            {msg.title}
          </p>
          <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">
            {msg.subtitle}
          </p>
          <p className="text-[10px] text-muted-foreground/60 font-body mt-1">
            Agora mesmo
          </p>
        </div>

        {/* Close */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            hide();
          }}
          className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground/50 hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Fechar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofPopup;
