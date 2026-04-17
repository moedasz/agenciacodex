import {
    Search,
    Briefcase,
    Heart,
    Scale,
    Laptop,
    Users,
    FileText,
    BadgeCheck,
    type LucideIcon,
} from "lucide-react";

export type HomeService = {
    slug: string;
    icon: LucideIcon;
    title: string;
    desc: string;
    features: string[];
    waMessage: string;
};

export type HomeMetric = {
    value: number;
    suffix: string;
    label: string;
};

export type HomeTestimonial = {
    text: string;
    name: string;
    location: string;
    type: string;
    avatar: string;
};

export type HomeFaqItem = {
    question: string;
    answer: string;
};

export const SERVICES: HomeService[] = [
    {
        slug: "localizacao-de-pessoas",
        icon: Search,
        title: "Localização de Pessoas",
        desc: "Encontramos pessoas desaparecidas, devedores, pais biológicos, golpistas e indivíduos que não desejam ser encontrados.",
        features: ["Rastreamento avançado", "Localização de golpistas", "Busca de familiares"],
        waMessage: "Olá! Gostaria de um orçamento para Localização de Pessoas.",
    },
    {
        slug: "investigacao-de-fraudes",
        icon: Briefcase,
        title: "Investigação Empresarial",
        desc: "Proteja sua empresa contra fraudes, corrupção, desvios e práticas antiéticas de funcionários ou sócios.",
        features: ["Combate a fraudes", "Verificação de sócios", "Due diligence"],
        waMessage: "Olá! Gostaria de um orçamento para Investigação Empresarial.",
    },
    {
        slug: "investigacao-conjugal",
        icon: Heart,
        title: "SOLUÇÕES PARA RELACIONAMENTOS",
        desc: "Respostas baseadas em rastros digitais. Investigamos apps e metadados para confirmar infidelidades, preservando sua identidade.",
        features: ["Análise de apps e perfis", "Busca por rastros digitais", "Provas incontestáveis"],
        waMessage: "Olá! Gostaria de um orçamento para Investigação Conjugal.",
    },
    {
        slug: "investigacao-trabalhista",
        icon: Scale,
        title: "Investigação Trabalhista",
        desc: "Comprove fraudes em auxílio-doença, acidentes de trabalho falsos e funcionários que trabalham durante afastamento.",
        features: ["Flagrantes de fraude", "Documentação legal", "Provas para RH"],
        waMessage: "Olá! Gostaria de um orçamento para Investigação Trabalhista.",
    },
    {
        slug: "investigacao-digital",
        icon: Laptop,
        title: "Investigação Virtual",
        desc: "Descobrimos perfis ocultos em redes sociais, sites de relacionamento adulto e atividades suspeitas online.",
        features: ["Perfis ocultos", "Redes sociais", "Rastreamento digital"],
        waMessage: "Olá! Gostaria de um orçamento para Investigação Virtual.",
    },
    {
        slug: "localizacao-de-golpistas",
        icon: Users,
        title: "Localização de Golpistas",
        desc: "Encontramos criminosos que aplicam golpes do Pix, veículos, empréstimos falsos e estelionato em geral.",
        features: ["Golpes financeiros", "Rastreamento de PIX", "Recuperação de dados"],
        waMessage: "Olá! Gostaria de um orçamento para Localização de Golpistas.",
    },
    {
        slug: "investigacao-patrimonial",
        icon: FileText,
        title: "Exoneração de Pensão",
        desc: "Reunimos provas para solicitar exoneração de pensão alimentícia de forma legal e eficaz.",
        features: ["Provas de renda", "Novo relacionamento", "Documentação judicial"],
        waMessage: "Olá! Gostaria de um orçamento para Exoneração de Pensão.",
    },
    {
        slug: "suporte-a-litigios",
        icon: BadgeCheck,
        title: "Provas para Advogados",
        desc: "Coleta profissional de provas e evidências válidas para fortalecer processos judiciais.",
        features: ["Provas válidas", "Relatórios técnicos", "Suporte em audiências"],
        waMessage: "Olá! Gostaria de um orçamento para Provas para Advogados.",
    },
];

export const METRICS: HomeMetric[] = [
    { value: 255, suffix: "+", label: "Casos Resolvidos" },
    { value: 10, suffix: "+", label: "Anos de Experiência" },
    { value: 100, suffix: "%", label: "Sigilo Garantido" },
    { value: 12, suffix: "+", label: "Estados Atendidos" },
];

export const TESTIMONIALS: HomeTestimonial[] = [
    {
        text: "Meu marido saía todo fim de semana com desculpa de plantão. Em 6 dias a Bforense me entregou fotos, horários e endereços. Levei tudo pro advogado e consegui a guarda dos meus filhos sem perder nada no divórcio.",
        name: "Fernanda R.",
        location: "Campinas, SP",
        type: "Investigação Conjugal",
        avatar: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
    },
    {
        text: "Tomei um golpe de R$47 mil em um investimento falso. A polícia não conseguia localizar o golpista. A Bforense rastreou ele em 11 dias, identificou contas bancárias e eu consegui recuperar quase tudo judicialmente.",
        name: "Marcos V.",
        location: "Florianópolis, SC",
        type: "Localização de Golpistas",
        avatar: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
    },
    {
        text: "Suspeitava que meu sócio estava desviando dinheiro da empresa, mas não tinha como provar. O relatório da Bforense mostrou movimentações, notas frias e até uma empresa fantasma no nome da esposa dele. Ele foi afastado e processado.",
        name: "Ricardo T.",
        location: "São Paulo, SP",
        type: "Investigação Empresarial",
        avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    },
    {
        text: "Pago pensão alimentícia há 4 anos. Descobri que minha ex estava morando com outro homem e trabalhando sem declarar. A Bforense levantou tudo, com provas válidas. Meu advogado entrou com a exoneração e foi aceita.",
        name: "Anderson L.",
        location: "Goiânia, GO",
        type: "Exoneração de Pensão",
        avatar: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    },
    {
        text: "Um funcionário nosso estava de atestado há 8 meses por problema na coluna. A Bforense flagrou ele fazendo frete de mudança no fim de semana. Com as provas, conseguimos a justa causa e revertemos o processo que ele tinha aberto contra nós.",
        name: "Patrícia M.",
        location: "Belo Horizonte, MG",
        type: "Investigação Trabalhista",
        avatar: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
    },
    {
        text: "Minha filha sumiu depois de uma briga em casa, tinha 19 anos. Fiz B.O., mas a polícia não priorizou porque ela era maior de idade. A Bforense localizou ela em 9 dias vivendo em outra cidade. Pude pelo menos saber que estava bem.",
        name: "Dona Cláudia S.",
        location: "Recife, PE",
        type: "Localização de Pessoas",
        avatar: "https://randomuser.me/api/portraits/thumb/women/52.jpg",
    },
    {
        text: "Encontrei perfis falsos do meu namorado em sites de relacionamento usando nome diferente. A Bforense rastreou os perfis, cruzou com dados reais e descobriu que ele mantinha outra família em Guarulhos. Doeu, mas precisava saber.",
        name: "Juliana A.",
        location: "Santo André, SP",
        type: "Investigação Virtual",
        avatar: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
    },
    {
        text: "Sou advogada e precisava de provas para um caso de alienação parental. A Bforense fez um trabalho técnico impecável. O relatório foi aceito como prova documental e mudou completamente o rumo do processo. Indico para todos os meus clientes.",
        name: "Dra. Camila F.",
        location: "Curitiba, PR",
        type: "Provas para Advogados",
        avatar: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
    {
        text: "Caí no golpe do Pix, transferi R$12 mil para um carro que não existia. A Bforense identificou o dono real da conta, o endereço e até outros anúncios falsos dele. Passei tudo pro delegado e o cara foi preso em 3 semanas.",
        name: "Thiago B.",
        location: "Brasília, DF",
        type: "Localização de Golpistas",
        avatar: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    },
    {
        text: "Desconfiava da minha esposa há meses mas ficava me sentindo culpado. Liguei na Bforense sem saber o que esperar. Foram muito humanos comigo, sem julgamento nenhum. Em 12 dias tive a resposta que precisava. Infelizmente confirmou, mas pelo menos pude tomar uma decisão com clareza.",
        name: "Eduardo P.",
        location: "Porto Alegre, RS",
        type: "Investigação Conjugal",
        avatar: "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    },
];

export const FAQ_ITEMS: HomeFaqItem[] = [
    {
        question: "Qual o preço de um Detetive Particular?",
        answer: "O investimento varia conforme a complexidade do caso, tempo de investigação e recursos necessários. Após uma conversa inicial gratuita, apresentamos um orçamento detalhado e transparente. Valores podem ir de R$ 2.000 a R$10.000 para investigações completas. Mas também oferecemos levantamentos de dados simples a partir de R$ 89. Aceitamos PIX, transferência e cartão em até 12x.",
    },
    {
        question: "É lícito contratar um Detetive Particular?",
        answer: "Sim. A profissão de detetive particular é regulamentada pela Lei Federal 13.432/2017. Todos os nossos métodos operam dentro da legalidade e os relatórios são aceitos como prova em processos judiciais, arbitragens e procedimentos administrativos.",
    },
    {
        question: "Quanto tempo demora uma investigação conjugal?",
        answer: "Em média, investigações conjugais levam de 5 a 15 dias para obter provas conclusivas. Casos mais complexos podem levar até 30 dias. Mantemos você informado sobre o andamento durante todo o processo.",
    },
    {
        question: "As provas coletadas valem na justiça?",
        answer: "Sim. Todos os nossos relatórios são elaborados com rigor documental e metodologia que atende aos requisitos para utilização como prova em processos judiciais. Trabalhamos em conjunto com seu advogado quando necessário.",
    },
    {
        question: "Como funciona o sigilo das informações?",
        answer: "Toda comunicação é feita por canais seguros e criptografados. Não armazenamos dados além do necessário para a operação. Relatórios são entregues em formato seguro e deletados de nossos servidores após a entrega.",
    },
    {
        question: "Vocês atendem em qual região?",
        answer: "Temos sede em São Paulo e Porto Alegre mas atuamos em todo o território nacional. Já conduzimos operações em mais de 12 estados brasileiros, incluindo todas as capitais.",
    },
    {
        question: "É possível clonar o WhatsApp do meu parceiro?",
        answer: "NÃO. Clonagem de WhatsApp sem acesso físico ao aparelho é GOLPE. Não oferecemos esse serviço pois é ilegal. Desconfie de qualquer empresa que prometa isso. Trabalhamos apenas com métodos legais e éticos.",
    },
    {
        question: "Como solicito um orçamento?",
        answer: "Basta clicar no botão de WhatsApp e enviar uma mensagem. Um de nossos especialistas responderá em até 30 minutos durante o horário comercial. A conversa inicial é totalmente gratuita e sigilosa.",
    },
];
