# Redux Setup

A modern boilerplate for building React applications with Redux Toolkit, powered by Vite and TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Configuration](#development-configuration)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Introduction

This project provides a clean and modular starting point for React applications using Redux Toolkit for state management. It leverages Vite for lightning-fast development, TypeScript for type safety, and ESLint for maintaining code quality.

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd redux-setup
npm install
````

> Ensure you are using **Node.js 18+** for best compatibility with ES modules and Vite.

## Usage

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Codebase

```bash
npm run lint
```

## Features

* **React 19** with concurrent features
* **Redux Toolkit** for simplified state management
* **React Redux** integration
* **Vite** for fast development and optimized builds
* **TypeScript** setup with project references
* **ESLint** with React and TypeScript plugins
* Modular and scalable structure for production-ready apps

## Scripts

| Script            | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Launches the development server        |
| `npm run build`   | Runs TypeScript build, then Vite build |
| `npm run preview` | Previews the production build locally  |
| `npm run lint`    | Runs ESLint across the codebase        |

## Dependencies

### Runtime

* [`react`](https://reactjs.org/) `^19.1.0`
* [`react-dom`](https://reactjs.org/docs/react-dom.html) `^19.1.0`
* [`@reduxjs/toolkit`](https://redux-toolkit.js.org/) `^2.8.2`
* [`react-redux`](https://react-redux.js.org/) `^9.2.0`

### Development

* [`vite`](https://vitejs.dev/) `^7.0.0`
* [`typescript`](https://www.typescriptlang.org/) `~5.8.3`
* [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) `^4.5.2`
* [`eslint`](https://eslint.org/) and related plugins:

  * `@eslint/js`
  * `eslint-plugin-react-hooks`
  * `eslint-plugin-react-refresh`
  * `typescript-eslint`
  * `globals`

## Development Configuration

* **ES Modules** enabled via `"type": "module"` in `package.json`
* **TypeScript project references** enabled via `tsc -b`
* ESLint is preconfigured for React 19 and TypeScript development
* Vite handles both dev server and production builds with HMR and optimized output

## Troubleshooting

* Ensure your Node version supports ES modules (Node 18+ recommended)
* For TypeScript errors, check your `tsconfig.json` references and paths
* If Vite or ESLint plugins are not working as expected, reinstall `node_modules`
* Clear Vite cache if needed: `rm -rf node_modules/.vite`

## Contributors

Maintained by the core team. Want to contribute? Fork the repo and submit a PR!