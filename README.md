<<<<<<< HEAD
# GenAI_Hackaton

This project contains a frontend and a backend service, containerized using Docker.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TheCoder30ec4/GenAI_Hackaton.git
   cd GenAI_Hackaton
   ```

2. **Build and run the containers:**

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images for the frontend and backend services and start the containers.

3. **Access the applications:**

   - **Frontend:** Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
   - **Backend:** The backend service will be running at [http://localhost:8000](http://localhost:8000)

## Services

- **backend:** A Python-based backend service using the FastAPI framework.
- **frontend:** A JavaScript-based frontend service using the Next.js framework.

## Project Structure

```
.
├── Backend
│   ├── app
│   ├── Dockerfile
│   └── requirements.txt
├── Frontend
│   └── ease-my-trip
│       ├── app
│       ├── public
│       ├── Dockerfile
│       ├── next.config.ts
│       ├── package.json
│       └── ...
├── docker-compose.yaml
└── README.md
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 0dd5875 (intial commit)
