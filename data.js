/**
 * Dados do portfólio — modular.
 * Para adicionar um projeto: inclua um objeto no array projects com os campos abaixo.
 *
 * Fotos fora do Git: para não subir fotos ao repositório, coloque aqui as URLs
 * (ex.: após enviar as imagens ao Imgur e pegar o "Direct link"). Deixe o
 * caminho local para testar na sua máquina.
 */
var PORTFOLIO_DATA = {
  /** URL da foto de perfil (hero). Use caminho local ou URL (ex.: Imgur). */
  heroImageUrl: 'foto_pessoal_para perfil.png',

  lang: {
    pt: {
      nav: { about: 'Sobre', projects: 'Projetos', contact: 'Contato' },
      hero: {
        tagline: 'Cientista de Dados · Especialista em IA & Machine Learning',
        location: 'São Paulo, Brasil',
        cta: 'Ver projetos'
      },
      section: { about: 'Sobre', projects: 'Projetos', contact: 'Contato' },
      about: {
        lead: 'Cientista de Dados com experiência em Inteligência Artificial, Machine Learning e Engenharia de Confiabilidade aplicada à aviação.',
        p2: 'Especialista no desenvolvimento de modelos preditivos, NLP e agentes baseados em LLMs para automação e suporte à decisão estratégica. Atuação focada em geração de eficiência operacional, redução de reincidências técnicas e otimização de recursos.',
        p3: 'Atualmente <strong>Data Scientist na Future Secure AI</strong>, desenvolvendo soluções com IA generativa, LangChain, Flowise e n8n. Anteriormente <strong>Analista de Engenharia de Confiabilidade</strong> na Gol Linhas Aéreas (6 anos), com foco em planejamento de manutenção, modelagem preditiva e análise de confiabilidade (Weibull, séries temporais, clusterização).',
        p4: 'Formado em <strong>Automação Industrial (IFSP)</strong> e <strong>MBA em Data Science e Analytics (USP/Esalq)</strong>, com monografia em previsão de demanda de mão de obra via Redes Neurais.'
      },
      project: { viewGitHub: 'Ver no GitHub →', downloadPdf: 'Baixar PDF' },
      footer: 'Igor Gonçalves · Cientista de Dados & IA',
      aria: { menu: 'Abrir menu', lang: 'Traduzir para inglês' }
    },
    en: {
      nav: { about: 'About', projects: 'Projects', contact: 'Contact' },
      hero: {
        tagline: 'Data Scientist · AI & Machine Learning Specialist',
        location: 'São Paulo, Brazil',
        cta: 'View projects'
      },
      section: { about: 'About', projects: 'Projects', contact: 'Contact' },
      about: {
        lead: 'Data Scientist with experience in Artificial Intelligence, Machine Learning and Reliability Engineering applied to aviation.',
        p2: 'Specialist in predictive models, NLP and LLM-based agents for automation and strategic decision support. Focus on operational efficiency, reduction of technical recurrences and resource optimization.',
        p3: 'Currently <strong>Data Scientist at Future Secure AI</strong>, developing solutions with generative AI, LangChain, Flowise and n8n. Previously <strong>Reliability Engineering Analyst</strong> at Gol Linhas Aéreas (6 years), focused on maintenance planning, predictive modeling and reliability analysis (Weibull, time series, clustering).',
        p4: 'Degree in <strong>Industrial Automation (IFSP)</strong> and <strong>MBA in Data Science and Analytics (USP/Esalq)</strong>, with thesis on workforce demand forecasting via Neural Networks.'
      },
      project: { viewGitHub: 'View on GitHub →', downloadPdf: 'Download PDF' },
      footer: 'Igor Gonçalves · Data Scientist & AI',
      aria: { menu: 'Open menu', lang: 'Translate to Portuguese' }
    }
  },

  /**
   * Lista de projetos. Para adicionar: copie um bloco, altere id, image, alt, title, description, stack e url.
   * image: caminho local (ex.: 'pasta/print.png') ou URL (ex.: 'https://i.imgur.com/xxx.png') se não quiser a imagem no repo.
   */
  projects: [
    {
      id: 'pun-time-agent-langchain',
      image: 'projeto_3_Agent Senhor do Tempo.JPG',
      alt: { pt: 'Agent Senhor do Tempo — Sistema multiagente LangChain', en: 'Time & Weather Agent — LangChain multi-agent system' },
      title: {
        pt: 'Agent Senhor do Tempo — Hora, clima e out-of-scope',
        en: 'Time & Weather Agent — Clock, weather and out-of-scope'
      },
      description: {
        pt: 'Sistema multiagente com LangChain e LangGraph, usando um framework simples próprio para criação de sistemas multiagente. Inclui Router Agent; tools com consumo de API pública de clima gratuita; modelo OpenAI GPT-4.1-mini. Para deploy foi implementada uma API com FastAPI para facilitar integração com outros sistemas ou frontends. Front de chat feito com Cursor para testes de usuário. Três agentes: um para informar a hora com trocadilhos, outro para o clima de qualquer cidade do mundo (também com trocadilhos) e um Out of Scope acionado quando a pergunta foge do foco do assistente.',
        en: 'Multi-agent system with LangChain and LangGraph, using a simple custom framework for building multi-agent systems. Includes Router Agent; tools consuming a free public weather API; OpenAI GPT-4.1-mini. For deployment, a FastAPI API was implemented to facilitate integration with other systems or frontends. Chat front-end built with Cursor for user testing. Three agents: one to tell the time with puns, one for weather in any city worldwide (also with puns), and an Out of Scope agent triggered when the question is outside the assistant\'s focus.'
      },
      lang: 'Python',
      stack: { pt: 'LangChain · LangGraph · OpenAI 4.1-mini · FastAPI · Cursor', en: 'LangChain · LangGraph · OpenAI 4.1-mini · FastAPI · Cursor' },
      url: 'https://github.com/igorgtdas/pun-time-agent-langchain'
    },
    {
      id: 'predict-man-hour-maint-uns',
      image: 'PROJETO 1 - Captura de tela do modelo deployed.png',
      alt: { pt: 'Previsão de HH — Manutenção Boeing 737NG', en: 'HH Forecast — Boeing 737NG Maintenance' },
      title: {
        pt: 'Previsão de HH — Manutenção não programada 737NG',
        en: 'HH Forecast — Unscheduled maintenance 737NG'
      },
      description: {
        pt: 'TCC do MBA em Data Science e Analytics (2024): modelo preditivo com Redes Neurais Artificiais (MLP) para previsão de Horas-Homem em itens não programados de manutenção de linha em frota Boeing 737NG. Dados históricos de HH e utilização (2015–2023), normalização MinMaxScaler, otimizador Adam e MSE. Modelo semanal com variáveis acft, horas, ciclos e horas_mês; deploy em aplicação web interativa.',
        en: 'MBA thesis in Data Science and Analytics (2024): predictive model with Artificial Neural Networks (MLP) for Man-Hours forecasting in unscheduled line maintenance items on a Boeing 737NG fleet. Historical MH and utilization data (2015–2023), MinMaxScaler normalization, Adam optimizer and MSE. Weekly model with acft, hours, cycles and hours_month; deployed as an interactive web app.'
      },
      lang: 'Python',
      stack: { pt: 'TensorFlow · Keras · Streamlit', en: 'TensorFlow · Keras · Streamlit' },
      url: 'https://github.com/igorgtdas/predict-man-hour-maint-uns',
      pdf: 'docs/projeto1-tcc-previsao-manutencao-737NG.pdf'
    },
    {
      id: 'eda-sigma-interval',
      image: 'Projeto_2_EDA.JPG',
      alt: { pt: 'EDA Sigma Interval — Análise exploratória', en: 'EDA Sigma Interval — Exploratory analysis' },
      title: {
        pt: 'EDA Sigma Interval',
        en: 'EDA Sigma Interval'
      },
      description: {
        pt: 'Ferramenta para análises exploratórias de dados (EDA), com foco em intervalos e métricas estatísticas. Útil para exploração e validação de datasets antes de modelagem.',
        en: 'Tool for exploratory data analysis (EDA), focused on intervals and statistical metrics. Useful for exploring and validating datasets before modeling.'
      },
      lang: 'Python',
      stack: { pt: 'Pandas · Análise exploratória', en: 'Pandas · Exploratory analysis' },
      url: 'https://github.com/igorgtdas/eda-sigma-interval'
    },
    {
      id: 'ai-poker-player-llm',
      image: 'projeto_4_agen_poker.JPG',
      alt: { pt: 'Agent Poker — Assistente Texas Hold\'em com LLM', en: 'AI Poker Player — Texas Hold\'em assistant with LLM' },
      title: {
        pt: 'Agent Poker — Coach de Texas Hold\'em com visão',
        en: 'AI Poker Player — Texas Hold\'em coach with vision'
      },
      description: {
        pt: 'Assistente de IA para Texas Hold\'em que atua como coach de poker. Utiliza um LLM com visão (OCR) para extrair da imagem da mesa: posição do jogador (BB, SB, BTN, UTG, etc.), pote, cartas comunitárias (flop/turn/river) e cartas da mão. Com base nesse contexto, a LLM gera uma sugestão estruturada sobre a melhor jogada (FOLD, CHECK, CALL, RAISE), com equity (Monte Carlo), motivos e veredito. Suporta Groq, OpenAI (gpt-4.1, gpt-4o) e Ollama; entrada manual ou por screenshot da mesa.',
        en: 'AI assistant for Texas Hold\'em that works as a poker coach. Uses a vision LLM (OCR) to extract from the table image: player position (BB, SB, BTN, UTG, etc.), pot, community cards (flop/turn/river) and hole cards. Based on that context, the LLM produces a structured suggestion for the best move (FOLD, CHECK, CALL, RAISE), with equity (Monte Carlo), reasoning and verdict. Supports Groq, OpenAI (gpt-4.1, gpt-4o) and Ollama; manual input or table screenshot.'
      },
      lang: 'Python',
      stack: { pt: 'LLM com visão · Groq · OpenAI · Ollama · Monte Carlo · Interface gráfica', en: 'Vision LLM · Groq · OpenAI · Ollama · Monte Carlo · GUI' },
      url: 'https://github.com/igorgtdas/AI_poker_player_LLM'
    }
  ]
};
