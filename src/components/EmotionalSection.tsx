import { Heart, Camera, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const pillars = [
  { icon: Heart, label: "Afeto", text: "O carinho que transborda no olhar" },
  { icon: Camera, label: "Memória", text: "Momentos que nunca se repetem" },
  { icon: Users, label: "Família", text: "A conexão que une gerações" },
];

const EmotionalSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 px-5 md:px-12">
      <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl md:text-4xl font-display font-semibold mb-6 text-foreground">
          O tempo passa, mas o <em className="italic text-warm-gold">amor fica</em>
        </h2>
        <p className="text-base md:text-lg font-body font-light text-muted-foreground leading-relaxed mb-12">
          Os filhos crescem num piscar de olhos. Um ensaio de Dia das Mães não é só uma foto — é a chance de registrar a conexão real, o abraço apertado, o sorriso verdadeiro. É guardar o que o tempo não pode levar.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {pillars.map((p, i) => (
            <div key={p.label} className={`flex flex-col items-center gap-3 transition-all duration-700 delay-${i * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-champagne/40 flex items-center justify-center">
                <p.icon className="w-6 h-6 md:w-7 md:h-7 text-warm-gold" strokeWidth={1.5} />
              </div>
              <span className="text-sm md:text-base font-display font-semibold text-foreground">{p.label}</span>
              <span className="text-xs md:text-sm font-body text-muted-foreground leading-snug">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
