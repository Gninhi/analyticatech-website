# Recommended VS Code Extensions for Analyticatech Site

This document lists the recommended VS Code extensions for developing the Analyticatech website project. These extensions will enhance your development experience with features like code completion, linting, formatting, and preview capabilities.

## JavaScript/TypeScript Development

- **ESLint** (`dbaeumer.vscode-eslint`)
  - Integrates ESLint into VS Code for JavaScript/TypeScript linting
  - Works with your existing ESLint configuration

- **TypeScript Hero** (`rbbit.typescript-hero`)
  - Organizes imports and provides code navigation for TypeScript

- **JavaScript and TypeScript Nightly** (`ms-vscode.vscode-typescript-next`)
  - Latest TypeScript language features and improvements

## React/Next.js Development

- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
  - Provides snippets for React, Redux, and React Native

- **Next.js snippets** (`PulkitGangwar.nextjs-snippets`)
  - Code snippets for Next.js development

- **React Developer Tools** (`React.React-dev-tools`)
  - Integration with React Developer Tools for debugging

## CSS/Styling

- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
  - Intelligent Tailwind CSS class name completion
  - Shows color previews for Tailwind CSS classes

- **PostCSS Language Support** (`csstools.postcss`)
  - Syntax highlighting for PostCSS

- **CSS Modules** (`clinyong.vscode-css-modules`)
  - Autocomplete and go to definition for CSS Modules

## General Web Development

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
  - Consistent code formatting across your project
  - Works well with ESLint when properly configured

- **Path Intellisense** (`christian-kohler.path-intellisense`)
  - Autocompletes filenames in import statements

- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
  - Automatically rename paired HTML/JSX tags

- **Import Cost** (`wix.vscode-import-cost`)
  - Display the size of imported packages inline

## Git Integration

- **GitLens** (`eamodio.gitlens`)
  - Enhanced Git capabilities within VS Code
  - Blame annotations, code lens, and history exploration

- **Git History** (`donjayamanne.githistory`)
  - View and search git log, file history, and compare branches

## Productivity

- **Error Lens** (`usernamehw.errorlens`)
  - Highlights errors and warnings inline in your code

- **Todo Tree** (`Gruntfuggly.todo-tree`)
  - Finds and lists all TODO comments in your workspace

- **Code Spell Checker** (`streetsidesoftware.code-spell-checker`)
  - Spelling checker for source code

## Installation Instructions

You can install these extensions directly from VS Code:

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open the Extensions view
3. Search for the extension name or ID (in parentheses)
4. Click Install

Alternatively, you can use the VS Code CLI to install extensions. For example:

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
# ... and so on for other extensions
```

## Project-Specific Settings

Consider creating a `.vscode/settings.json` file in your project with recommended settings for these extensions to ensure consistent behavior across your development team.