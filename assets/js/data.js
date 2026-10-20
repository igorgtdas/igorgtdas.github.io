/**
 * Conteúdo dos cards da landing.
 * - featured: projetos profissionais (nomes fictícios, código sob NDA) → cada um tem uma página em cases/
 * - personal: projetos pessoais com repositório público
 * Campos de texto aceitam string simples ou { pt, en }.
 */
var PORTFOLIO_DATA = {
  featured: [
    {
      id: 'pitstop-ai-sales',
      hero: true,
      title: 'PitStop AI Sales',
      image: 'assets/diagrams/ai-sales-agent.svg',
      alt: { pt: 'Diagrama do agente de vendas com IA', en: 'AI sales agent diagram' },
      caseUrl: 'cases/pitstop-ai-sales.html',
      summary: {
        pt: 'Agente de vendas com IA que atende clientes de autopeças no WhatsApp: entende o pedido, consulta estoque e preço, cadastra o cliente e passa para o vendedor na hora certa.',
        en: 'AI sales agent that serves auto-parts customers on WhatsApp: understands the request, checks stock and price, registers the customer and hands off to a salesperson at the right moment.'
      },
      highlights: [
        { pt: '<strong>API em FastAPI</strong> com endpoints de pipeline RAG (ingestão, chunking, embeddings, busca semântica)', en: '<strong>FastAPI service</strong> with RAG pipeline endpoints (ingestion, chunking, embeddings, semantic search)' },
        { pt: '<strong>Orquestração de agentes</strong>: loop agentivo, especialistas por etapa e camadas de validação', en: '<strong>Agent orchestration</strong>: agentic loop, stage specialists and validation layers' },
        { pt: '<strong>Infra AWS em Terraform</strong>: ECS Fargate, RDS + pgvector, Redis, CI/CD', en: '<strong>AWS infra in Terraform</strong>: ECS Fargate, RDS + pgvector, Redis, CI/CD' }
      ],
      stack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'pgvector', 'Redis', 'AWS', 'Terraform']
    },
    {
      id: 'pitstop-hub',
      team: true,
      title: 'PitStop Hub',
      image: 'assets/diagrams/hub.svg',
      alt: { pt: 'Diagrama do CRM omnichannel', en: 'Omnichannel CRM diagram' },
      caseUrl: 'cases/pitstop-hub.html',
      summary: {
        pt: 'CRM omnichannel para oficinas, com atendimento por IA. Meu foco: a API de conversação e as integrações com o WhatsApp.',
        en: 'Omnichannel CRM for auto repair shops, with AI-first service. My focus: the conversation API and the WhatsApp integrations.'
      },
      highlights: [
        { pt: 'WhatsApp <strong>oficial (Meta Cloud API)</strong> e via <strong>QR code</strong> no mesmo modelo de conversa', en: '<strong>Official WhatsApp (Meta Cloud API)</strong> and <strong>QR-code</strong> sessions in one conversation model' },
        { pt: 'Inbound por <strong>filas</strong> com dead-letter, roteamento IA-primeiro e fallback humano', en: '<strong>Queue-based</strong> inbound with dead-letter, AI-first routing and human fallback' }
      ],
      stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'BullMQ', 'Redis', 'Meta API']
    },
    {
      id: 'pitstop-notify',
      title: 'PitStop Notify',
      image: 'assets/diagrams/notify.svg',
      alt: { pt: 'Diagrama da mensageria proativa', en: 'Proactive messaging diagram' },
      caseUrl: 'cases/pitstop-notify.html',
      summary: {
        pt: 'Mensageria proativa: o cliente recebe no WhatsApp o clima do dia, o status do carro e um aviso quando a revisão está chegando.',
        en: 'Proactive messaging: customers get the day\'s weather, their car\'s status and a heads-up when service is due, right on WhatsApp.'
      },
      highlights: [
        { pt: 'Pipelines <strong>agendados</strong>: coleta → template → resumo por LLM → envio', en: '<strong>Scheduled</strong> pipelines: collect → template → LLM summary → send' },
        { pt: '<strong>Projeção de km</strong> para lembrar troca de óleo, pneus e revisão', en: '<strong>Mileage projection</strong> to remind about oil, tires and service' }
      ],
      stack: ['Python', 'Airflow', 'Pandas', 'PostgreSQL', 'LLM', 'Docker']
    }
  ],

  personal: [
    {
      id: 'pun-time-agent-langchain',
      image: 'assets/img/time-agent.jpg',
      alt: 'Agent Senhor do Tempo',
      title: { pt: 'Agent Senhor do Tempo', en: 'Time & Weather Agent' },
      description: {
        pt: 'Sistema multiagente com router e três agentes (hora, clima com API pública e out-of-scope), todos com trocadilhos. Servido por FastAPI.',
        en: 'Multi-agent system with a router and three agents (time, weather via public API, out-of-scope), all with puns. Served through FastAPI.'
      },
      stack: ['LangChain', 'LangGraph', 'FastAPI', 'OpenAI'],
      url: 'https://github.com/igorgtdas/pun-time-agent-langchain'
    },
    {
      id: 'ai-poker-player-llm',
      image: ['assets/img/poker-agent.jpg', 'assets/img/poker-result.png'],
      alt: 'Agent Poker',
      title: { pt: 'Agent Poker: coach de Texas Hold\'em', en: 'AI Poker Player: Texas Hold\'em coach' },
      description: {
        pt: 'Um LLM com visão lê o print da mesa (posição, pote, cartas) e sugere a jogada com equity por Monte Carlo. Roda com Groq, OpenAI ou Ollama.',
        en: 'A vision LLM reads a table screenshot (position, pot, cards) and suggests the move with Monte Carlo equity. Runs on Groq, OpenAI or Ollama.'
      },
      stack: ['Vision LLM', 'Groq', 'Ollama', 'Monte Carlo'],
      url: 'https://github.com/igorgtdas/AI_poker_player_LLM'
    },
    {
      id: 'predict-man-hour-maint-uns',
      image: ['assets/img/hh-737ng-app.png', 'assets/img/hh-737ng-scatter.png'],
      alt: 'Previsão de HH 737NG',
      title: { pt: 'Previsão de HH: manutenção 737NG', en: 'Man-hour forecast: 737NG maintenance' },
      description: {
        pt: 'TCC do MBA (USP/Esalq): rede neural MLP que prevê horas-homem de manutenção não programada com dados de 2015 a 2023, publicada como app web.',
        en: 'MBA thesis (USP/Esalq): an MLP neural network forecasting unscheduled maintenance man-hours from 2015–2023 data, deployed as a web app.'
      },
      stack: ['TensorFlow', 'Keras', 'Streamlit'],
      url: 'https://github.com/igorgtdas/predict-man-hour-maint-uns',
      pdf: 'docs/projeto1-tcc-previsao-manutencao-737NG.pdf'
    },
    {
      id: 'eda-sigma-interval',
      image: 'assets/img/eda-sigma.jpg',
      alt: 'EDA Sigma Interval',
      title: 'EDA Sigma Interval',
      description: {
        pt: 'Ferramenta de análise exploratória focada em intervalos e métricas estatísticas, para validar datasets antes da modelagem.',
        en: 'Exploratory analysis tool focused on intervals and statistical metrics, for validating datasets before modeling.'
      },
      stack: ['Python', 'Pandas', 'EDA'],
      url: 'https://github.com/igorgtdas/eda-sigma-interval'
    }
  ]
};
