# 📄 ResumeAI - Frontend

## 📝 Descrição

O **ResumeAI Frontend** é a interface do usuário de uma aplicação web inovadora que utiliza Inteligência Artificial para análise de currículos. Desenvolvido com Vue.js 3 e TypeScript, o frontend oferece uma experiência moderna e intuitiva para upload de currículos, visualização de análises de IA e gerenciamento de perfil do usuário.

## 🚀 Tecnologias Utilizadas

### **Principais**

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **Vue Router** - Roteamento oficial para Vue.js
- **Pinia** - Gerenciamento de estado moderno para Vue

### **Estilização & UI**

- **Tailwind CSS** - Framework CSS utility-first
- **CSS3** - Estilização personalizada

### **HTTP & Integração**

- **Axios** - Cliente HTTP para APIs
- **VueUse** - Composables utilitários para Vue

### **Desenvolvimento & Qualidade**

- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código
- **Vue DevTools** - Ferramenta de debug para Vue

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Recursos estáticos (CSS, imagens)
├── components/       # Componentes Vue reutilizáveis
│   ├── ButtonComponent.vue
│   └── HeaderComponent.vue
├── plugins/          # Configurações de plugins (API)
├── router/           # Configuração de rotas
├── services/         # Serviços de integração com API
│   ├── analysis.ts   # Serviços de análise
│   └── auth.ts       # Serviços de autenticação
├── stores/           # Stores Pinia (gerenciamento de estado)
│   ├── analysis.ts   # Estado das análises
│   ├── auth.ts       # Estado de autenticação
│   └── counter.ts    # Estado contador (exemplo)
├── types/            # Definições TypeScript
├── views/            # Páginas/Views da aplicação
│   ├── AnalysisView.vue      # Visualizar análise específica
│   ├── CreateAnalysisView.vue # Criar nova análise
│   ├── DashboardView.vue     # Dashboard do usuário
│   ├── LandingView.vue       # Página inicial
│   ├── LoginView.vue         # Login
│   └── RegisterView.vue      # Cadastro
├── App.vue           # Componente raiz
└── main.ts           # Ponto de entrada da aplicação
```

## ⚙️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18+ recomendada)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Git** (para clonagem do repositório)

## 🛠️ Configuração e Setup

### **1. Clone o repositório**

```bash
git clone <url-do-repositorio>
cd ResumeAI-Frontend
```

### **2. Instale as dependências**

```bash
npm install
# ou
yarn install
```

### **3. Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### **4. Execute o projeto em modo desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

### **5. Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:5173`

## 🔧 Scripts Disponíveis

| Comando                | Descrição                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`        | Inicia o servidor de desenvolvimento |
| `npm run build`      | Gera build de produção             |
| `npm run preview`    | Preview da build de produção       |
| `npm run type-check` | Verificação de tipos TypeScript    |
| `npm run lint`       | Executa linter e corrige problemas   |
| `npm run format`     | Formata código com Prettier         |

## 🌟 Principais Funcionalidades

### **🔐 Autenticação**

- **Login/Registro** - Sistema completo de autenticação
- **Proteção de rotas** - Rotas protegidas por autenticação
- **Gerenciamento de sessão** - Controle de estado do usuário logado

### **📊 Análises de Currículo**

- **Upload de currículo** - Interface para envio de arquivos PDF/DOC
- **Análise por IA** - Integração com serviços de IA para análise
- **Visualização de resultados** - Dashboard com pontuações e feedback
- **Histórico** - Lista de análises anteriores do usuário

### **👤 Perfil do Usuário**

- **Dashboard personalizado** - Visão geral das análises
- **Gerenciamento de perfil** - Edição de dados pessoais

## 🗺️ Rotas da Aplicação

| Rota              | Componente         | Descrição                     | Autenticação |
| ----------------- | ------------------ | ------------------------------- | -------------- |
| `/`             | LandingView        | Página inicial                 | ❌             |
| `/login`        | LoginView          | Login do usuário               | ❌             |
| `/register`     | RegisterView       | Cadastro de usuário            | ❌             |
| `/dashboard`    | DashboardView      | Dashboard do usuário           | ✅             |
| `/analysis`     | CreateAnalysisView | Criar nova análise             | ✅             |
| `/analysis/:id` | AnalysisView       | Visualizar análise específica | ✅             |

## 🎯 Roadmap

### **Versão 1.1**

- [ ] Modo escuro/claro
- [ ] Internacionalização (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Notificações em tempo real

### **Versão 1.2**

- [ ] Comparação entre currículos
- [ ] Templates de currículo
- [ ] Exportação de relatórios em PDF
- [ ] Integração com LinkedIn

### **Versão 2.0**

- [ ] Editor de currículo integrado
- [ ] Análise de vagas de emprego
- [ ] Sistema de recomendações
- [ ] Chat com IA para melhorias

## 🤝 Contribuição

Este projeto é desenvolvido para fins de estudo. Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e de estudo.

## 👨‍💻 Autor

Desenvolvido com ❤️ para consolidação de conhecimentos em **Vue.js**, **TypeScript** e **desenvolvimento frontend moderno**.
