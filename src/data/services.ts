import {
    Search,
    ShieldCheck,
    Gavel,
    TrendingUp,
    Heart,
    Globe,
    MapPin,
    UserSearch,
    Briefcase,
    AlertTriangle,
    Baby,
    FileSearch,
    ShieldOff,
    Users,
} from "lucide-react";

export interface CaseStudy {
    code: string;
    situation: string;
    outcome: string;
    duration: string;
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface MetadataItem {
    label: string;
    value: string;
}

export interface ServiceStat {
    value: string;
    label: string;
    context: string;
}

export interface Service {
    slug: string;
    icon: typeof Search;
    title: string;
    shortDesc: string;
    fullDesc: string;
    bullets: string[];
    forWho: string[];
    relatedSlugs: string[];
    // Arquivo / case-file fields
    dossierId: string;
    classification: string;
    heroImage: string;
    heroImageAlt: string;
    heroImageCredit?: string;
    statistic: ServiceStat;
    pullQuote: string;
    evidenceTypes: string[];
    caseStudies: CaseStudy[];
    faq: FaqItem[];
    metadataStrip: MetadataItem[];
}

const UNSPLASH = (id: string) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=72`;

export const SERVICES: Service[] = [
    {
        slug: "investigacao-patrimonial",
        icon: Search,
        title: "Investigação patrimonial",
        shortDesc: "Descobrimos bens escondidos: imóveis, empresas, carros e contas no nome de laranjas.",
        fullDesc:
            "Quando alguém esconde patrimônio, sempre deixa um rastro em algum lugar. Cruzamos registros públicos, dados digitais e trabalho de campo até montar o mapa completo do que o investigado realmente tem, inclusive o que está em nome de laranja, em empresa de fachada ou em offshore. No final, você recebe um arquivo com tudo documentado, pronto para usar em execução, divórcio, ação contra sócio ou qualquer negociação.",
        bullets: [
            "Empresas escondidas em nome de terceiros",
            "Imóveis, veículos e contas em laranjas",
            "Estruturas offshore e blindagem patrimonial",
            "Mapa completo com todas as provas em anexo",
            "Material que serve de prova em juízo",
        ],
        forWho: [
            "Advogados em execução",
            "Sócios em briga com sócio",
            "Quem está se divorciando",
            "Credores atrás de garantia",
        ],
        relatedSlugs: ["due-diligence", "inteligencia-financeira", "suporte-a-litigios"],
        dossierId: "CS-001/PAT",
        classification: "Nível 3, Acesso restrito",
        heroImage: UNSPLASH("1450101499163-c8848c66ca85"),
        heroImageAlt: "Documentos corporativos, relatórios financeiros e mapas societários sobre mesa escura",
        statistic: {
            value: "R$ 412M",
            label: "em bens localizados",
            context: "valor somado em patrimônio que estava escondido e que conseguimos mapear",
        },
        pullQuote:
            "Dinheiro nunca some. Ele só muda de nome, de CNPJ, de endereço. Nosso trabalho é refazer esse caminho, documento por documento, até chegar em quem realmente manda.",
        evidenceTypes: [
            "Mapa das empresas com quem de fato é dono",
            "Certidões dos imóveis (urbanos e rurais)",
            "Rastro das transferências bancárias",
            "Veículos no nome do alvo (direto ou indireto)",
            "Linha do tempo das movimentações suspeitas",
        ],
        caseStudies: [
            {
                code: "Caso 041 · Execução cível · SP",
                situation:
                    "Devedor de R$ 8M dizia estar quebrado. Nada no nome dele.",
                outcome:
                    "Achamos 3 empresas no nome da ex-esposa com imóveis e frota. Penhora saiu.",
                duration: "28 dias · Prova aceita de primeira",
            },
            {
                code: "Caso 079 · Divórcio litigioso · RS",
                situation:
                    "Cônjuge passou bens para holding no exterior antes da separação.",
                outcome:
                    "Mapeamos 2 offshores em Delaware e um imóvel em Portugal. Partilha foi revista.",
                duration: "65 dias · Acordo fechado fora do fórum",
            },
        ],
        faq: [
            {
                q: "Esse material vale como prova?",
                a: "Vale. Tudo é montado com base em documento público e registro oficial. Seu advogado junta no processo como prova documental sem problema.",
            },
            {
                q: "Conseguem rastrear bens no exterior?",
                a: "Sim, nos países com registro público aberto (EUA, Portugal, Espanha, Uruguai, Paraguai, offshores mais comuns). Para outros lugares, acionamos parceiros de confiança.",
            },
            {
                q: "Quanto tempo leva?",
                a: "Em média, entre 15 e 45 dias. Você recebe relatório parcial toda semana durante a apuração, nada de esperar no escuro.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "15–45 dias" },
            { label: "Alcance", value: "Brasil + offshore" },
            { label: "Entrega", value: "Arquivo para juízo" },
            { label: "Sigilo", value: "Total" },
        ],
    },
    {
        slug: "due-diligence",
        icon: ShieldCheck,
        title: "Due diligence",
        shortDesc: "Descobrimos com quem você está prestes a fechar negócio. Antes de assinar.",
        fullDesc:
            "Antes de comprar empresa, contratar um executivo, botar dinheiro em um fundo ou virar sócio de alguém, você precisa saber se a história bate. Vamos muito além do Google: puxa certidão criminal, processos, dívidas, reputação no mercado, sócios escondidos e qualquer coisa que possa explodir depois. Você recebe um relatório direto, verde, amarelo ou vermelho, para decidir com segurança.",
        bullets: [
            "Investigação completa de sócios e executivos",
            "Processos, dívidas e reputação no mercado",
            "Confere diploma, currículo e histórico real",
            "Descobre sócio escondido e conflito de interesse",
            "Relatório final objetivo: pode ou não fechar",
        ],
        forWho: [
            "Empresas fazendo M&A",
            "Fundos de investimento",
            "Conselho de administração",
            "Quem está entrando em sociedade",
        ],
        relatedSlugs: ["verificacao-de-antecedentes", "investigacao-patrimonial", "inteligencia-financeira"],
        dossierId: "CS-002/DDL",
        classification: "Nível 2, Acesso controlado",
        heroImage: UNSPLASH("1554224155-6726b3ff858f"),
        heroImageAlt: "Calculadora, relatórios financeiros e caneta sobre mesa iluminada lateralmente",
        statistic: {
            value: "1 em 7",
            label: "alvos reprovados",
            context: "proporção de executivos que tinham histórico crítico escondido nas nossas apurações",
        },
        pullQuote:
            "O LinkedIn mostra o que a pessoa quer que você veja. A certidão do fórum mostra o que ela torce pra você nunca procurar.",
        evidenceTypes: [
            "Certidão criminal federal e estadual (10 anos)",
            "Lista de processos (cível, trabalhista, fiscal)",
            "Rastreio de mídia negativa (Brasil e fora)",
            "Validação de diploma e vínculo profissional",
            "Mapa de sócios, empresas e conflitos",
        ],
        caseStudies: [
            {
                code: "Caso 118 · M&A · Fintech",
                situation:
                    "Aquisição de R$ 120M, CEO tinha currículo impecável.",
                outcome:
                    "Achamos uma condenação por estelionato em outro estado que ele omitiu. Negócio foi refeito.",
                duration: "10 dias · Cerca de R$ 40M economizados",
            },
            {
                code: "Caso 157 · Contratação C-level",
                situation: "Diretor financeiro quase contratado por holding familiar.",
                outcome:
                    "Descobrimos 4 ações por improbidade em cargo público anterior. Contratação cancelada.",
                duration: "5 dias · Pronto antes da assinatura",
            },
        ],
        faq: [
            {
                q: "Qual a diferença para consulta comum de antecedentes?",
                a: "Consulta comum só puxa certidão. Due diligence mistura certidão com análise de reputação, mídia e contexto, uma visão estratégica, não só um checklist.",
            },
            {
                q: "O alvo fica sabendo que foi investigado?",
                a: "Não. Usamos apenas fonte aberta, registro público e análise indireta. Ninguém liga, ninguém aparece, ninguém abordar o alvo.",
            },
            {
                q: "Posso usar o relatório para justificar que não vou fechar?",
                a: "Pode. É feito justamente pra dar base formal a uma decisão de conselho, comitê ou diligência jurídica.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "3–10 dias" },
            { label: "Alcance", value: "Brasil + mídia global" },
            { label: "Entrega", value: "Relatório executivo" },
            { label: "Sigilo", value: "NDA mútuo" },
        ],
    },
    {
        slug: "suporte-a-litigios",
        icon: Gavel,
        title: "Suporte a litígios",
        shortDesc: "Produzimos a prova que falta pro seu advogado vencer o processo.",
        fullDesc:
            "Processo se ganha com prova, não com argumento bonito. Trabalhamos junto com escritórios de advocacia para buscar em campo aquilo que o processo precisa: investigar testemunha, pegar contexto, localizar bem para penhora, documentar fato que ninguém mais conseguiu. Tudo entregue no padrão que tribunal e câmara arbitral aceitam sem ressalva.",
        bullets: [
            "Produção de prova para processo e arbitragem",
            "Investigação de testemunha, perito e parte adversa",
            "Informação estratégica para a tese jurídica",
            "Localização de bem para garantir execução",
            "Fotos, relatórios e laudos técnicos",
        ],
        forWho: [
            "Escritórios de advocacia",
            "Departamento jurídico de empresa",
            "Partes em arbitragem",
            "Advogado em execução",
        ],
        relatedSlugs: ["investigacao-patrimonial", "investigacao-de-fraudes", "localizacao-de-pessoas"],
        dossierId: "CS-003/LIT",
        classification: "Nível 3, Acesso restrito",
        heroImage: UNSPLASH("1589829545856-d10d557cf95f"),
        heroImageAlt: "Colunas clássicas de fórum judicial iluminadas em contraste alto",
        statistic: {
            value: "86%",
            label: "das provas aceitas de cara",
            context: "índice das provas que produzimos e entraram no processo sem serem questionadas",
        },
        pullQuote:
            "Tese jurídica sem prova do lado é só discurso. Transformamos argumento em documento.",
        evidenceTypes: [
            "Cadeia de provas rastreável do começo ao fim",
            "Transcrição certificada de áudio e vídeo",
            "Laudo de autenticidade de arquivo digital",
            "Entrevista com testemunha (com consentimento)",
            "Linha do tempo cruzando todos os eventos",
        ],
        caseStudies: [
            {
                code: "Caso 092 · Arbitragem CAM-CCBC",
                situation:
                    "Disputa de R$ 45M, outro lado dizia que tinha entregado parte do contrato.",
                outcome:
                    "Recuperamos e-mails e WhatsApp que mostraram a fraude. Vitória unânime.",
                duration: "2 meses · R$ 45M recuperados",
            },
            {
                code: "Caso 134 · Ação de dano moral",
                situation:
                    "Funcionário dizia estar incapacitado após acidente de trabalho.",
                outcome:
                    "Flagramos ele jogando futebol em torneio depois da data do 'acidente'.",
                duration: "15 dias · Ação julgada improcedente",
            },
        ],
        faq: [
            {
                q: "Vocês assinam laudo pericial?",
                a: "Não. Não substituímos perícia oficial; entregamos o material que o seu perito ou assistente técnico vai usar como base. Nosso papel é investigativo.",
            },
            {
                q: "Falam direto com o cliente ou só com o escritório?",
                a: "Só com o escritório, sob NDA e contrato específico. Conversa com cliente final só se o advogado pedir.",
            },
            {
                q: "Dá pra aumentar o escopo no meio do caminho?",
                a: "Dá. Trabalhamos em blocos quinzenais, com relatório no meio, escopo vai se ajustando conforme o processo anda.",
            },
        ],
        metadataStrip: [
            { label: "Prazo", value: "Sob demanda" },
            { label: "Alcance", value: "Brasil" },
            { label: "Entrega", value: "Pacote de provas" },
            { label: "Sigilo", value: "NDA + advogado" },
        ],
    },
    {
        slug: "inteligencia-financeira",
        icon: TrendingUp,
        title: "Inteligência financeira",
        shortDesc: "Seguimos o dinheiro: desvio, lavagem, fraude societária, até o destino final.",
        fullDesc:
            "Quando some dinheiro da empresa, ele não evapora, ele faz uma rota. Acompanhamos essa rota cruzando dados de transação, padrão de movimentação e contas intermediárias usadas pra esconder o rastro. No final, você tem o mapa completo: quem tirou, por onde passou, onde parou e em que nome está hoje. Tudo documentado pra ação judicial, denúncia ou decisão interna.",
        bullets: [
            "Rastreio de transações estranhas",
            "Análise de contas-pulo e padrões suspeitos",
            "Investigação de desvio entre sócios e apropriação",
            "Identificação de esquema de lavagem",
            "Prova pronta para jurídico e contabilidade",
        ],
        forWho: [
            "Empresas com suspeita de fraude interna",
            "Advogados em caso de desvio",
            "Sócios brigando entre si",
            "Compliance",
        ],
        relatedSlugs: ["investigacao-de-fraudes", "investigacao-patrimonial", "due-diligence"],
        dossierId: "CS-004/FIN",
        classification: "Nível 3, Acesso restrito",
        heroImage: UNSPLASH("1642543492481-44e81e3914a7"),
        heroImageAlt: "Gráfico financeiro em monitor escuro com linhas vermelhas e velas de candle",
        statistic: {
            value: "R$ 112M",
            label: "em desvios identificados",
            context: "total que conseguimos mapear nos últimos 2 anos de operação",
        },
        pullQuote:
            "Desvio quase nunca aparece numa transferência só. Ele se esconde em dezenas de movimentos pequenos, que, juntos, formam um padrão.",
        evidenceTypes: [
            "Planilha refeita do fluxo de caixa",
            "Desenho de quem passou dinheiro pra quem",
            "Lista dos donos reais no fim da cadeia",
            "Linha do tempo das transações suspeitas",
            "Relatório com o tipo de lavagem identificado",
        ],
        caseStudies: [
            {
                code: "Caso 103 · Desvio societário · SP",
                situation:
                    "Sócio minoritário desconfiava que o controlador estava desviando por fornecedor.",
                outcome:
                    "Achamos R$ 18M indo pra 3 CNPJs de fachada da família do controlador.",
                duration: "35 dias · Ação de dissolução procedente",
            },
            {
                code: "Caso 128 · Compliance interno",
                situation:
                    "Suspeita de superfaturamento na área de compras de uma multinacional.",
                outcome:
                    "Descobrimos 4 fornecedores ligados ao gerente. Justa causa aplicada.",
                duration: "24 dias · R$ 6,2M recuperados",
            },
        ],
        faq: [
            {
                q: "Vocês entram em conta bancária?",
                a: "Não. Trabalhamos apenas com documento público, extrato que o cliente passa e, se for o caso, dados obtidos via quebra de sigilo judicial. Sigilo bancário nunca é tocado.",
            },
            {
                q: "Identificam tipo de lavagem?",
                a: "Sim. Usamos a classificação do COAF/GAFI, que é a mesma linguagem do Ministério Público e do compliance dos bancos.",
            },
            {
                q: "Em quanto tempo aparece o primeiro indício?",
                a: "Os primeiros sinais em cerca de 5 dias. Mapa completo com cadeia documentada entre 20 e 45 dias.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "20–45 dias" },
            { label: "Alcance", value: "Brasil + internacional" },
            { label: "Entrega", value: "Arquivo financeiro" },
            { label: "Sigilo", value: "NDA + compliance" },
        ],
    },
    {
        slug: "investigacao-conjugal",
        icon: Heart,
        title: "Investigação conjugal",
        shortDesc: "Se está roubando sua paz, trazemos a resposta. 100% digital, 100% discreto.",
        fullDesc:
            "Suspeita de traição tira o sono. Resolvemos isso por rastreamento digital e monitoramento online: redes sociais ativas e ocultas, apps de relacionamento, padrão de comportamento na internet, interações suspeitas, contatos recorrentes, pegada digital completa. Quando faz sentido, aplicamos teste de fidelidade com perfil controlado para validar a conduta real. Tudo remoto, sem te expor, sem ninguém sabendo. Você volta a dormir em paz, com a resposta que procurava.",
        bullets: [
            "Rastreio de redes sociais (inclusive contas ocultas e secundárias)",
            "Varredura em apps e comunicações",
            "Monitoramento de interações online e padrão de comunicação",
            "Análise de pegada digital e histórico público",
            "Teste de fidelidade com perfil controlado (opcional)",
            "Sigilo total, operação 100% remota e sem te expor",
        ],
        forWho: [
            "Quem desconfia do parceiro",
            "Quem quer um teste de fidelidade discreto",
            "Quem precisa de clareza para decidir o próximo passo",
            "Quem quer resposta sem ninguém perceber",
        ],
        relatedSlugs: ["investigacao-de-custodia", "localizacao-de-pessoas", "investigacao-digital"],
        dossierId: "CS-005/CNJ",
        classification: "Sigilo pessoal, Nível máximo",
        heroImage: UNSPLASH("1511376777868-611b54f68947"),
        heroImageAlt: "Reflexo de luzes urbanas em janela de vidro à noite com atmosfera melancólica",
        statistic: {
            value: "92%",
            label: "dos casos fecham com resposta clara",
            context: "seja para confirmar a suspeita ou para afastar de vez, você sai com certeza",
        },
        pullQuote:
            "Você não contrata uma investigação conjugal para descobrir uma traição. Contrata para finalmente conseguir dormir, com ou sem a resposta que temia.",
        evidenceTypes: [
            "Mapa das redes sociais ativas, incluindo contas ocultas",
            "Linha do tempo das interações online suspeitas",
            "Padrões de comunicação e horário de atividade",
            "Prints e registros de conversa em perfil controlado (se aplicável)",
        ],
        caseStudies: [
            {
                code: "Caso 212 · Rastreio digital silencioso",
                situation:
                    "Cliente desconfiava havia meses. Parceiro negava e dizia que era paranoia.",
                outcome:
                    "Encontramos 2 contas ocultas em app de relacionamento e uma rede social secundária com interações ativas.",
                duration: "12 dias · 100% remoto",
            },
            {
                code: "Caso 245 · Teste de fidelidade",
                situation: "Cliente queria validar o comportamento sem ninguém sabendo.",
                outcome:
                    "Perfil controlado confirmou a conduta em menos de 96 horas de conversa.",
                duration: "7 dias · 100% remoto",
            },
        ],
        faq: [
            {
                q: "É legal investigar digitalmente o próprio parceiro?",
                a: "É. Nossa atuação segue integralmente a Lei Federal nº 13.432/2017, que regulamenta a profissão de detetive particular no Brasil.",
            },
            {
                q: "Ele ou ela vai perceber que está sendo investigado?",
                a: "Não. Toda a operação é remota e silenciosa. Nenhum contato, nenhuma abordagem, nenhum sinal. Só você sabe que está acontecendo.",
            },
            {
                q: "Como funciona o teste de fidelidade?",
                a: "Quando faz sentido, operamos um perfil controlado em apps e redes para validar a conduta real do alvo. Você acompanha o resultado direto pelo WhatsApp, em tempo real.",
            },
        ],
        metadataStrip: [],
    },
    {
        slug: "investigacao-digital",
        icon: Globe,
        title: "Investigação digital",
        shortDesc: "Tudo que tentaram esconder na internet, encontramos. E provamos que estava lá.",
        fullDesc:
            "Alguém apagou o post, desativou a conta, mudou de nome, mas a internet guarda tudo. Mapeamos a pegada digital do alvo, cruza perfil em rede social, domínio, e-mail, metadados de foto e conteúdo deletado. No final, você tem um raio-x completo da presença online, documentado com hash e prova de hora pra valer em juízo.",
        bullets: [
            "Pegada digital completa (perfil, conta, e-mail)",
            "Análise de domínio, DNS e infra web",
            "Recuperação de conteúdo deletado e metadados",
            "Identificação de perfil fake e identidade falsa",
            "Laudo técnico que serve como prova",
        ],
        forWho: [
            "Vítimas de crime digital",
            "Empresas investigando vazamento",
            "Advogados em caso de difamação online",
            "Quem está sendo ameaçado virtualmente",
        ],
        relatedSlugs: ["localizacao-de-golpistas", "contraespionagem", "verificacao-de-antecedentes"],
        dossierId: "CS-006/DIG",
        classification: "Nível 2, Metodologia OSINT",
        heroImage: UNSPLASH("1526374965328-7f61d4dc18c5"),
        heroImageAlt: "Linhas de código e luzes azuladas de matrix em monitor escuro",
        statistic: {
            value: "1.8TB",
            label: "de dados vasculhados por mês",
            context: "volume médio de fonte pública que processamos nas operações ativas",
        },
        pullQuote:
            "Apagar um post é como apagar pegada na areia: parece que funcionou. Mas o arquivo, o cache, o espelho e a testemunha continuam exatamente onde você deixou.",
        evidenceTypes: [
            "Print com hash SHA-256 e carimbo de hora",
            "Histórico de versão (Wayback Machine)",
            "Análise dos metadados de foto (EXIF)",
            "Mapa da infraestrutura (WHOIS, DNS, host)",
            "Relatório cruzando perfis pelo jeito de escrever",
        ],
        caseStudies: [
            {
                code: "Caso 186 · Difamação digital",
                situation:
                    "Ataques anônimos coordenados em 5 perfis fakes contra uma empresária.",
                outcome:
                    "Identificamos um autor só cruzando IP, jeito de escrever e metadados.",
                duration: "10 dias · Ação criminal procedente",
            },
            {
                code: "Caso 221 · Vazamento corporativo",
                situation: "Documentos internos circulando em fórum anônimo.",
                outcome:
                    "Rastreamos até ex-funcionário pelo cruzamento de handle e estilo de escrita.",
                duration: "14 dias · Acordo fechado",
            },
        ],
        faq: [
            {
                q: "Vocês invadem conta ou sistema?",
                a: "Não. Trabalhamos apenas com fonte aberta (OSINT): conteúdo público, cache, arquivo histórico e dados que o cliente passa. Nada de acesso indevido.",
            },
            {
                q: "Dá pra identificar um perfil anônimo?",
                a: "Na maioria dos casos, sim, cruzando metadado, horário de post, jeito de escrever, conta vinculada e infra técnica por trás.",
            },
            {
                q: "O laudo tem valor jurídico?",
                a: "Tem, especialmente se a captura for registrada em cartório e o hash validado. Serve pra ação cível e criminal em difamação, stalking e crime digital.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "3–15 dias" },
            { label: "Alcance", value: "Global · OSINT" },
            { label: "Entrega", value: "Laudo técnico digital" },
            { label: "Sigilo", value: "Total" },
        ],
    },
    {
        slug: "localizacao-de-pessoas",
        icon: MapPin,
        title: "Localização de pessoas",
        shortDesc: "Encontramos quem sumiu: devedor, testemunha, parente perdido, desaparecido.",
        fullDesc:
            "Ninguém some de verdade. Deixa rastro numa conta de luz, num comentário de rede social, num documento emitido em cartório, numa foto postada por terceiro. Cruzamos registros públicos, pegada digital e trabalho de campo até localizar qualquer pessoa em qualquer canto do Brasil, e, com parceiros, em mais de 20 países. Entrega: endereço validado, com rotina mapeada se for o caso.",
        bullets: [
            "Localização por registro público e digital",
            "Devedor, testemunha, desaparecido",
            "Reconexão familiar",
            "Trabalho de campo quando necessário",
            "Relatório com endereço documentado",
        ],
        forWho: [
            "Famílias atrás de parente perdido",
            "Advogados atrás de testemunha",
            "Credor atrás de devedor",
            "Cartório e tabelião",
        ],
        relatedSlugs: ["localizacao-de-golpistas", "suporte-a-litigios", "investigacao-patrimonial"],
        dossierId: "CS-007/LOC",
        classification: "Nível 2, Operacional",
        heroImage: UNSPLASH("1514565131-fce0801e5785"),
        heroImageAlt: "Vista aérea de cidade à noite com luzes dos bairros formando teia",
        statistic: {
            value: "89%",
            label: "de localizações confirmadas",
            context: "taxa de casos em que conseguimos entregar endereço validado em até 20 dias",
        },
        pullQuote:
            "Ninguém some completamente. Todo mundo deixa vestígio, na conta de luz, num comentário, num documento, numa foto postada por outro.",
        evidenceTypes: [
            "Relatório com endereço confirmado",
            "Mapa da rotina e deslocamento (quando pede)",
            "Foto discreta de confirmação",
            "Cruzamento de bases públicas",
            "Registro em cartório, se precisar",
        ],
        caseStudies: [
            {
                code: "Caso 276 · Execução · Devedor sumido",
                situation:
                    "Devedor de R$ 2,4M há 3 anos sem endereço válido, recusava citação.",
                outcome:
                    "Localizado numa cidade do interior cruzando registros. Citação feita em mãos.",
                duration: "8 dias · Execução destravou",
            },
            {
                code: "Caso 298 · Reconexão familiar",
                situation: "Filho dado à adoção em 1982 queria encontrar a mãe biológica.",
                outcome:
                    "Localizamos a mãe em outro estado. Contato foi intermediado com consentimento.",
                duration: "22 dias · Reencontro aconteceu",
            },
        ],
        faq: [
            {
                q: "Funcionam no Brasil todo?",
                a: "Sim, inclusive no interior e em região remota. Onde não temos gente fixa, acionamos parceiros sob nosso protocolo.",
            },
            {
                q: "E se a pessoa estiver no exterior?",
                a: "Operamos em cerca de 20 países via rede de parceiros. Prazo e custo variam conforme o país.",
            },
            {
                q: "Entregam o contato direto da pessoa localizada?",
                a: "Pra reconexão familiar, intermediamos o contato com consentimento. Pra demanda judicial, entrega endereço e documentação pro advogado.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "3–20 dias" },
            { label: "Alcance", value: "Brasil + 20 países" },
            { label: "Entrega", value: "Endereço validado" },
            { label: "Sigilo", value: "Conforme o caso" },
        ],
    },
    {
        slug: "localizacao-de-golpistas",
        icon: UserSearch,
        title: "Localização de golpistas",
        shortDesc: "Caiu em golpe? Descobrimos quem é, onde está e monta o caso pro advogado.",
        fullDesc:
            "Caiu num golpe? Respira. Entramos em ação rápido, a grana costuma circular nas primeiras 48 horas, e esse é justamente o nosso protocolo. Rastreamos PIX, conta-laranja, perfil digital e qualquer rastro que o golpista deixou pra trás. Você recebe: nome real, CPF, endereço, fluxo do dinheiro e vínculos, pronto pra seu advogado pedir bloqueio e pra polícia acelerar o inquérito.",
        bullets: [
            "Rastreio do PIX e conta usados no golpe",
            "Identificação real do golpista (nome, CPF, foto)",
            "Análise de perfil digital e vínculos",
            "Localização física do autor",
            "Material pronto pra advogado e delegacia",
        ],
        forWho: [
            "Vítima de golpe do PIX",
            "Empresa fraudada",
            "Advogado representando vítima",
            "Quem caiu em estelionato sentimental ou digital",
        ],
        relatedSlugs: ["investigacao-digital", "investigacao-de-fraudes", "localizacao-de-pessoas"],
        dossierId: "CS-008/GLP",
        classification: "Nível 2, Resposta rápida",
        heroImage: UNSPLASH("1563986768609-322da13575f3"),
        heroImageAlt: "Silhueta iluminada por luz azul de monitor em ambiente escuro",
        statistic: {
            value: "48h",
            label: "pra primeira identificação",
            context: "tempo médio entre abrir o caso e ter o nome real do alvo na mão",
        },
        pullQuote:
            "O golpista aposta na sua vergonha. Enquanto você hesita em pedir ajuda, ele move o dinheiro. Nosso protocolo de 48 horas existe pra virar esse tempo contra ele.",
        evidenceTypes: [
            "Identificação real (nome, CPF, endereço)",
            "Mapa completo do caminho do dinheiro",
            "Análise das chaves PIX e contas-laranja",
            "Perfis digitais ligados ao autor",
            "Material pronto pra levar à delegacia",
        ],
        caseStudies: [
            {
                code: "Caso 181 · Golpe PIX · R$ 380k",
                situation:
                    "Empresa pagou boleto falso achando que era do fornecedor de sempre.",
                outcome:
                    "Rastreamos o autor pela rede de contas-laranja. R$ 220k bloqueados na Justiça.",
                duration: "5 dias · Parte do dinheiro voltou",
            },
            {
                code: "Caso 204 · Estelionato sentimental",
                situation:
                    "Vítima mandou R$ 140k em 6 meses pra suposto namorado estrangeiro.",
                outcome:
                    "Descobrimos o operador em Pernambuco, parte de quadrilha de 4 pessoas.",
                duration: "12 dias · Inquérito instaurado",
            },
        ],
        faq: [
            {
                q: "Conseguem recuperar o dinheiro?",
                a: "Quem recupera é o advogado e a Justiça. Entregamos o material que viabiliza o bloqueio e a ação. Em golpe recente (até 48h), a chance de recuperar parte é alta.",
            },
            {
                q: "Atuam em golpe internacional?",
                a: "Sim, via rede de parceiros. Golpe saindo de Portugal, Paraguai, México, Nigéria, Leste Europeu, faz parte da rotina.",
            },
            {
                q: "Vocês conversam com o golpista?",
                a: "Nunca. Qualquer abordagem é feita só pela polícia ou pelo advogado da vítima, baseado no nosso material.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "48h–15 dias" },
            { label: "Alcance", value: "Brasil + global" },
            { label: "Entrega", value: "Material pra delegacia" },
            { label: "Sigilo", value: "Total" },
        ],
    },
    {
        slug: "investigacao-trabalhista",
        icon: Briefcase,
        title: "Investigação trabalhista",
        shortDesc: "Funcionário com atestado estranho? Descobrimos o que ele realmente faz.",
        fullDesc:
            "Funcionário que falta com atestado falso, que trabalha no concorrente em horário de expediente, que está desviando cliente ou informação, isso destrói resultado e clima da equipe. Investigamos a conduta sem o empregado desconfiar, monitorando em campo, puxando rede social e checando vínculo com concorrente. Relatório fica pronto pra dar base a justa causa, ação trabalhista ou PAD interno.",
        bullets: [
            "Verificação de atestado e atividade paralela",
            "Monitoramento discreto em campo",
            "Análise de rede social e atividade online",
            "Checagem de vínculo com concorrente",
            "Material pra justa causa ou ação",
        ],
        forWho: ["RH", "Donos de empresa", "Gestor de equipe", "Advogado trabalhista"],
        relatedSlugs: ["investigacao-de-fraudes", "concorrencia-desleal", "verificacao-de-antecedentes"],
        dossierId: "CS-009/TRB",
        classification: "Nível 2, Corporativo",
        heroImage: UNSPLASH("1497366216548-37526070297c"),
        heroImageAlt: "Torre corporativa envidraçada com reflexos noturnos",
        statistic: {
            value: "R$ 8,4M",
            label: "em ações revertidas",
            context: "total das ações trabalhistas em que a prova que produzimos mudou o resultado",
        },
        pullQuote:
            "Justa causa sem prova vira reintegração. RH não precisa de desconfiança, precisa de material sólido.",
        evidenceTypes: [
            "Foto com data e local marcado",
            "Relatório da atividade em rede social",
            "Checagem direta do atestado com a clínica",
            "Mapa de vínculos com concorrente",
            "Relatório pronto pra RH e jurídico",
        ],
        caseStudies: [
            {
                code: "Caso 167 · Atestado falso",
                situation: "Funcionário somava 47 dias de atestado em 12 meses.",
                outcome:
                    "Descobrimos que a clínica que emitia nem existia. Justa causa mantida no TRT.",
                duration: "12 dias · R$ 180k economizados",
            },
            {
                code: "Caso 193 · Concorrência paralela",
                situation:
                    "Suspeita de que gerente de vendas rodava empresa concorrente em expediente.",
                outcome:
                    "Flagramos visita a clientes da empresa pelo 'negócio paralelo'. Demissão + ação cível.",
                duration: "20 dias · Indenização R$ 620k",
            },
        ],
        faq: [
            {
                q: "O monitoramento é legal?",
                a: "É, quando feito em lugar público ou semi-público e sem invadir privacidade. Seguimos à risca os critérios que o TST aceita.",
            },
            {
                q: "Dá base pra justa causa mesmo?",
                a: "Dá. É um dos usos mais comuns. O relatório é montado exatamente pra dar suporte jurídico à decisão do empregador.",
            },
            {
                q: "E se o funcionário desconfiar?",
                a: "A operação é desenhada pra ser invisível. Em 8 anos, nunca teve exposição da empresa contratante em processo.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "7–25 dias" },
            { label: "Alcance", value: "Nacional" },
            { label: "Entrega", value: "Relatório RH + jurídico" },
            { label: "Sigilo", value: "Corporativo" },
        ],
    },
    {
        slug: "investigacao-de-fraudes",
        icon: AlertTriangle,
        title: "Investigação de fraudes",
        shortDesc: "Tem algo estranho acontecendo na sua empresa. Descobrimos quem, como e quanto.",
        fullDesc:
            "Fraude na empresa não começa no dia em que você descobre, começa meses antes. Desmontamos o esquema de trás pra frente: quem está envolvido, como está acontecendo, quanto já custou. Análise de documento, cruzamento de dado financeiro, investigação de fornecedor e parceiro suspeito, identificação de desvio interno. Material robusto pra ação judicial, denúncia ao Ministério Público ou decisão de conselho.",
        bullets: [
            "Análise de documento e número financeiro",
            "Identificação do esquema e de quem está dentro",
            "Investigação de fornecedor e parceiro",
            "Mapa dos desvios internos",
            "Prova pra processo ou denúncia",
        ],
        forWho: [
            "Empresas sofrendo fraude",
            "Conselho de administração",
            "Compliance",
            "Advogados em caso de fraude",
        ],
        relatedSlugs: ["inteligencia-financeira", "investigacao-trabalhista", "due-diligence"],
        dossierId: "CS-010/FRD",
        classification: "Nível 3, Acesso restrito",
        heroImage: UNSPLASH("1554224154-22dec7ec8818"),
        heroImageAlt: "Papéis espalhados em luz baixa com anotações e marcações a caneta",
        statistic: {
            value: "R$ 67M",
            label: "em esquemas desmontados",
            context: "valor total das fraudes que mapeamos e documentamos nos últimos 3 anos",
        },
        pullQuote:
            "Fraude sofisticada não se denuncia com desconfiança, se denuncia com documento. E documento se monta de trás pra frente.",
        evidenceTypes: [
            "Mapa do esquema com todos os envolvidos",
            "Cruzamento de nota, boleto e contrato",
            "Prova digital com cadeia de custódia",
            "Relatório de fornecedor e parceiro suspeito",
            "Material pronto pra enviar ao MP",
        ],
        caseStudies: [
            {
                code: "Caso 154 · Fraude em licitação",
                situation:
                    "Conselho de construtora desconfiava de manipulação em processo licitatório.",
                outcome:
                    "Flagramos conluio entre gerente de obra e 3 fornecedores da mesma família.",
                duration: "30 dias · Denúncia ao MP · R$ 12M",
            },
            {
                code: "Caso 198 · Fraude de seguro",
                situation: "Sinistro de R$ 3,4M em galpão industrial, com indícios suspeitos.",
                outcome:
                    "Provamos que foi simulado, com vídeo, rota e movimentação de estoque prévia.",
                duration: "22 dias · Sinistro negado",
            },
        ],
        faq: [
            {
                q: "Qual a diferença pra inteligência financeira?",
                a: "Inteligência financeira foca no dinheiro. Investigação de fraude foca no esquema inteiro, documento, relação, pessoa envolvida e modus operandi. Se complementam.",
            },
            {
                q: "O material pode ir pro Ministério Público?",
                a: "Pode. Já entregamos no formato que MP e delegacia especializada recebem.",
            },
            {
                q: "Vocês atuam em fraude contra a empresa ou dentro dela?",
                a: "Os dois. A maioria dos casos é fraude interna, sócio, executivo, funcionário-chave.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "15–45 dias" },
            { label: "Alcance", value: "Nacional" },
            { label: "Entrega", value: "Arquivo estruturado" },
            { label: "Sigilo", value: "NDA + comitê" },
        ],
    },
    {
        slug: "investigacao-de-custodia",
        icon: Baby,
        title: "Investigação de custódia",
        shortDesc: "Em briga de guarda, o que importa é a criança. Mostramos a realidade do dia a dia dela.",
        fullDesc:
            "Em disputa de guarda, quem perde pode ser a criança. Documentamos o ambiente real em que ela vive: rotina, moradia, quem fica perto dela, fator de risco. Sem dramatizar, sem exagerar, só o fato, do jeito que está acontecendo. O relatório é montado pra vara de família e ajuda o juiz a enxergar o que só quem está de fora consegue ver.",
        bullets: [
            "Avaliação da rotina dos responsáveis",
            "Checagem das condições da moradia",
            "Identificação de risco pro menor",
            "Foto e observação respeitando a privacidade",
            "Material pra vara de família",
        ],
        forWho: [
            "Pai ou mãe em briga de guarda",
            "Advogado de família",
            "Avós buscando guarda",
            "Família preocupada com um menor",
        ],
        relatedSlugs: ["investigacao-conjugal", "localizacao-de-pessoas", "verificacao-de-antecedentes"],
        dossierId: "CS-011/GRD",
        classification: "Prioridade absoluta, Proteção do menor",
        heroImage: UNSPLASH("1490750967868-88aa4486c946"),
        heroImageAlt: "Silhueta de família em contraluz de janela com luz suave de fim de tarde",
        statistic: {
            value: "100%",
            label: "dos relatórios aceitos",
            context: "taxa de relatório aceito em vara de família em 5 anos de operação",
        },
        pullQuote:
            "Em briga de guarda, a criança não vota. Alguém precisa documentar a realidade do dia a dia dela, sem dramatizar, sem exagero, só o fato.",
        evidenceTypes: [
            "Relatório da rotina e do convívio",
            "Avaliação da moradia e da segurança",
            "Foto respeitando a privacidade do menor",
            "Identificação de terceiros no convívio",
            "Laudo montado pra vara de família",
        ],
        caseStudies: [
            {
                code: "Caso 117 · Modificação de guarda",
                situation:
                    "Mãe desconfiava que o ex-marido deixava a criança com gente inadequada.",
                outcome:
                    "Flagramos convivência prolongada com alguém de histórico criminal. Guarda foi revertida.",
                duration: "15 dias · Guarda modificada",
            },
            {
                code: "Caso 142 · Regulamentação de visitas",
                situation: "Pai acusado falsamente de abandono, sem acesso regular ao filho.",
                outcome:
                    "Documentamos presença assídua e ambiente saudável. Visitas foram regularizadas.",
                duration: "12 dias · Acordo judicial",
            },
        ],
        faq: [
            {
                q: "A investigação prejudica a criança?",
                a: "Nunca. Trabalhamos apenas com observação externa discreta, sem contato com o menor. Na maioria dos casos, a criança nem sai de casa durante a apuração.",
            },
            {
                q: "Vocês contratam psicólogo?",
                a: "Não substituímos avaliação psicossocial oficial. Nosso trabalho é factual, complementa o laudo do psicólogo ou assistente social do processo.",
            },
            {
                q: "Dá pra investigar a parte que me contrata também?",
                a: "Dá. Em caso complexo, avaliar os dois lares dá mais credibilidade ao conjunto. Quem decide isso é o advogado do caso.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "7–25 dias" },
            { label: "Alcance", value: "Nacional" },
            { label: "Entrega", value: "Laudo pra vara de família" },
            { label: "Sigilo", value: "Máximo · proteção do menor" },
        ],
    },
    {
        slug: "verificacao-de-antecedentes",
        icon: FileSearch,
        title: "Verificação de antecedentes",
        shortDesc: "Antes de confiar, confirme. Criminal, financeiro, profissional, em poucos dias.",
        fullDesc:
            "Antes de contratar alguém, fechar sociedade, começar relacionamento sério ou deixar teu filho com uma cuidadora, vale conferir. Puxamos antecedente criminal, processo, dívida, histórico profissional, validação de diploma e presença online. No final, um relatório direto que te diz se tem algo que pode virar problema.",
        bullets: [
            "Antecedente criminal, processo e dívida",
            "Validação de diploma e registro profissional",
            "Mapa de sócios e patrimônio",
            "Presença digital e reputação",
            "Relatório direto e objetivo",
        ],
        forWho: [
            "RH em processo seletivo",
            "Empresas avaliando parceiro",
            "Quem está começando relacionamento",
            "Famílias contratando cuidador",
        ],
        relatedSlugs: ["due-diligence", "investigacao-digital", "investigacao-trabalhista"],
        dossierId: "CS-012/BGK",
        classification: "Nível 1, Verificação padrão",
        heroImage: UNSPLASH("1568602471122-7832951cc4c5"),
        heroImageAlt: "Arquivo de pastas com etiquetas iluminado por luz de leitura",
        statistic: {
            value: "< 48h",
            label: "pra relatório básico",
            context: "prazo médio de entrega pra verificação padrão",
        },
        pullQuote:
            "Não é desconfiar. É conferir. Toda pessoa tem o direito de ser exatamente quem diz ser, e você tem o direito de confirmar.",
        evidenceTypes: [
            "Certidão criminal (federal, estadual, TRE)",
            "Certidão cível, trabalhista e fiscal",
            "Análise financeira (SPC, Serasa, Cadin)",
            "Confirmação de diploma e registro profissional",
            "Relatório de reputação digital e mídia",
        ],
        caseStudies: [
            {
                code: "Caso 256 · Relacionamento sério",
                situation:
                    "Cliente conferindo o parceiro antes de mudar de país com ele.",
                outcome:
                    "Achamos segundo casamento ativo e 2 filhos não declarados. Mudança cancelada.",
                duration: "5 dias · Relatório direto",
            },
            {
                code: "Caso 271 · Contratação de babá",
                situation: "Família contratando cuidadora pra morar com crianças pequenas.",
                outcome:
                    "Validamos currículo limpo e referências reais. Contratação feita com tranquilidade.",
                duration: "2 dias · Sem ressalva",
            },
        ],
        faq: [
            {
                q: "É legal?",
                a: "É, quando feito com base pública e respeitando a LGPD. Nunca tocamos em dado protegido por sigilo bancário ou fiscal sem autorização.",
            },
            {
                q: "O alvo fica sabendo?",
                a: "Não. Usamos só fonte aberta e consulta autorizada com base legítima.",
            },
            {
                q: "Qual a diferença pra due diligence?",
                a: "Verificação de antecedente é padrão (certidão, registro). Due diligence junta análise de reputação, entrevista e contexto estratégico. Aqui é o checklist; lá é o raio-x estratégico.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "48h–5 dias" },
            { label: "Alcance", value: "Brasil" },
            { label: "Entrega", value: "Relatório direto" },
            { label: "Sigilo", value: "LGPD-compliant" },
        ],
    },
    {
        slug: "contraespionagem",
        icon: ShieldOff,
        title: "Contraespionagem e proteção",
        shortDesc: "Varredura de escuta, câmera oculta e vulnerabilidade digital. Pra quem precisa operar em paz.",
        fullDesc:
            "Executivo, empresário, figura pública, todo mundo que tem algo relevante pra decidir vira alvo potencial de espionagem. Fazemos varredura técnica do ambiente (escuta, câmera escondida, dispositivo estranho), avalia vulnerabilidade digital e monta protocolo de comunicação segura. Trabalho pontual ou recorrente, feito pra você parar de se preocupar.",
        bullets: [
            "Detecção de escuta e câmera escondida",
            "Varredura técnica do ambiente",
            "Avaliação de vulnerabilidade digital",
            "Protocolo de segurança pra executivo",
            "Orientação de comunicação segura",
        ],
        forWho: [
            "Executivos e empresários",
            "Pessoa pública",
            "Advogado em caso sensível",
            "Empresa em negociação crítica",
        ],
        relatedSlugs: ["investigacao-digital", "concorrencia-desleal", "due-diligence"],
        dossierId: "CS-013/CTE",
        classification: "Nível máximo, Acesso individual",
        heroImage: UNSPLASH("1518770660439-4636190af475"),
        heroImageAlt: "Placa de circuitos eletrônicos iluminada em detalhe macro",
        statistic: {
            value: "1 em 11",
            label: "salas com escuta ativa",
            context: "frequência que encontramos escuta em varredura de alta direção e negociação crítica",
        },
        pullQuote:
            "Se a sala vale uma reunião importante, vale uma varredura antes. A pergunta não é 'tem escuta aqui?', é 'quando foi a última vez que alguém checou?'.",
        evidenceTypes: [
            "Relatório de varredura com dispositivo detectado",
            "Laudo de vulnerabilidade digital",
            "Protocolo de comunicação segura sob medida",
            "Plano de contramedida por ambiente",
            "Programa de varredura recorrente",
        ],
        caseStudies: [
            {
                code: "Caso 089 · Varredura pré-M&A",
                situation:
                    "Sala onde ia rolar 6 semanas de negociação de aquisição de R$ 200M.",
                outcome:
                    "Achamos dispositivo de áudio numa luminária, rastreado até o prestador de limpeza.",
                duration: "1 dia · Deal protegido",
            },
            {
                code: "Caso 144 · Residência de executivo",
                situation: "CEO sabia que conversas pessoais vazavam pra imprensa.",
                outcome:
                    "Identificamos vazamento no celular de um assessor. Protocolo foi refeito.",
                duration: "4 dias · Vazamento encerrado",
            },
        ],
        faq: [
            {
                q: "De quanto em quanto tempo devo fazer varredura?",
                a: "Pra alta direção: antes de negociação importante, depois de rotatividade de equipe ou prestador, e de forma recorrente a cada 60–90 dias.",
            },
            {
                q: "Vocês vendem equipamento?",
                a: "Não. Operamos com equipamento próprio, padrão internacional (analisador de espectro, detector de junção, termografia). Vendemos serviço, não hardware.",
            },
            {
                q: "Dá pra fazer sem ninguém perceber?",
                a: "Dá. A equipe pode ir disfarçada (manutenção, TI, limpeza) ou aberta, como você preferir. Varredura noturna é comum.",
            },
        ],
        metadataStrip: [
            { label: "Prazo", value: "1–3 dias por varredura" },
            { label: "Alcance", value: "Nacional" },
            { label: "Entrega", value: "Relatório técnico" },
            { label: "Sigilo", value: "Total · equipe dedicada" },
        ],
    },
    {
        slug: "concorrencia-desleal",
        icon: Users,
        title: "Investigação de concorrência desleal",
        shortDesc: "Concorrente usando jogo sujo? Provamos e seu advogado pede indenização.",
        fullDesc:
            "Concorrência é ok. Jogo sujo não. Quando o concorrente está roubando funcionário-chave, copiando produto, desviando cliente, usando informação vazada ou fazendo espionagem industrial, isso é crime, e tem como provar. Mapeamos a prática, reúne prova e quantifica o dano. Com o material pronto, seu advogado entra com ação por concorrência desleal, pedido de liminar e indenização.",
        bullets: [
            "Investigação de espionagem industrial",
            "Prova de desvio de cliente e aliciamento",
            "Identificação de vazamento de informação",
            "Cálculo do dano causado",
            "Material pronto pra ação judicial",
        ],
        forWho: [
            "Empresas sofrendo concorrência desleal",
            "Advogado empresarial",
            "Sócio desconfiando de outro sócio",
            "Jurídico corporativo",
        ],
        relatedSlugs: ["contraespionagem", "investigacao-trabalhista", "investigacao-de-fraudes"],
        dossierId: "CS-014/CDS",
        classification: "Nível 3, Corporativo sensível",
        heroImage: UNSPLASH("1577415124269-fc1140a69e91"),
        heroImageAlt: "Sala de reunião corporativa iluminada por vidros, vista externa em contraluz",
        statistic: {
            value: "R$ 94M",
            label: "em indenizações viabilizadas",
            context: "somado nas ações por concorrência desleal que instruímos",
        },
        pullQuote:
            "Mercado competitivo é saudável. Jogo sujo é crime. A linha entre um e outro é exatamente a mesma: o meio que você usou pra vencer.",
        evidenceTypes: [
            "Mapa do aliciamento da equipe técnica",
            "Prova de uso de lista de cliente ou segredo",
            "Análise de material e reputação do concorrente",
            "Rastreio do vazamento de informação",
            "Cálculo do dano causado",
        ],
        caseStudies: [
            {
                code: "Caso 163 · Aliciamento sistemático",
                situation:
                    "Empresa perdeu 8 engenheiros-chave e clientes pro concorrente em 6 meses.",
                outcome:
                    "Provamos recrutamento coordenado usando dado interno. Saiu liminar + indenização.",
                duration: "34 dias · R$ 14M de indenização",
            },
            {
                code: "Caso 189 · Cópia de produto",
                situation:
                    "Concorrente lançou produto idêntico 4 meses depois de contratar uma ex-funcionária.",
                outcome:
                    "Flagramos transferência de arquivo técnico pro e-mail pessoal antes da saída.",
                duration: "28 dias · Ação criminal e cível",
            },
        ],
        faq: [
            {
                q: "Contra quem posso entrar com ação?",
                a: "Contra a empresa concorrente, os executivos envolvidos no esquema e, se for ex-funcionário, contra ele pessoalmente por violação de sigilo e concorrência.",
            },
            {
                q: "Serve pra cível e criminal?",
                a: "Serve. Dependendo do fato, instrui ação por concorrência desleal (Lei 9.279/96), violação de segredo e, em caso grave, crime do art. 195 da LPI.",
            },
            {
                q: "Como protejo o sigilo da investigação dentro da empresa?",
                a: "Estruturamos o caso direto com conselho + jurídico externo, sem a operação saber. Em 9 de 10 casos, o time interno só descobre depois que a liminar saiu.",
            },
        ],
        metadataStrip: [
            { label: "Prazo médio", value: "20–45 dias" },
            { label: "Alcance", value: "Nacional" },
            { label: "Entrega", value: "Arquivo pra juízo" },
            { label: "Sigilo", value: "Conselho + jurídico" },
        ],
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
    return SERVICES.filter((s) => slugs.includes(s.slug));
}
