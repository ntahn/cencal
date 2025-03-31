# CenCal Project Setup

## Prerequisites

- Node.js version 23.10.0
- npm version 10.9.2
- Git

## Getting Started

1. Clone the repository

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Tech Stack

- Next.js 13+
- TypeScript
- React Hook Form
- Ant Design
- SCSS Modules
- Yup Validation

## Project Structure

```
src/
  ├── app/              # Next.js app directory
  ├── components/       # Shared components
  ├── constants/        # Constants and configurations
  ├── models/          # TypeScript interfaces
```

## Development Guidelines

- Use TypeScript for all new files
- Follow existing SCSS module pattern
- Use React Hook Form for forms
- Follow Ant Design patterns
- Write tests for new components

## Common Issues

### Node Version Mismatch

If you see dependency errors, ensure you're using the correct Node version:

```bash
nvm use 23
```

### SCSS Module Types

If SCSS modules show type errors, run:

```bash
npm run dev
```

This will regenerate TypeScript definitions.

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
