import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

export const STUDIO = {
  name: "Evydência",
  city: "Tijucas/SC",
  whatsapp: "5548998483594",
  whatsappDisplay: "(48) 99848-3594",
  instagram: "@estudioevydencia",
  instagramUrl: "https://instagram.com/estudioevydencia",
  presaleDeadline: "28/02/26",
  siteUrl: "https://evydencia.com/catalogo/mae",
};

export const WHATSAPP_URL = `https://wa.me/${STUDIO.whatsapp}?text=Olá! Quero reservar minha sessão de Dia das Mães 💐`;

export const PACKAGE_URLS: Record<string, string> = {
  "mamae-coruja": "https://evydencia.com/catalogo/mae/coruja",
  "super-mae": "https://evydencia.com/catalogo/mae/super-mae",
  "melhor-mae": "https://evydencia.com/catalogo/mae/melhor-mae",
};

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
    extras: "🎁 Bônus pré-venda: +2 fotos extras grátis (valor R$ 40,00)",
    observation: "Entrada online de R$ 98,00 + R$ 98,00 a pagar no Estúdio no dia da sessão.",
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
    extras: "🎁 Bônus pré-venda: +6 fotos extras grátis (valor R$ 120,00)",
    observation: "Entrada online de R$ 120,00 + R$ 330,00 a pagar no Estúdio no dia da sessão. Parcelável com cartão em até 3x de R$ 110,00.",
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
    extras: "🎁 Bônus pré-venda: +10 fotos extras grátis (valor R$ 200,00)",
    observation: "Entrada online de R$ 180,00 + R$ 705,00 a pagar no Estúdio no dia da sessão. Parcelável com cartão em até 3x de R$ 235,00.",
    cta: "Reservar experiência completa",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Como reservar um horário?",
    a: "A reserva é feita mediante o pagamento da entrada. Pode ser pago por cartão ou PIX através do nosso site.",
  },
  {
    q: "Como escolho as fotos?",
    a: "As fotos são escolhidas logo após a sessão. São muitas fotos lindas, portanto pedimos que venha com um tempo livre após a sessão de fotos para a escolha.",
  },
  {
    q: "E se eu quiser mais fotos?",
    a: "Você pode escolher à vontade as fotos adicionais. Cada foto tem o valor de R$ 20,00 e também serão enviadas pelo WhatsApp e reveladas no tamanho 15x21cm.",
  },
  {
    q: "As fotos podem ser feitas fora do horário comercial?",
    a: "Sim! Trabalhamos de segunda a segunda no horário estendido. Porém, a procura nessa época é muito grande. Quanto antes agendar, maiores são suas chances de conseguir um horário.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos cartões de crédito e PIX para pagamento da entrada. No dia das fotos, o pagamento da sessão e das fotos adicionais podem ser parcelados no cartão conforme o pacote escolhido.",
  },
  {
    q: "Qual é o prazo de entrega das fotos?",
    a: "Após as fotos serem escolhidas, iniciamos o processo de tratamento. Em até 20 dias úteis elas ficam prontas. Na confirmação da sessão, a data de entrega já será informada.",
  },
];

export const STEPS = [
  { number: "1", title: "Escolha o pacote", description: "Encontre o pacote ideal para você" },
  { number: "2", title: "Faça a reserva", description: "Pagamento da entrada online" },
  { number: "3", title: "Agende seu horário", description: "Escolha a data no WhatsApp" },
  { number: "4", title: "Viva o momento", description: "Venha criar memórias especiais" },
];
