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
│   ├── site.js         # número de WhatsApp + link de marcação online (BOOKING_URL)
│   └── consent.js      # banner de cookies + Google Analytics
├── assets/             # logótipo, og-image e fotos (a adicionar)
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

### Marcação online

Todos os botões "Marcar" usam `data-book`. Enquanto `BOOKING_URL` em `js/site.js` estiver vazio, abrem o WhatsApp com uma mensagem pronta; quando houver sistema de agendamento, basta colocar o link lá e todos os botões passam a usá-lo. O sistema de agendamento ainda está por decidir.

## Melhorias em relação ao EMart3D

- O número de WhatsApp está **num só sítio** (`js/site.js`). Os links usam `data-wa="mensagem"`.
- O ícone do WhatsApp é definido uma vez por página (`<symbol>`) e reutilizado.
- Sem testemunhos falsos nem fotos que não são do studio.
- `consent.js` protegido contra erros de `localStorage` (navegação privada).

## Por preencher antes de publicar

- [ ] Número de WhatsApp em `js/site.js` (`WHATSAPP_NUMBER`) e no JSON-LD (`telephone`) do `index.html`.
- [ ] Morada completa, código postal e horário (procurar por `[` nos ficheiros `.html`); trocar o link do Google Maps pela ficha do studio.
- [x] E-mail profissional: `contato@florescer.com` (Hostinger).
- [ ] Instagram (`@florescerstudio` é provisório).
- [x] Domínio `florescer.com` em canonical, og:url, og:image, JSON-LD, sitemap e robots.
- [ ] Criar o ficheiro `CNAME` e apontar o DNS na Hostinger, só no dia de ligar o GitHub Pages (ver abaixo).
- [ ] ID do Google Analytics em `js/consent.js`.
- [ ] `assets/og-image.jpg` (1200×630) e logótipo definitivo.
- [ ] **Preço da manutenção** do alongamento (não vem no plano de negócio; está `[—] €`).
- [ ] Confirmar com a cliente: preços (são os "previstos" do plano), durações das mãos, textos de "Qual escolher?", o que inclui a manicure simples, regra de desmarcação (24h) e duração do verniz gel.
- [ ] Fotos reais para ativar a galeria.
- [ ] Decidir o sistema de marcação online (ver secção acima).

## Como publicar (GitHub Pages, igual ao EMart3D)

1. ~~Publicar o repositório no GitHub~~ — feito: [`luisosorio258/florescerstudio`](https://github.com/luisosorio258/florescerstudio) (público, branch `main`).
2. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
3. Ligar o domínio `florescer.com` (está na Hostinger, que também tem a caixa de e-mail):
   - criar o ficheiro `CNAME` na raiz só com `florescer.com`. Não criar antes de ligar o Pages e o DNS: com o `CNAME` e sem DNS, o site fica inacessível;
   - no painel DNS da Hostinger, 4 registos `A` para o domínio raiz (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) e um `CNAME` do `www` para `luisosorio258.github.io`;
   - em Settings → Pages, escrever o domínio e ativar **Enforce HTTPS**.
4. **Não mexer** nos registos `MX` (e `TXT` de SPF/DKIM) da Hostinger: são os do e-mail `contato@florescer.com`. Só se alteram os registos `A` e o `CNAME` do `www`.

Antes do domínio próprio, o site fica em `https://luisosorio258.github.io/florescerstudio/`. Aí a `404.html` aparece sem estilo (usa caminhos absolutos); fica correta assim que o domínio estiver ligado.

## Como ver localmente

Abrir o `index.html` no navegador. A `404.html` usa caminhos absolutos (`/css/...`), por isso só aparece com estilo depois de publicada.

## Histórico de alterações

Registar aqui cada alteração ao site (mais recente primeiro).

### 4 de novembro de 2026
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
