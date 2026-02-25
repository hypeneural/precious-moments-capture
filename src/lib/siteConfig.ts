import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

export const STUDIO = {
  name: "Studio Maria & Luz",
  city: "São Paulo, SP",
  whatsapp: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  instagram: "@studiomariaeeluz",
  instagramUrl: "https://instagram.com/studiomariaeeluz",
  presaleDeadline: "28/11",
};

export const WHATSAPP_URL = `https://wa.me/${STUDIO.whatsapp}?text=Olá! Quero reservar minha sessão de Dia das Mães 💐`;

export const GALLERY_IMAGES = [
  { src: gallery1, alt: "Mãe erguendo bebê com carinho em cenário floral", caption: "Mãe & bebê" },
  { src: gallery2, alt: "Mãe e filho em momento de carinho no estúdio", caption: "Mãe & filho" },
  { src: gallery3, alt: "Mãe e filho sentados em sofá com cenário iluminado", caption: "Conexão" },
  { src: gallery4, alt: "Mãe com dois filhos em ensaio editorial", caption: "Família" },
];

export interface PackageItem {
  id: string;
  name: string;
  entry: string;
  entryValue: number;
  condition: string;
  total: string;
  totalValue: number;
  includes: string[];
  presale: string;
  extras: string;
  observation: string;
  cta: string;
  featured?: boolean;
  badge?: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: "mamae-coruja",
    name: "Mamãe Coruja",
    entry: "R$ 98,00",
    entryValue: 98,
    condition: "mais 1x de R$ 98,00",
    total: "R$ 196,00",
    totalValue: 196,
    includes: [
      "5 fotos reveladas 15x21cm",
      "15 minutos de fotos",
    ],
    presale: `Pré-venda até dia ${STUDIO.presaleDeadline}`,
    extras: "2 fotos extras = R$ 40,00",
    observation: "Entrada online de R$ 98,00 + R$ 98,00 a pagar na loja física no dia da sessão.",
    cta: "Reservar",
  },
  {
    id: "super-mae",
    name: "Super Mãe",
    entry: "R$ 120,00",
    entryValue: 120,
    condition: "restante em até 3x de R$ 110,00",
    total: "R$ 450,00",
    totalValue: 450,
    includes: [
      "20 fotos reveladas 15x21cm",
      "30 minutos de fotos",
    ],
    presale: `Pré-venda até dia ${STUDIO.presaleDeadline}`,
    extras: "6 fotos extras = R$ 120,00",
    observation: "Entrada online de R$ 120,00 + R$ 330,00 a pagar na loja física no dia da sessão. Parcelável com cartão em até 3x de R$ 110,00.",
    cta: "Reservar agora",
    featured: true,
    badge: "Mais escolhido",
  },
  {
    id: "melhor-mae",
    name: "A melhor mãe do mundo",
    entry: "R$ 180,00",
    entryValue: 180,
    condition: "restante em até 3x de R$ 235,00",
    total: "R$ 885,00",
    totalValue: 885,
    includes: [
      "35 fotos reveladas 15x21cm",
      "1 hora de fotos",
      "Álbum para as fotos reveladas",
      "Caixa para o álbum",
    ],
    presale: `Pré-venda até dia ${STUDIO.presaleDeadline}`,
    extras: "10 fotos extras = R$ 200,00",
    observation: "Entrada online de R$ 180,00 + R$ 705,00 a pagar na loja física no dia da sessão. Parcelável com cartão em até 3x de R$ 235,00.",
    cta: "Reservar experiência completa",
  },
];

export const FAQ_ITEMS = [
  {
    q: "O que está incluso em cada pacote?",
    a: "Cada pacote inclui uma quantidade específica de fotos reveladas no formato 15x21cm, tempo de sessão no cenário exclusivo de Dia das Mães e a possibilidade de adquirir fotos extras. Confira os detalhes de cada pacote acima.",
  },
  {
    q: "A entrada garante a vaga?",
    a: "Sim! Ao realizar o pagamento da entrada online, sua vaga fica garantida e entraremos em contato para agendar o melhor horário.",
  },
  {
    q: "Posso parcelar o restante?",
    a: "Sim! O valor restante pode ser pago na loja física no dia da sessão. Nos pacotes Super Mãe e A melhor mãe do mundo, é possível parcelar em até 3x no cartão.",
  },
  {
    q: "Quem pode participar da sessão?",
    a: "A sessão é para mamães com seus filhos! Pode ser com um bebê, uma criança, dois filhos ou mais. Converse conosco pelo WhatsApp para tirar dúvidas sobre composições especiais.",
  },
  {
    q: "Como funciona a escolha das fotos?",
    a: "Após a sessão, as melhores fotos serão selecionadas e editadas pela nossa equipe. Você receberá uma galeria para aprovação das fotos que serão reveladas.",
  },
  {
    q: "O que acontece se eu precisar remarcar?",
    a: "Remarcações estão sujeitas à disponibilidade de agenda. Entre em contato pelo WhatsApp com pelo menos 48h de antecedência para verificar datas disponíveis.",
  },
  {
    q: "As vagas são limitadas?",
    a: "Sim! Trabalhamos com agenda limitada para garantir a qualidade de cada sessão. Recomendamos a reserva antecipada.",
  },
];

export const STEPS = [
  { number: "1", title: "Escolha o pacote", description: "Encontre o pacote ideal para você" },
  { number: "2", title: "Faça a reserva", description: "Pagamento da entrada online" },
  { number: "3", title: "Agende seu horário", description: "Escolha a data no WhatsApp" },
  { number: "4", title: "Viva o momento", description: "Venha criar memórias especiais" },
];
