# FastAPI + React Demo

This project is a full-stack application that utilizes FastAPI for the backend and Vite for the frontend, providing a modern development experience.

## Project Structure

```bash
.
├── .vscode
│ └── launch.json # VSCode debug configuration
├── frontend # Frontend codebase
│ └── package.json # Frontend dependencies and scripts
└── main.py # FastAPI backend code
```

## Tech Stack

- **Backend**: FastAPI
- **Frontend**: Vite, React
- **Package Manager**: rye, pnpm

## Installation

Follow these steps to set up the project locally:

Install backend and frontend dependencies:

```bash
# backend
rye add fastapi uvicorn panadas

# frontend
cd frontend
pnpm install
```

## Running the Project

To run both the FastAPI backend and the Vite frontend simultaneously, use the following command:

```bash
uvicorn main:app --reload
cd frontend
pnpm dev
```

This command will start the FastAPI server and the Vite development server concurrently.

## Accessing the Application

- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **Frontend**: [http://localhost:5173](http://localhost:5173) (default Vite port)
