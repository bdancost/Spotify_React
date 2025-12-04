# Projeto Spotify (React) 🇧🇷

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-yellow?logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-lightgrey?logo=express)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Aplicação front-end em React + back-end simples em Express que simula um player estilo "Spotify" com listas de artistas e músicas. Projeto de estudo — use e adapte para aprendizado.

## Tecnologias

- Front-end: React + Vite ([Spotify/front-end/src/App.jsx](../src/App.jsx))
- Back-end: Node + Express ([Spotify/back-end/api/server.js](../../back-end/api/server.js))
- Dados de exemplo: arrays de artistas e músicas ([Spotify/front-end/src/assets/database/artists.js](../src/assets/database/artists.js), [Spotify/front-end/src/assets/database/songs.js](../src/assets/database/songs.js))

## Estrutura principal do projeto

- Front-end

  - Código React: [Spotify/front-end/src](../src)
  - Configuração Vite: [Spotify/front-end/vite.config.js](../vite.config.js)
  - Cliente API: [Spotify/front-end/api/api.js](../api/api.js) — exporta `artistArray` e `songsArray` / faz fetch para `/api`
  - Componentes principais: Header, Main, ItemList, SingleItem, SongList, SongItem, Player
  - Páginas: Home, Artists, Artist, Songs, Song

- Back-end
  - Servidor e endpoints: [Spotify/back-end/api/server.js](../../back-end/api/server.js)

## Badges / Ícones usados

As imagens acima são badges (shields) do Shields.io que representam as principais ferramentas usadas no projeto — oferecem uma aparência profissional ao README e ajudam a identificar stack rapidamente.

## Lógica — passo a passo (visão técnica)

1. Inicialização / dados

   - O front importa o arquivo `api/api.js`.
   - `api.js` detecta ambiente: em dev pode apontar para `http://localhost:3000/api`; em produção usa arrays ou URL de deploy.
   - Dados primários: `artistArray` e `songsArray` (objetos com id, nome, img, src, duração, artistId).

2. Rotas e navegação

   - `App.jsx` configura as rotas (Home, Artists, Artist/:id, Songs, Song/:id).
   - Links/Nav no `Header` atualizam a rota sem recarregar a página (React Router).

3. Renderização de listas

   - `ItemList` mapeia `artistArray` e renderiza `SingleItem` para cada artista.
   - `SongList` mapeia `songsArray` e renderiza `SongItem` para cada música.
   - Cada item recebe props com dados e callbacks para reprodução/seleção.

4. Páginas de detalhe

   - `Artist.jsx` e `Song.jsx` leem o `id` da URL (useParams) e filtram arrays para mostrar detalhes e lista relacionada.
   - Se não achar, exibe fallback (404 local ou mensagem).

5. Player (fluxo de reprodução)

   - Estado central (pode ficar em `App` ou Context): `currentSong`, `isPlaying`, `progress`.
   - `Player.jsx` usa um elemento <audio> (ref) para controlar reprodução:
     - play/pause toggles o `isPlaying` e chama `audio.play()` / `audio.pause()`.
     - seek: ajusta `audio.currentTime` e atualiza `progress`.
     - onTimeUpdate atualiza `progress` e formata tempo via util `formatTime`.
     - onEnded aciona seleção da próxima música (índice +1 ou loop).
   - Componentes que disparam play chamam handler (por props) que define `currentSong` e `isPlaying=true`.

6. Comunicação entre componentes

   - Props drilling ou Context API para compartilhar `currentSong`, `setCurrentSong`, `isPlaying`, handlers de play/stop.
   - Eventos: clique em `SongItem` chama `playSong(song)`; `Player` expõe controls ao usuário.

7. API / Back-end

   - Endpoints:
     - GET /api/artists → retorna array de artistas
     - GET /api/songs → retorna array de músicas
   - Em dev, rode o servidor Express para servir esses endpoints; front pode fazer fetch direto.

8. Formatação e utilitários
   - Função `formatTime(seconds)` converte para mm:ss.
   - Tratamento de erros: checar existência de src, fallback de imagem, e tratar fetch erros (try/catch + mensagens).

## Como rodar (local)

1. Front-end

   - Terminal:
     ```sh
     cd Spotify/front-end
     npm install
     npm run dev
     ```
   - Vite iniciará e mostrará a URL (ex.: http://localhost:5173).

2. Back-end

   - Em outro terminal:
     ```sh
     cd Spotify/back-end
     npm install
     npm run dev   # ou node api/server.js
     ```
   - O servidor costuma escutar em http://localhost:3000 (confirme em api/server.js).

3. Ajuste de API no front (se necessário)
   - Editar: Spotify/front-end/api/api.js
   - Definir baseURL: `const BASE = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://sua-deploy-url/api'`

## Observações rápidas

- Dados de exemplo: /src/assets/database/\*.js
- Player persistente idealmente no topo da árvore (App) para manter estado entre rotas.
- Para testar áudio local em macOS, permita autoplay nas configurações do browser ou clique para iniciar reprodução.

## Contribuição

- Abra uma branch, faça alterações em componentes isolados (`/src/components`) e envie PR.
- Para mudanças de lógica do player, prefira testes manuais + pequenas refatorações.
