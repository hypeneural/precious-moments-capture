import { FAQ_ITEMS } from "@/lib/siteConfig";
import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="faq" className="py-14 md:py-24 px-5 md:px-12">
      <div className={`max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-display font-semibold text-foreground">
            Dúvidas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-xl border border-border px-5 shadow-card data-[state=open]:shadow-card-hover transition-shadow"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-body font-bold text-foreground py-4 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base font-body text-muted-foreground pb-4 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
