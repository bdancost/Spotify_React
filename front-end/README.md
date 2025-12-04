# Projeto Spotify (React) 🇧🇷

Aplicação front-end em React + back-end simples em Express que simula um player estilo "Spotify" com listas de artistas e músicas.

## Tecnologias

- Front-end: React + Vite ([Spotify/front-end/src/App.jsx](Spotify/front-end/src/App.jsx))
- Back-end: Node + Express ([Spotify/back-end/api/server.js](Spotify/back-end/api/server.js))
- Dados de exemplo: arrays de artistas e músicas ([Spotify/front-end/src/assets/database/artists.js](Spotify/front-end/src/assets/database/artists.js), [Spotify/front-end/src/assets/database/songs.js](Spotify/front-end/src/assets/database/songs.js))

## Estrutura principal do projeto

- Front-end

  - Código React: [Spotify/front-end/src](Spotify/front-end/src)
  - Configuração Vite: [Spotify/front-end/vite.config.js](Spotify/front-end/vite.config.js)
  - API cliente que busca dados: [Spotify/front-end/api/api.js](Spotify/front-end/api/api.js) — exporta [`artistArray`](Spotify/front-end/api/api.js) e [`songsArray`](Spotify/front-end/api/api.js)
  - Estilos principais: [Spotify/front-end/src/index.css](Spotify/front-end/src/index.css)
  - Componentes principais:
    - [`App`](Spotify/front-end/src/App.jsx) — rotas e estrutura
    - [`Header`](Spotify/front-end/src/components/Header.jsx)
    - [`Main`](Spotify/front-end/src/components/Main.jsx)
    - [`ItemList`](Spotify/front-end/src/components/ItemList.jsx)
    - [`SingleItem`](Spotify/front-end/src/components/SingleItem.jsx)
    - [`SongList`](Spotify/front-end/src/components/SongList.jsx)
    - [`SongItem`](Spotify/front-end/src/components/SongItem.jsx)
    - [`Player`](Spotify/front-end/src/components/Player.jsx)
  - Páginas:
    - [Spotify/front-end/src/pages/Home.jsx](Spotify/front-end/src/pages/Home.jsx)
    - [Spotify/front-end/src/pages/Artists.jsx](Spotify/front-end/src/pages/Artists.jsx)
    - [Spotify/front-end/src/pages/Artist.jsx](Spotify/front-end/src/pages/Artist.jsx)
    - [Spotify/front-end/src/pages/Songs.jsx](Spotify/front-end/src/pages/Songs.jsx)
    - [Spotify/front-end/src/pages/Song.jsx](Spotify/front-end/src/pages/Song.jsx)

- Back-end
  - Servidor e endpoints: [Spotify/back-end/api/server.js](Spotify/back-end/api/server.js)

## Endpoints da API

O back-end expõe:

- GET /api/artists → lista de artistas (implementado em [Spotify/back-end/api/server.js](Spotify/back-end/api/server.js))
- GET /api/songs → lista de músicas (implementado em [Spotify/back-end/api/server.js](Spotify/back-end/api/server.js))

> O front-end consome estes endpoints via [Spotify/front-end/api/api.js](Spotify/front-end/api/api.js). Por padrão esse arquivo usa a URL de deploy; para desenvolvimento local ajuste para `http://localhost:3000/api` se necessário.

## Como rodar (local)

1. Front-end

   - Abrir terminal e executar:
     ```sh
     cd Spotify/front-end
     npm install
     npm run dev
     ```
   - A aplicação front-end roda via Vite (ver [Spotify/front-end/vite.config.js](Spotify/front-end/vite.config.js)).

2. Back-end
   - Em outro terminal:
     ```sh
     cd Spotify/back-end
     npm install
     # Se existir script dev:
     npm run dev
     # ou start manual:
     node api/server.js
     ```
   - O servidor escuta por padrão na porta 3000 (veja [Spotify/back-end/api/server.js](Spotify/back-end/api/server.js)).

## Observações e dicas

- Os dados de exemplo estão em [Spotify/front-end/src/assets/database/songs.js](Spotify/front-end/src/assets/database/songs.js) e [Spotify/front-end/src/assets/database/artists.js](Spotify/front-end/src/assets/database/artists.js). O front importa esses arrays via [Spotify/front-end/api/api.js](Spotify/front-end/api/api.js) conforme ambiente.
- Componentes de player e formatos de tempo estão em [`Player`](Spotify/front-end/src/components/Player.jsx).
- Ajuste as rotas e IDs nas páginas [Spotify/front-end/src/pages/Song.jsx](Spotify/front-end/src/pages/Song.jsx) e [Spotify/front-end/src/pages/Artist.jsx](Spotify/front-end/src/pages/Artist.jsx) conforme necessidade.

## Contribuição

- Abrir uma branch, fazer mudanças e abrir PR. Foque em componentes isolados (`/src/components`) e no consumo de API (`/front-end/api/api.js`).

## Licença

- Projeto de estudo — adapte e use livremente
