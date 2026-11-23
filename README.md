# Florescer Studio

Landing page do Florescer Studio — studio de manicure, pedicure e nail design em Valença, Portugal. *A beleza de ser.*

Negócio de uma só profissional (ENI), num espaço central de Valença, com clientes de Valença, Cerveira, Monção e do lado espanhol (Tui, Tomiño, Salvaterra). Trabalha só com gel e verniz gel (sem verniz tradicional); os serviços de pés são estéticos, sem podologia.

Construída sobre a mesma base do [EMart3D](../EMart3D): HTML + CSS + JavaScript simples, sem framework nem build, pronta para GitHub Pages.

## Estrutura do projeto

```
florescerstudio/
├── index.html          # página principal
├── privacidade.html    # política de privacidade (RGPD)
├── 404.html            # página de erro
├── css/
│   └── styles.css      # paleta, tipografia e layout
├── js/
│   ├── site.js         # WhatsApp + interruptor da marcação online (CAL_USERNAME)
│   └── consent.js      # banner de cookies + Google Analytics
├── assets/
│   ├── favicon.svg            # ícone provisório (arco vinho com "F")
│   ├── og-image.png           # imagem de partilha 1200×630
│   └── og-image-source.html   # fonte da og-image (para a gerar de novo)
├── docs/               # documentos para a cliente (só local, não vão para o GitHub)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Identidade visual

- **Paleta:** marfim `#F4EEE6`, areia `#EADBCB`, terracota `#B4623F`, champagne `#C9AD7E`, vinho/castanho `#3A1D14`, verde oliva `#3F4A31` (todas como variáveis no topo de `css/styles.css`).
- **Tipografia:** Cormorant Garamond (títulos e logótipo provisório), Jost (texto e etiquetas espaçadas).
- **Elementos:** arcos (como o arco da receção do moodboard) e formas orgânicas suaves. Sem flores, borboletas, coroas nem excesso de rosa.
- O logótipo está feito em texto, enquanto o definitivo não chega. Quando chegar, substituir o bloco `.logo` nas páginas por `<img src="assets/logo.svg">`.

## Secções da página

1. **Hero** — slogan "A beleza de ser.", "Manicure, pedicure e nail design em Valença" (no `<h1>`, para o Google) e botão **Marcar horário**.
2. **Categorias** — 4 atalhos (Mãos, Alongamentos, Pés, Spa & rituais) que levam aos preços.
3. **Sobre o Florescer** — o studio, o significado do nome, atendimento individual + 3 pilares (atendimento, higiene, produtos).
4. **Serviços e preços** — organizados por categoria, com preço e, quando se sabe, duração. Inclui extras e complementos.
5. **Qual escolher?** — diferença entre verniz gel, blindagem, banho de gel e alongamento.
6. **Como marcar** — 3 passos.
7. **Galeria** — preparada mas desativada (comentada no HTML) até haver fotos reais.
8. **FAQ** — 8 perguntas, também em dados estruturados para o Google.
9. **Marcações e contacto** — botão de marcação, morada com link para o Google Maps, horário, e-mail e Instagram.

### Como alterar preços ou criar categorias

No `index.html`, a secção começa no comentário `SERVIÇOS E PREÇOS`. Cada preço está num `<span class="price">`. Para uma categoria nova (ex.: maquilhagem), copiar um bloco `<div class="price-cat">` inteiro e, se quiser, um cartão novo nas categorias do topo.

### Mensagem padrão de marcação (WhatsApp)

Ao tocar em "Marcar", o WhatsApp abre com esta mensagem já escrita (definida em `BOOKING_MESSAGE`, `js/site.js`):

```
Olá! Vi o site do Florescer Studio e gostava de fazer uma marcação.

Serviço: {servico}
Dias e horários que me dão jeito:
Nome:
```

`{servico}` é preenchido com o valor `data-book` do botão (ex.: os botões da tabela de preços enviam "Mãos", "Alongamento em gel", "Pés" ou "Spa"); nos botões gerais fica em branco para a cliente escrever.

### Marcação online

A marcação online usa o **Cal.com** (plano gratuito, conta `cal.com/florescerstudio`) e está **pronta mas desligada**. Liga-se com uma linha em `js/site.js`:

```js
var CAL_USERNAME = "florescerstudio";   // vazio = tudo pelo WhatsApp
```

Com o interruptor ligado:
- Os botões com `data-book` (topo, "Marcar horário", categorias, contacto) abrem a agenda do Cal.com por cima do site (pop-up), sem o ícone do WhatsApp.
- Cada serviço da tabela de preços (`<li class="price-row" data-cal="slug">`) fica clicável, mostra "Marcar →" e abre a marcação desse serviço. O `slug` tem de ser igual ao do link no Cal.com (ex.: `pedicure`, `verniz-gel`).
- Os textos com `class="only-online"` aparecem e os `only-whatsapp` somem ("Como marcar", resposta "Como faço uma marcação?", bloco de contacto com "Marcar online" + link para dúvidas no WhatsApp).
- O botão flutuante (`data-wa-only`) continua sempre a abrir o WhatsApp.

Ao ligar, atualizar também a resposta "Como faço uma marcação?" no JSON-LD `FAQPage` do `index.html` (o Google lê essa versão).

Serviço novo: criá-lo no Cal.com (duplicar um existente) e acrescentar `data-cal="novo-slug"` à linha na tabela de preços.

## Melhorias em relação ao EMart3D

- O número de WhatsApp está **num só sítio** (`js/site.js`). Os links usam `data-wa="mensagem"`.
- O ícone do WhatsApp é definido uma vez por página (`<symbol>`) e reutilizado.
- Sem testemunhos falsos nem fotos que não são do studio.
- `consent.js` protegido contra erros de `localStorage` (navegação privada).

## Por preencher antes de publicar

- [x] Morada: Rua Edifício S. Gião, L, 14-N, rés-do-chão, 4930-644 Valença.
- [x] Horário: segunda a sexta, 8h às 17h (provisório, "padrão" até a cliente confirmar; sábado não aparece).
- [ ] Quando existir o Perfil da Empresa no Google, trocar o link "Ver no Google Maps" pelo link da ficha do studio.
- [x] E-mail profissional: `contato@florescerstudio.com` (Hostinger).
- [x] Instagram: [`@florescerstudiooficial`](https://www.instagram.com/florescerstudiooficial/).
- [x] WhatsApp: `+351 931 976 069`.
- [x] Domínio `florescerstudio.com` em canonical, og:url, og:image, JSON-LD, sitemap e robots.
- [ ] Criar o ficheiro `CNAME` e apontar o DNS na Hostinger, só no dia de ligar o GitHub Pages (ver abaixo).
- [ ] ID do Google Analytics em `js/consent.js`.
- [x] Imagem de partilha `assets/og-image.png` (provisória, só tipografia; refazer com o logótipo definitivo a partir de `og-image-source.html`).
- [x] Ícone do site `assets/favicon.svg` (provisório).
- [ ] Logótipo definitivo (trocar o bloco `.logo`, o favicon e a og-image).
- [ ] Ligar a marcação online (`CAL_USERNAME`) quando a cliente aprovar, e acertar valores/durações no site e no Cal.com.
- [ ] **Preço da manutenção** do alongamento (não vem no plano de negócio; está `[—] €`).
- [ ] Confirmar com a cliente: preços (são os "previstos" do plano), durações das mãos, textos de "Qual escolher?", o que inclui a manicure simples, regra de desmarcação (24h) e duração do verniz gel.
- [ ] Fotos reais para ativar a galeria.
- [ ] Decidir o sistema de marcação online (ver secção acima).

## Como publicar (GitHub Pages, igual ao EMart3D)

1. ~~Publicar o repositório no GitHub~~ — feito: [`luisosorio258/florescerstudio`](https://github.com/luisosorio258/florescerstudio) (público, branch `main`).
2. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
3. Ligar o domínio `florescerstudio.com` (está na Hostinger, que também tem a caixa de e-mail):
   - criar o ficheiro `CNAME` na raiz só com `florescerstudio.com`. Não criar antes de ligar o Pages e o DNS: com o `CNAME` e sem DNS, o site fica inacessível;
   - no painel DNS da Hostinger, 4 registos `A` para o domínio raiz (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) e um `CNAME` do `www` para `luisosorio258.github.io`;
   - em Settings → Pages, escrever o domínio e ativar **Enforce HTTPS**.
4. **Não mexer** nos registos `MX` (e `TXT` de SPF/DKIM) da Hostinger: são os do e-mail `contato@florescerstudio.com`. Só se alteram os registos `A` e o `CNAME` do `www`.

Antes do domínio próprio, o site fica em `https://luisosorio258.github.io/florescerstudio/`. Aí a `404.html` aparece sem estilo (usa caminhos absolutos); fica correta assim que o domínio estiver ligado.

## Como ver localmente

Abrir o `index.html` no navegador. A `404.html` usa caminhos absolutos (`/css/...`), por isso só aparece com estilo depois de publicada.

## Histórico de alterações

Registar aqui cada alteração ao site (mais recente primeiro).

### 23 de novembro de 2026
- **Marcação online pronta para ligar** (interruptor `CAL_USERNAME` em `js/site.js`, desligado): pop-up do Cal.com nos botões "Marcar", cada serviço da tabela de preços clicável e ligado ao seu link (`data-cal`), textos alternativos online/WhatsApp em "Como marcar", na FAQ e no contacto. Testado no Chrome com o interruptor ligado: a Manicure simples abriu a agenda certa (45 min) com a cor da marca. Desligado de novo.
- **Política de privacidade** atualizada para a marcação online: dados recolhidos na marcação, prestadores (Cal.com, Google Agenda/Analytics, Meta/WhatsApp), transferências fora da UE, armazenamento técnico do Cal.com e prazos de conservação.
- **Ícone do site** (`assets/favicon.svg`) e **imagem de partilha** (`assets/og-image.png`, 1200×630) provisórios, ligados em todas as páginas; meta tags passaram de `og-image.jpg` para `og-image.png`.
- **Removida a página de teste** `teste-marcacao.html`.
- **Todos os serviços no Cal.com** (15 no total, duplicados do Pedicure simples, por isso com morada, intervalo de 15 min, antecedência de 12 h, confirmação manual e as mesmas perguntas): Manicure simples 45 min, Verniz gel 60, Blindagem 75, Banho de gel 90, Alongamento curto/médio/longo 120/135/150, Manutenção 90, Pedicure simples 60, Pedicure com verniz gel 90, Plástica dos pés 120, Spa mãos 45, Ritual com parafina 60, Spa dos pés 120, Remoção total de gel 30. **Durações provisórias** (só as dos pés vêm do plano de negócio). Os extras (nail art, francesinha, reparação, remoção de outra profissional) não têm marcação própria: vão nas notas e na pergunta do formulário.
- **Documentos para a cliente** em `docs/` (não vão para o GitHub, ver `.gitignore`): `relatorio-marcacao-online.pdf` (resultado dos testes e recomendação do Cal.com) e `lista-servicos-valores-duracao.pdf` (valores e durações para ela confirmar, com perguntas sobre horário, intervalo, antecedência, confirmação e cancelamento). Os PDFs são gerados a partir dos `.html` com o Chrome em modo headless.
- **Domínio corrigido para `florescerstudio.com`** (o registado na Hostinger) e e-mail para `contato@florescerstudio.com`, em todo o site: canonical, Open Graph, JSON-LD, contacto, privacidade, sitemap e robots. O `florescer.com` anterior estava errado.
- **Marcação de teste** feita no Cal.com (Pedicure simples, sexta 27/11 às 10:00). **Fluxo completo validado:** cliente marca → fica pendente (página e e-mail "aguarda confirmação") → a profissional recebe o pedido em `contato@florescerstudio.com` (o e-mail principal da conta Cal.com, não o Gmail da agenda) → aprova → a cliente recebe a confirmação com morada e links para cancelar/reagendar → o evento aparece na Google Agenda.
- **Horário de funcionamento** provisório: segunda a sexta, 8h às 17h, no contacto e nos dados estruturados (`openingHoursSpecification`).
- **Página de teste da marcação online** (`teste-marcacao.html`) com a agenda do Cal.com embutida e a cor da marca, ligada à conta `florescerstudio`.
- **Teste do Cal.com** (conta `cal.com/florescerstudio`, agenda Google `admcontatoflorescerstudio@gmail.com`):
  - 3 serviços de teste: Pedicure simples (60 min, `/pedicure`), Pedicure com verniz gel (90 min, `/pedicure-verniz-gel`) e Verniz gel (60 min, provisório, `/verniz-gel`).
  - Em cada um: local presencial com a morada, 15 min de intervalo depois, antecedência mínima de 12 h, horários de 30 em 30 min, **confirmação manual** (as pendentes já bloqueiam o horário), telemóvel (WhatsApp) obrigatório e pergunta "Tem verniz gel ou gel feito por outra profissional para remover?" (Sim/Não).
  - Disponibilidade segunda a sexta, 8h–17h, fuso Europe/Lisbon.
  - **Resultado:** um evento criado diretamente na Google Agenda (quinta 26/11, 10:00–11:30) bloqueou corretamente os horários de 09:00 a 11:00 da Pedicure simples. Marcações do WhatsApp anotadas na Google Agenda impedem sobreposições no site.

### 4 de novembro de 2026
- **Morada do studio** (Rua Edifício S. Gião, L, 14-N, r/c, 4930-644 Valença) no contacto e nos dados estruturados; link do Google Maps aponta para a morada.
- **Mensagem padrão de marcação no WhatsApp**, com campos para serviço, dias e horários preferidos e nome. Os botões da tabela de preços já preenchem o serviço.
- **WhatsApp e Instagram reais:** todos os botões de marcação abrem o WhatsApp `+351 931 976 069` (em `js/site.js` e no JSON-LD); o número também aparece no contacto. Instagram passou a `@florescerstudiooficial`.
- **Domínio e e-mail reais:** `florescer.com` (Hostinger) em canonical, Open Graph, JSON-LD, sitemap e robots; e-mail `contato@florescer.com` no contacto, nos dados estruturados e na política de privacidade. O `CNAME` fica para o dia da publicação.
- **Conteúdo real do negócio** (a partir do briefing da cliente e do plano de negócio ANPME/IEFP):
  - Localização em Valença em todo o site, SEO local (título, descrição, JSON-LD com área servida PT + Galiza e catálogo de preços).
  - Hero com o slogan como título e botão "Marcar horário".
  - Novas secções: categorias, Sobre o Florescer, Serviços e preços por categoria (com durações dos pés e extras) e "Qual escolher?".
  - Removidos o manifesto e a menção a verniz tradicional (o studio só usa gel); nota de que os pés não incluem podologia.
  - FAQ passou de 5 para 8 perguntas (verniz tradicional, remoção de gel de outra profissional, podologia, clientes de Espanha).
  - Contacto com e-mail e link para o Google Maps; política de privacidade atualizada com Valença e e-mail.
  - Botões "Marcar" passam a usar `data-book`, prontos para apontar para um sistema de agendamento (`BOOKING_URL`).
  - No telemóvel, o arco decorativo do topo fica escondido para os serviços aparecerem mais cedo.
  - `.gitignore` para não enviar a pasta `.claude/` (configuração local de pré-visualização).
- **Logótipo e texto mais legíveis.** A fonte Italiana era demasiado fina e quase não se lia sobre o marfim. O logótipo passou a Cormorant Garamond 600 (maior), o "STUDIO" e os traços ficaram mais grossos e sem transparência, o texto corrido passou de peso 300 para 400 e o slogan do rodapé ficou mais escuro. A Italiana deixou de ser carregada.
- **Repositório publicado no GitHub** (público, via GitHub Desktop). GitHub Pages ainda desligado até os dados reais estarem preenchidos.
- **Sempre em tema claro.** Removido o modo escuro automático: a marca vive em marfim e, no escuro, o botão principal quase desaparecia.
- **Primeira versão** da landing page, com a estrutura do EMart3D: hero, manifesto, 6 serviços, experiência, como marcar, FAQ e marcações; política de privacidade, 404, banner de cookies com GA4, SEO (Open Graph, JSON-LD `NailSalon` + FAQ), `robots.txt` e `sitemap.xml`. Texto em português de Portugal, a tratar a cliente por "tu".
