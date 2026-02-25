import { useInView } from "@/hooks/useInView";
import { Camera, Heart } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import andersonPhoto from "@/assets/anderson.webp";
import elainePhoto from "@/assets/elaine.webp";

const AboutSection = () => {
    const { ref, inView } = useInView();

    return (
        <section ref={ref} className="py-16 md:py-28 px-5 md:px-12 bg-secondary/40">
            <div className={`max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-champagne/40 text-warm-gold">
                        <Camera className="w-4 h-4" strokeWidth={1.8} />
                        <span className="text-xs font-body font-bold tracking-widest uppercase">Quem somos</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-display font-semibold text-foreground">
                        Sobre o Estúdio <em className="italic text-warm-gold">Evydência</em>
                    </h2>
                </div>

                {/* Founders photos */}
                <div className="flex justify-center gap-4 mb-8">
                    <div className="relative">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-card border-2 border-champagne/50 rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                            <OptimizedImage
                                src={andersonPhoto}
                                alt="Anderson — Fotógrafo do Estúdio Evydência"
                                className="w-full h-full object-cover"
                                aspectRatio="1/1"
                            />
                        </div>
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-2.5 py-0.5 rounded-full text-xs font-body font-bold text-foreground shadow-sm border border-border whitespace-nowrap">
                            Anderson
                        </span>
                    </div>
                    <div className="relative mt-4">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-card border-2 border-champagne/50 rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                            <OptimizedImage
                                src={elainePhoto}
                                alt="Elaine — Fotógrafa do Estúdio Evydência"
                                className="w-full h-full object-cover"
                                aspectRatio="1/1"
                            />
                        </div>
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-2.5 py-0.5 rounded-full text-xs font-body font-bold text-foreground shadow-sm border border-border whitespace-nowrap">
                            Elaine
                        </span>
                    </div>
                </div>

                {/* Story */}
                <div className="text-center space-y-4">
                    <p className="text-base md:text-lg font-body text-foreground leading-relaxed">
                        Fundado por <strong>Anderson</strong> e <strong>Elaine</strong>, o Estúdio Evydência nasceu do amor pela fotografia e pela capacidade de eternizar momentos especiais.
                    </p>
                    <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
                        Há mais de <strong className="text-foreground">12 anos</strong>, temos o privilégio de registrar histórias únicas e emocionantes. Cada ensaio é tratado com dedicação e sensibilidade, buscando capturar não apenas imagens, mas sentimentos genuínos.
                    </p>
                    <div className="inline-flex items-center gap-2 pt-2">
                        <Heart className="w-4 h-4 text-warm-gold" fill="hsl(40 60% 65%)" />
                        <p className="text-sm md:text-base font-display font-semibold italic text-warm-gold">
                            Nossa missão é transformar momentos em memórias eternas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
