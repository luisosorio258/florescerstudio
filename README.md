# Florescer Studio

Landing page do Florescer Studio — studio de nail design e bem-estar. *A beleza de ser.*

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
│   ├── site.js         # número de WhatsApp + links de marcação
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

1. **Hero** — promessa e botão de marcação.
2. **Manifesto** — conceito da marca e palavras-chave.
3. **Serviços** — 6 serviços; cada um abre o WhatsApp com uma mensagem própria.
4. **A experiência** — ambiente, higiene, tempo.
5. **Como marcar** — 3 passos.
6. **Galeria** — preparada mas desativada (comentada no HTML) até haver fotos reais.
7. **FAQ** — 5 perguntas, também em dados estruturados para o Google.
8. **Marcações** — botão final, morada, horário e Instagram.

## Melhorias em relação ao EMart3D

- O número de WhatsApp está **num só sítio** (`js/site.js`). Os links usam `data-wa="mensagem"`.
- O ícone do WhatsApp é definido uma vez por página (`<symbol>`) e reutilizado.
- Sem testemunhos falsos nem fotos que não são do studio.
- `consent.js` protegido contra erros de `localStorage` (navegação privada).

## Por preencher antes de publicar

- [ ] Número de WhatsApp em `js/site.js` (`WHATSAPP_NUMBER`) e no JSON-LD (`telephone`) do `index.html`.
- [ ] Cidade, morada e horário (procurar por `[` nos ficheiros `.html`).
- [ ] Instagram (`@florescerstudio` é provisório).
- [ ] Domínio (`florescerstudio.pt` é provisório) em canonical, og:url, sitemap e robots; criar ficheiro `CNAME`.
- [ ] ID do Google Analytics em `js/consent.js`.
- [ ] `assets/og-image.jpg` (1200×630) e logótipo definitivo.
- [ ] Confirmar os serviços, a regra de desmarcação (24h) e a duração do verniz gel.
- [ ] Fotos reais para ativar a galeria.

## Como publicar (GitHub Pages, igual ao EMart3D)

1. ~~Publicar o repositório no GitHub~~ — feito: [`luisosorio258/florescerstudio`](https://github.com/luisosorio258/florescerstudio) (público, branch `main`).
2. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
3. Quando houver domínio:
   - criar o ficheiro `CNAME` na raiz só com o domínio (ex.: `florescerstudio.pt`);
   - no fornecedor do domínio, 4 registos `A` para o domínio raiz (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) e um `CNAME` do `www` para `luisosorio258.github.io`;
   - em Settings → Pages, escrever o domínio e ativar **Enforce HTTPS**.
4. Trocar `florescerstudio.pt` em canonical, og:url, og:image, JSON-LD, `sitemap.xml` e `robots.txt` se o domínio for outro.

Antes do domínio próprio, o site fica em `https://luisosorio258.github.io/florescerstudio/`. Aí a `404.html` aparece sem estilo (usa caminhos absolutos); fica correta assim que o domínio estiver ligado.

## Como ver localmente

Abrir o `index.html` no navegador. A `404.html` usa caminhos absolutos (`/css/...`), por isso só aparece com estilo depois de publicada.

## Histórico de alterações

Registar aqui cada alteração ao site (mais recente primeiro).

### 4 de novembro de 2026
- **Logótipo e texto mais legíveis.** A fonte Italiana era demasiado fina e quase não se lia sobre o marfim. O logótipo passou a Cormorant Garamond 600 (maior), o "STUDIO" e os traços ficaram mais grossos e sem transparência, o texto corrido passou de peso 300 para 400 e o slogan do rodapé ficou mais escuro. A Italiana deixou de ser carregada.
- **Repositório publicado no GitHub** (público, via GitHub Desktop). GitHub Pages ainda desligado até os dados reais estarem preenchidos.
- **Sempre em tema claro.** Removido o modo escuro automático: a marca vive em marfim e, no escuro, o botão principal quase desaparecia.
- **Primeira versão** da landing page, com a estrutura do EMart3D: hero, manifesto, 6 serviços, experiência, como marcar, FAQ e marcações; política de privacidade, 404, banner de cookies com GA4, SEO (Open Graph, JSON-LD `NailSalon` + FAQ), `robots.txt` e `sitemap.xml`. Texto em português de Portugal, a tratar a cliente por "tu".
