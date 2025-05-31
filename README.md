# Car Trawler

A React application for car rental management built with TypeScript, Vite, and SCSS.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the project in development mode:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` with hot module replacement
enabled.

## Production

To build the project for production:

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code using Prettier
- `npm run format:check` - Check code formatting without making changes

## Project Structure

- `/src` - Application source code
  - `/assets` - Static assets (icons, logos, etc.)
  - `/components` - Reusable UI components
  - `/features` - Feature-specific components and logic
  - `/layouts` - Layout components
  - `/pages` - Application pages/routes
  - `/router` - Routing configuration
  - `/types` - TypeScript type definitions
  - `/utils` - Utility functions

## Technologies

- React
- TypeScript
- Vite
- SCSS Modules
- ESLint
- Prettier

## Docker

You can run this application using Docker. Make sure you have Docker installed on your system.

### Building the Docker Image

To build the Docker image:

```bash
docker build -t cartrawler-app .
```

### Running the Container

To run the container:

```bash
docker run -p 3000:80 cartrawler-app
```

This will start the application and make it available at `http://localhost:3000`.

### Development with Docker

For development, you can use Docker to ensure a consistent environment:

1. Build the image:

   ```bash
   docker build -t cartrawler-app:dev .
   ```

2. Run the container with volume mounting for live updates:
   ```bash
   docker run -p 3000:80 -v ${PWD}:/app cartrawler-app:dev
   ```

## Deployment

### Netlify

This project is configured for deployment on Netlify. The `netlify.toml` file contains all necessary
configuration for:

- Build settings
- Node.js version
- Routing rules for the SPA

To deploy:

1. Push your changes to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy your application
