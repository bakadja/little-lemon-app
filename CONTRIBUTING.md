# Contributing to Little Lemon App

First off, thank you for considering contributing to Little Lemon App! It's people like you that make this project such a great tool. We welcome contributions from everyone, whether it's fixing a bug, improving documentation, or suggesting new features.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [project_email@example.com](mailto:project_email@example.com).

## Getting Started

### Prerequisites
- Node.js (>= 16.x)
- npm (>= 8.x)
- Git

### Setting Up Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/little-lemon-app.git
   cd little-lemon-app
   ```
3. Add the original repository as a remote to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/bakadja/little-lemon-app.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes in your feature branch
2. Follow the [Coding Standards](#coding-standards)
3. Run tests to ensure your changes don't break anything:
   ```bash
   npm test
   ```
4. Update documentation if needed
5. Commit your changes following our [commit message conventions](#commit-message-guidelines)
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. [Submit a pull request](#pull-request-process)

## Pull Request Process

1. Update the README.md or relevant documentation with details of changes if applicable
2. Ensure all tests pass and add new tests for added features
3. The PR should work for all supported browsers and be responsive on all devices
4. Make sure your code follows the [Coding Standards](#coding-standards)
5. Your PR will be reviewed by at least one maintainer
6. Address any feedback or requested changes
7. Once approved, your PR will be merged by a maintainer

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history.

Examples:
```
feat: add reservation confirmation email
fix: resolve issue with menu item pricing
docs: update installation instructions
style: format code with prettier
refactor: restructure component directory
test: add tests for reservation component
```

## Coding Standards

- We use ESLint and Prettier for code formatting
- Run `npm run lint` before committing to ensure your code meets our standards
- Follow React best practices and patterns
- Use meaningful variable and function names
- Write comments for complex logic
- Use styled-components for styling
- Follow responsive design principles

### Style Guide

- Use functional components with hooks instead of class components
- Prefer destructuring for props and state
- Keep components small and focused on a single responsibility
- Use proper semantic HTML elements

## Testing

- Write tests for all new features and bug fixes
- Ensure all existing tests pass before submitting your changes
- We use Jest and React Testing Library for testing
- Aim for good test coverage

## Documentation

- Update documentation when you change functionality
- Use JSDoc comments for functions and components
- Keep the README.md up-to-date
- Document any complex logic or algorithms

## Community

- Join our [Discord server "DevProjects Hub"](https://discord.gg/VCqFE4wF) for discussions about this and other projects

- Connect with us on [GitHub Discussions](https://github.com/bakadja/little-lemon-app/discussions) for project updates and community interaction

---

Thank you again for your interest in contributing to Little Lemon App. Your efforts help make this project better for everyone!
