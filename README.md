# Welcome to Marketplace app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

Perfeito — agora a gente vai transformar seu esboço de MVP em um **plano de execução prático, dividido por fases**, considerando:

* **540 horas totais** (aprox. 67 horas/mês se forem 8 meses)
* **Início:** 01/11/2025
* **Entrega:** 30/06/2026
* **Objetivo:** ter um MVP **funcional, validável com usuários reais em Fortaleza**, com base no seu esboço de módulos.

---

## 📆 Estrutura sugerida — 8 Etapas do MVP

Cada etapa tem:

* 🧩 Objetivo principal
* 🔧 Entregas técnicas
* 🧠 Foco de UX/UI
* ⏱ Duração estimada (horas/mês)

---

### **🗓 Etapa 1 — Novembro/2025**

### “Fundação do App (Setup, UI base e Navegação)”

🧩 **Objetivo:** preparar o esqueleto do app com navegação, tema, tipografia e primeiros componentes visuais.

🔧 **Entregas técnicas**

* Criar projeto **React Native (Expo + TypeScript)**
* Configurar **NativeWind (Tailwind)** + tokens de cor (tema roxo/rosa)
* Criar design system inicial (`Button`, `Card`, `Badge`, `Avatar`, `SectionHeader`)
* Implementar **navegação base**:

  * Bottom Tabs: Feed / Explorar / Perfil
  * Stack navigation: FeedStack, ExploreStack, ProfileStack
* Criar mock de telas principais (Feed, Explorar, Perfil) com dados estáticos

🧠 **UX/UI:**

* Layout responsivo e consistente (com base nos seus prints)
* Prototipar no Figma para validar visual com stakeholders

⏱ **~60h**

---

### **🗓 Etapa 2 — Dezembro/2025**

### “Feed Social e Stories (Front-end + Mock Data)”

🧩 **Objetivo:** construir a timeline visual e stories (sem backend ainda)

🔧 **Entregas técnicas**

* Criar componentes:

  * `PostCard` (com curtidas, comentários, botão compartilhar)
  * `StoryList` (topo do feed)
* Implementar:

  * Interações locais (curtir, comentar, compartilhar – mock)
  * Layout de stories (com timer, swipe, etc.)
  * Acesso a câmera/galeria (Expo ImagePicker)
* Criar **estrutura local (JSON)** para mockar posts/stories

🧠 **UX/UI:**

* Fluidez no scroll e animações leves
* Feedback visual para interações (curtida, comentário)

⏱ **~70h**

---

### **🗓 Etapa 3 — Janeiro/2026**

### “Backend inicial (usuário, posts, feed)”

🧩 **Objetivo:** conectar o front-end ao backend real.

🔧 **Entregas técnicas**

* Backend (Node.js + TypeScript + Prisma ou Supabase)
* Endpoints:

  * `/auth` (login/cadastro)
  * `/feed` (listar posts)
  * `/posts` (criar, curtir, comentar)
* Integração com React Query (client-side)
* Persistência real de usuários e publicações

🧠 **UX/UI:**

* Fluxo de login e cadastro básico (sem redes sociais ainda)
* Loading states e tratamento de erros

⏱ **~70h**

---

### **🗓 Etapa 4 — Fevereiro/2026**

### “Explorar: Produtos, Lojas e Promoções”

🧩 **Objetivo:** habilitar o módulo *marketplace visual*.

🔧 **Entregas técnicas**

* Top Tabs: Produtos / Lojas / Promoções
* Endpoints:

  * `/products` (listar/categorizar)
  * `/stores` (listar/seguir)
  * `/promotions`
* Filtros e carrosséis personalizados
* Estado global (Zustand): `wishlist`, `recentlyViewed`

🧠 **UX/UI:**

* Cartões de produto e loja visualmente consistentes
* Indicadores de “em promoção”, “seguindo” etc.

⏱ **~65h**

---

### **🗓 Etapa 5 — Março/2026**

### “Mensageria e Interação Lojista-Cliente”

🧩 **Objetivo:** criar canal direto entre cliente e loja.

🔧 **Entregas técnicas**

* Implementar mensageria (Firebase Realtime Database ou Supabase Realtime)
* Tela de mensagens (listagem e chat)
* Integração com perfil de loja
* Notificação push para novas mensagens (Expo Notifications)

🧠 **UX/UI:**

* Layout de chat tipo Instagram DMs
* Destaque para mensagens não lidas

⏱ **~70h**

---

### **🗓 Etapa 6 — Abril/2026**

### “Gestão de Lojas e Produtos (para lojistas)”

🧩 **Objetivo:** permitir que lojistas gerenciem seus produtos e promoções.

🔧 **Entregas técnicas**

* CRUD de produtos (cadastro, edição, estoque)
* Cadastro da empresa/loja
* Gestão de colaboradores (usuários vinculados)
* Backend:

  * `/inventory`
  * `/collaborators`
  * `/store`

🧠 **UX/UI:**

* Painel simples de lojista dentro do app (modo administrador)
* Feedbacks visuais claros (salvo, erro, etc.)

⏱ **~65h**

---

### **🗓 Etapa 7 — Maio/2026**

### “Ações Promocionais e Fidelização”

🧩 **Objetivo:** gamificar a experiência do usuário e aumentar engajamento.

🔧 **Entregas técnicas**

* Módulo de cupons e promoções
* Programa de fidelidade (pontos por compras/interações)
* Carrosséis dinâmicos personalizados
* Integração para compartilhamento externo (Instagram, WhatsApp, Facebook)

🧠 **UX/UI:**

* Destaque visual para promoções ativas
* Modal de “ganhou pontos” ou “cupom resgatado”

⏱ **~70h**

---

### **🗓 Etapa 8 — Junho/2026**

### “Financeiro + Refinamento + Beta Test”

🧩 **Objetivo:** finalizar MVP, contratos e testes.

🔧 **Entregas técnicas**

* Módulo financeiro:

  * Contrato de adesão do lojista
  * Planos de assinatura
  * Dashboard simples (assinatura ativa, pagamentos)
* Mostrar chave Pix / dados bancários (somente exibição)
* Ajustes de performance e UI
* Testes beta com lojistas de Fortaleza
* Deploy (Expo + backend hospedado)

🧠 **UX/UI:**

* Finalizar fluxos críticos (carrinho, DM, publicação)
* Acessibilidade e performance

⏱ **~70h**

---

## 📊 Resumo Total

| Etapa     | Mês         | Tema                                  | Horas    |
| --------- | ----------- | ------------------------------------- | -------- |
| 1         | Nov/25      | Setup e UI Base                       | 60       |
| 2         | Dez/25      | Feed e Stories                        | 70       |
| 3         | Jan/26      | Backend e Autenticação                | 70       |
| 4         | Fev/26      | Explorar (Produtos, Lojas, Promoções) | 65       |
| 5         | Mar/26      | Mensageria                            | 70       |
| 6         | Abr/26      | Gestão de Lojas e Produtos            | 65       |
| 7         | Mai/26      | Promoções e Fidelização               | 70       |
| 8         | Jun/26      | Financeiro, QA e Beta                 | 70       |
| **Total** | **8 meses** |                                       | **540h** |

---

## 🧭 Recomendações estratégicas

* 🪶 **Primeiro mês = Setup e arquitetura limpa**: vale a pena investir em uma base sólida (design system, navegação e stores).
* 💬 **Feedback rápido com lojistas locais**: teste o feed, chat e cadastro de produto o quanto antes (a partir da Etapa 4).
* 🔄 **Backend escalável desde o início**: use Supabase ou um backend próprio em Node + Prisma, já pensando na autenticação e storage.
* 🚀 **Entrega incremental mensal**: cada mês termina com algo usável/testável.
* 💡 **Documentar tudo**: mantenha README e changelog de cada etapa — vai facilitar o onboarding de novos devs.

---

Se quiser, posso montar um **cronograma visual (Gantt simplificado)** ou um **quadro Trello/Notion sugerido** com essas etapas e milestones semanais (ex: “Semana 2 – tela de login”, “Semana 3 – feed funcional”).
Quer que eu monte esse plano visual com entregas semanais e milestones?

