# Next.js App Template 🚀

Este é um template completo para aplicações **Next.js 14 App Router** com suporte a:

- ✅ TypeScript
- ✅ Redux Toolkit
- ✅ SCSS Modules
- ✅ Organização modular por componentes e páginas
- ✅ Estrutura clara para escalabilidade
- ✅ Páginas de exemplo: `/about`, `/contact`, `/home`

---

## 📁 Estrutura de Pastas e Arquivos

```bash
Comando | Descrição

mkdir -p app/components/Button
mkdir -p app/components/ContactForm
mkdir -p app/home
mkdir -p app/about
mkdir -p app/contact
mkdir -p styles
mkdir -p store/slices
mkdir -p utils

touch app/about/page.module.scss
touch app/about/page.tsx
touch app/components/Button/button.module.scss
touch app/components/Button/Button.tsx
touch app/components/Button/index.tsx
touch app/components/ContactForm/ContactForm.module.scss
touch app/components/ContactForm/ContactForm.tsx
touch app/components/ContactForm/index.tsx
touch app/contact/page.module.scss
touch app/contact/page.tsx
touch app/home/page.module.scss
touch app/home/page.tsx
touch app/globals.scss
touch app/layout.tsx
touch app/page.tsx
touch store/index.ts
touch store/provider.tsx
touch store/store.ts
touch store/slices/exampleSlice.ts
touch utils/storage.ts
touch styles/variables.scss
touch .eslintrc.json
touch .gitignore
touch next-env.d.ts
touch next.config.js
touch package-lock.json
touch package.json
touch README.md
touch tsconfig.json



Comando | Descrição
npm install | Instala as dependências do projeto
npm run dev | Inicia o servidor de desenvolvimento
npm run build | Compila a aplicação para produção
npm run start | Inicia o servidor de produção



🧩 Tecnologias Utilizadas
Next.js 14

TypeScript

SCSS Modules

Redux Toolkit

ESLint e Prettier (recomendado)


🛠️ Funcionalidades do Projeto
Formulário de contato com validação

Componentes reutilizáveis estilizados com SCSS Modules

Configuração de Redux Toolkit pronta para uso

Organização modular por pasta (feature-based)

Estilização moderna com sombra, espaçamento e responsividade


📦 Requisitos
Node.js v18+

npm ou yarn


📁 .gitignore
# Build
.next/
node_modules/

# Editor
.vscode/
.idx/

# Sistema
.DS_Store

# Ambiente (se aplicável)
.env*


✨ Contribuindo
Sinta-se à vontade para clonar e adaptar este template para seus projetos pessoais ou profissionais. Sugestões e melhorias são bem-vindas!
Feito com 💙 por Valter Vieira - valtervieira.dev@gmail.com
