## mastosearch

mastosearch is a simple search engine for Mastodon instances. It uses AI to query the the [Mastodon Instances API](https://instances.social/) and return the most relevant instances based on the user's query.

## Features

- Search for Mastodon instances based on a query
- Get a list of the most relevant instances based on the query

## Technologies

### Frontend

- [bun](https://bun.sh)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### Backend

- [bun](https://bun.sh)
- [Express](https://expressjs.com/)
- [OpenAI API](https://beta.openai.com/)
- [Mastodon Instances API](https://instances.social/)

## Docs

The project doesn't have any documentation in its traditional sense.
The project doesn't have traditional documentation. However, all core functionality is documented using JSDoc and through MDX in Ladle.

## Development

First things first, you need to clone the repository:

```bash
git clone https://github.com/paulbgtr/mastosearch
```

Then, in order to run the app locally, you would need to setup the backend and the frontend.

### Frontend

#### Running the frontend

The frontend is a simple Vite/React app. To run it, you need to install the dependencies and start the development server:

```bash
cd frontend
bun i
bun dev
```

#### Ladle

For those of you who want to be speedy in the kitchen, you can use the `bunx ladle serve` command to launch ladle and interact with the core components in isolation.

### Backend

#### Environment variables

1. Obtain your API key from the [Mastodon Instances API](https://instances.social/) and from the [OpenAI API](https://beta.openai.com/signup/).
2. Create a `.env` file in the `backend` directory and add the following environment variables:

```bash
OPENAI_API_KEY=your_openai_api_key
MASTODON_INSTANCES_API_KEY=your_mastodon_instances_api_key
```

#### Running the backend

The backend is an Express app powered by bun and TypeScript. To run it, you need to install the dependencies and start the development server:

```bash
cd backend
bun i
bun run --hot server.js
```
