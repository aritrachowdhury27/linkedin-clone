# Contributing to ProNetwork

Thank you for your interest in contributing to ProNetwork! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/pronetwork-linkedin-clone.git
   cd pronetwork-linkedin-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Guidelines

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable and function names

### Component Structure

```tsx
// Import statements
import { useState } from 'react';
import { SomeType } from '../types';

// Interface definitions
interface ComponentProps {
  prop1: string;
  prop2: number;
}

// Component
export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks
  const [state, setState] = useState('');

  // Functions
  const handleAction = () => {
    // Implementation
  };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Commit Messages

Use clear and descriptive commit messages:

- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update README`
- `style: format code`
- `refactor: restructure component`
- `test: add tests`
- `chore: update dependencies`

## Pull Request Process

1. **Update documentation** if needed
2. **Test your changes** thoroughly
3. **Build the project** to ensure no errors
   ```bash
   npm run build
   ```
4. **Create a pull request** with a clear description
5. **Wait for review** and address any feedback

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── data/           # Mock data and constants
├── types.ts        # TypeScript type definitions
├── App.tsx         # Main application component
└── main.tsx        # Entry point
```

## Adding New Features

When adding new features:

1. Create new components in `src/components/`
2. Create new pages in `src/pages/`
3. Update types in `src/types.ts`
4. Add mock data in `src/data/mockData.ts`
5. Update navigation in `src/App.tsx` if needed

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🎉
