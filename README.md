
# 🚀 TinyRoute - Web App (Frontend)

O **TinyRoute** é uma plataforma moderna e profissional para o encurtamento de URLs, desenvolvida para simplificar o compartilhamento de links e permitir o rastreio de métricas de engajamento. Este repositório contém o código-fonte do Frontend, criado para oferecer uma experiência de usuário (UX) fluida, responsiva e de alta performance.

---

## ✨ Funcionalidades Principais

- 🔐 **Autenticação Segura:** Sistema completo de Login e Registro de usuários.
- 📊 **Dashboard de Gestão:** Um painel de controle interativo onde os usuários podem visualizar, pesquisar e gerenciar todos os seus links encurtados.
- 🔗 **Encurtador Avançado:** - Criação rápida de links curtos a partir de URLs longas.
  - **Alias Personalizado:** Opção para escolher o nome do link final.
  - **Limite de Cliques:** Definição de um número máximo de acessos permitidos por link (exclusivo para usuários logados).
  - **Expiração:** Configuração de uma data e hora limite para a validade do link (exclusivo para usuários logados).
- 📋 **Ações Rápidas:** Botão de cópia para a área de transferência com feedback visual e gestão de status (Ativo/Inativo).

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as versões mais recentes das ferramentas modernas do ecossistema web:

- **Angular 21** (v21.2.0): Arquitetura baseada em *Standalone Components*, dispensando a utilização de NgModules para um código mais limpo e modular.
- **RxJS** (v7.8.0): Gestão de fluxos assíncronos e reatividade na comunicação com a API.
- **ngx-toastr** (v20.0.5): Biblioteca para notificações e alertas visuais elegantes (Toast messages).
- **Design Responsivo & CSS Nativo:** Interface adaptável a diferentes tamanhos de tela (Mobile, Tablet, Desktop) utilizando Flexbox, CSS Grid e variáveis CSS (Custom Properties) para consistência visual.
- **Signals:** Utilização do novo padrão reativo do Angular para controle de estado local otimizado.

---

## ⚙️ Instruções de Execução

Para rodar o projeto localmente no seu ambiente de desenvolvimento, siga os passos abaixo:

### Pré-requisitos
- **Node.js** (versão LTS recomendada)
- **NPM** (versão 11.6+ recomendada, conforme configurado no projeto)
- **Angular CLI** instalado globalmente na versão 21 (`npm install -g @angular/cli@21`)

### Comandos para Iniciar

1. Clone o repositório para a sua máquina:
```bash
git clone [https://github.com/SEU_USUARIO/tiny-route-frontend.git](https://github.com/SEU_USUARIO/tiny-route-frontend.git)
```


2. Acesse a pasta do projeto:

```bash
cd tiny-route-frontend

```

3. Instale as dependências:

```bash
npm install

```

4. Inicie o servidor de desenvolvimento:

```bash
ng serve

```

A aplicação estará disponível no seu navegador no endereço: `http://localhost:4200/`.
*(Lembre-se de certificar que a API do Backend também está em execução para o correto funcionamento da plataforma).*

---

## 📂 Estrutura do Projeto

A arquitetura do projeto foi desenhada para ser escalável e de fácil manutenção, baseada na divisão por domínios (Feature-Driven):

```text
src/app/
├── core/             # Lógica global e imutável
│   ├── auth/         # Facades e gestão de estado de autenticação
│   ├── guards/       # Proteção de rotas (AuthGuard)
│   ├── interceptors/ # Interceptação de requisições HTTP (AuthInterceptor)
│   ├── models/       # Interfaces e tipagem de dados
│   └── services/     # Comunicação com a API (AuthService, UrlService)
│
├── features/         # Módulos funcionais da aplicação
│   ├── auth/         # Componentes de Login e Registro
│   ├── dashboard/    # Tela principal de gestão de usuários logados
│   ├── public/       # Páginas abertas (Home/Landing Page)
│   └── urls/         # Lógica isolada de criação (UrlCreate) e listagem (UrlList)
│
└── shared/           # Componentes e recursos reutilizáveis
    └── components/   # Ex: Navbar

```

---

## 🏛️ Integração e Arquitetura

O ecossistema **TinyRoute** foi desenvolvido como um projeto com uma rigorosa separação de responsabilidades (Backend e Frontend).

A arquitetura deste Frontend reflete o consumo de uma API RESTful robusta desenvolvida em paralelo. Como o desenvolvimento principal da lógica de negócio, modelagem e regras de segurança foi centralizado no **Backend**, este cliente Angular atua exclusivamente como a camada de apresentação.

### Diretrizes de Contribuição e Integração:

* **Separação Rigorosa:** Nenhuma regra de negócio pesada ou validação de segurança crítica deve ser duplicada no Frontend. O Angular deve apenas refletir o estado entregue pela API e gerenciar a experiência do usuário.
* **Comunicação com a API:** Todas as chamadas ao Backend estão centralizadas nos serviços do diretório `core/services/`. Para alterar endpoints ou adicionar novas rotas da API, modifique os arquivos adequados nesta camada, respeitando as configurações de ambiente.
* **Manutenção de Componentes:** Mantenha os componentes o mais *"dumb"* (simples) possível, delegando a gestão de estado complexa para Facades ou Serviços.

