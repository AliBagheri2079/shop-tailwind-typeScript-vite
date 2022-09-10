# Shop-Tailwind-TypeScript-Vite

The project is built on top of Vite and prepared for writing libraries in TypeScript. It generates a hybrid package - both support for CommonJS and ESM modules.

## Features

- Postcss, autoprefixer, cssnano and ... style configuration
- Tailwind utility framework - Hero icons, Mamba Ui
- Typings bundle
- ESLint - scripts linter
- Stylelint - styles linter
- Prettier - formatter
- Husky + lint-staged - pre-commit git hook set up for formatting

## Api

In this project i use [FakeStoreApi](https://fakestoreapi.com/docs) who created by a persian man and very tanks to him

## GitHub Template

This is a template repo. Click the green [Use this template](https://github.com/kbysiec/vite-vanilla-ts-lib-starter/generate) button to get started.

## Checklist

When you use this template, update the following:

- Remove `.git` directory and run `git init` to clean up the history
- Change the name in `package.json` - it will be the name of the IIFE bundle global variable and bundle files name (`.cjs`, `.mjs`, `.iife.js`, `d.ts`)
- Change the author name in `LICENSE`
- Clean up the `README` and `CHANGELOG` files

And, enjoy :)

## Usage

The starter contains the following scripts:

- `dev` - starts dev server
- `build` - generates the following bundles: CommonJS (`.cjs`) ESM (`.mjs`) and IIFE (`.iife.js`). The name of bundle is automatically taked from `package.json` name property
- `lint:scripts` - lint `.ts` files with eslint
- `lint:styles` - lint `.css` and `.scss` files with stylelint
- `format:scripts` - format `.ts`, `.html` and `.json` files with prettier
- `format:styles` - format `.cs` and `.scss` files with stylelint
- `format` - format all with prettier and stylelint
- `prepare` - script for setting up husky pre-commit hook

## Acknowledgment

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.
