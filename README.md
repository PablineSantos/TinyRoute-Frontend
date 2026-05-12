🚀 TinyRoute - Web App (Frontend)
=================================

O **TinyRoute** é uma plataforma moderna e profissional para o encurtamento de URLs, desenvolvida para simplificar a partilha de links e permitir o rastreio de métricas de engajamento. Este repositório contém o código-fonte do Frontend, criado para oferecer uma experiência de usuário (UX) fluida, responsiva e de alta performance.

✨ Funcionalidades Principais
----------------------------

*   🔐 **Autenticação Segura:** Sistema completo de Login e Registo de utilizadores, protegido por JWT (JSON Web Tokens).
    
*   📊 **Dashboard de Gestão:** Um painel de controlo interativo onde os utilizadores podem visualizar, pesquisar e gerir todos os seus links encurtados.
    
*   🔗 **Encurtador Avançado:** - Criação rápida de links curtos a partir de URLs longas.
    
    *   **Alias Personalizado:** Opção para escolher o nome do link final (ex: tiny.route:8080/meu-link).
        
    *   **Limite de Cliques:** Definição de um número máximo de acessos permitidos por link (exclusivo para utilizadores autenticados).
        
    *   **Expiração:** Configuração de uma data e hora limite para a validade do link (exclusivo para utilizadores autenticados).
        
*   📋 **Ações Rápidas:** Botão de cópia para a área de transferência com feedback visual e gestão de status (Ativo/Inativo).
    

🛠️ Tecnologias Utilizadas
--------------------------

Este projeto foi construído com ferramentas modernas do ecossistema web:

*   **Angular 18+:** Arquitetura baseada em _Standalone Components_, dispensando a utilização de NgModules para um código mais limpo e modular.
    
*   **RxJS:** Gestão de fluxos assíncronos e reatividade na comunicação com a API.
    
*   **ngx-toastr:** Biblioteca para notificações e alertas visuais elegantes (Toast messages).
    
*   **Design Responsivo & CSS Nativo:** Interface adaptável a diferentes tamanhos de ecrã (Mobile, Tablet, Desktop) utilizando Flexbox, CSS Grid e variáveis CSS (Custom Properties) para consistência visual.
    
*   **Signals:** Utilização do novo padrão reativo do Angular para controlo de estado local otimizado.
    

⚙️ Instruções de Execução
-------------------------

Para correr o projeto localmente no seu ambiente de desenvolvimento, siga os passos abaixo:

### Pré-requisitos

*   **Node.js** (versão LTS recomendada)
    
*   **Angular CLI** instalado globalmente (npm install -g @angular/cli)
    

### Comandos para Iniciar

1.  Clone o repositório para a sua máquina:
    

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/SEU_USUARIO/tiny-route-frontend.git   `

1.  Aceda à pasta do projeto:
    

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd tiny-route-frontend   `

1.  Instale as dependências:
    

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

1.  Inicie o servidor de desenvolvimento:
    

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ng serve   `

A aplicação estará disponível no seu navegador no endereço: http://localhost:4200/._(Lembre-se de certificar que a API do Backend também está em execução para o correto funcionamento da plataforma)._

📂 Estrutura do Projeto
-----------------------

A arquitetura do projeto foi desenhada para ser escalável e de fácil manutenção, baseada na divisão por domínios (Feature-Driven):

Plaintext

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/app/  ├── core/             # Lógica global e imutável  │   ├── auth/         # Facades e gestão de estado de autenticação  │   ├── guards/       # Proteção de rotas (AuthGuard)  │   ├── interceptors/ # Interceção de requisições HTTP (AuthInterceptor)  │   ├── models/       # Interfaces e tipagem de dados  │   └── services/     # Comunicação com a API (AuthService, UrlService)  │  ├── features/         # Módulos funcionais da aplicação  │   ├── auth/         # Componentes de Login e Registo  │   ├── dashboard/    # Ecrã principal de gestão de utilizadores logados  │   ├── public/       # Páginas abertas (Home/Landing Page)  │   └── urls/         # Lógica isolada de criação (UrlCreate) e listagem (UrlList)  │  └── shared/           # Componentes e recursos reutilizáveis      └── components/   # Ex: Navbar   `

🏛️ Integração e Arquitetura
----------------------------

O ecossistema **TinyRoute** foi desenvolvido como um projeto em grupo com uma rigorosa separação de responsabilidades (Backend e Frontend).

A arquitetura deste Frontend reflete o consumo de uma API RESTful robusta desenvolvida em paralelo. Como o desenvolvimento principal da lógica de negócio, processamento de dados e regras de segurança foi centralizado no **Backend**, este cliente Angular atua exclusivamente como a camada de apresentação.

### Diretrizes de Contribuição e Integração:

*   **Separação Rigorosa:** Nenhuma regra de negócio pesada ou validação de segurança crítica deve ser duplicada no Frontend. O Angular deve apenas refletir o estado entregue pela API e gerir a experiência do utilizador.
    
*   **Comunicação com a API:** Todas as chamadas ao Backend estão centralizadas nos serviços do diretório core/services/. Para alterar endpoints ou adicionar novas rotas da API, modifique os ficheiros adequados nesta camada, respeitando o environment.ts.
    
*   **Manutenção de Componentes:** Mantenha os componentes o mais _"dumb"_ (simples) possível, delegando a gestão de estado complexa para Facades ou Serviços.
